"""Generates the PNG app icons. Run: python3 tools/make_icons.py (needs Pillow)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

OUT = Path(__file__).resolve().parent.parent / "icons"
S = 1024  # draw large, then downscale for smooth edges


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def draw_icon(scale=1.0):
    """scale < 1 shrinks the artwork (for maskable icons with a safe zone)."""
    img = Image.new("RGB", (S, S))
    top, bottom = (255, 138, 61), (226, 74, 18)
    px = img.load()
    for y in range(S):
        c = lerp(top, bottom, y / S)
        for x in range(S):
            px[x, y] = c

    art = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(art)
    white, dark, glow = (255, 255, 255, 255), (60, 32, 16, 255), (255, 183, 77, 255)

    # steam
    for i, x in enumerate((392, 512, 632)):
        y0 = 150 if i == 1 else 175
        d.arc((x - 40, y0, x + 40, y0 + 90), 90, 270, fill=white, width=22)
        d.arc((x - 40, y0 + 80, x + 40, y0 + 170), 270, 90, fill=white, width=22)
    # body
    d.rounded_rectangle((242, 330, 782, 880), radius=110, fill=white)
    # control strip + dial
    d.rounded_rectangle((302, 380, 722, 450), radius=35, fill=(255, 226, 204, 255))
    d.ellipse((480, 383, 544, 447), fill=(226, 74, 18, 255))
    # basket window
    d.rounded_rectangle((302, 500, 722, 800), radius=60, fill=dark)
    # a pile of chips, tilted at different angles
    chips = [(-28, 400, 690), (22, 620, 690), (-12, 455, 650), (14, 570, 655), (-4, 515, 625),
             (35, 660, 720), (-38, 365, 725), (6, 540, 700), (-18, 480, 715)]
    for angle, cx, cy in chips:
        chip = Image.new("RGBA", (60, 200), (0, 0, 0, 0))
        cd = ImageDraw.Draw(chip)
        cd.rounded_rectangle((8, 8, 52, 192), radius=16, fill=glow, outline=(214, 120, 30, 255), width=5)
        chip = chip.rotate(angle, expand=True, resample=Image.BICUBIC)
        art.alpha_composite(chip, (cx - chip.width // 2, cy - chip.height // 2))
    # mask chips to the window so nothing pokes out
    window = Image.new("L", (S, S), 0)
    ImageDraw.Draw(window).rounded_rectangle((302, 500, 722, 800), radius=60, fill=255)
    body_only = art.copy()
    d2 = ImageDraw.Draw(body_only)
    d2.rounded_rectangle((302, 500, 722, 800), radius=60, fill=dark)
    art = Image.composite(art, body_only, window)
    d = ImageDraw.Draw(art)
    # handle
    d.rounded_rectangle((432, 820, 592, 858), radius=19, fill=(255, 226, 204, 255))

    if scale != 1.0:
        size = int(S * scale)
        art = art.resize((size, size), Image.LANCZOS)
        layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        off = (S - size) // 2
        layer.paste(art, (off, off), art)
        art = layer

    shadow = art.split()[3].filter(ImageFilter.GaussianBlur(18))
    shade = Image.new("RGBA", (S, S), (120, 30, 0, 90))
    img.paste(shade, (0, 14), shadow)
    img.paste(art, (0, 0), art)
    return img


def main():
    OUT.mkdir(exist_ok=True)
    full = draw_icon(0.92)
    for name, size in (("icon-512.png", 512), ("icon-192.png", 192), ("apple-touch-icon.png", 180)):
        full.resize((size, size), Image.LANCZOS).save(OUT / name, optimize=True)
    draw_icon(0.72).resize((512, 512), Image.LANCZOS).save(OUT / "icon-maskable-512.png", optimize=True)
    print("Icons written to", OUT)


if __name__ == "__main__":
    main()
