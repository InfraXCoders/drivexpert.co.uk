#!/usr/bin/env python3
"""Black out the number plate area on Background.jpeg so the plate text is invisible."""

from PIL import Image

def blackout_plate(image_path: str, output_path: str | None = None) -> None:
    """Draw a solid black rectangle over the number plate area."""
    if output_path is None:
        output_path = image_path

    img = Image.open(image_path).convert("RGB")
    width, height = img.size

    # Cover only the number plate (SR19 HGK) - plate-shaped rectangle on lower bumper.
    # UK plate proportions: wide, short strip, centered.
    left = int(width * 0.36)
    top = int(height * 0.58)
    right = int(width * 0.64)
    bottom = int(height * 0.64)

    from PIL import ImageDraw
    draw = ImageDraw.Draw(img)
    draw.rectangle([left, top, right, bottom], fill="black", outline="black")

    img.save(output_path, "JPEG", quality=95)
    print(f"Saved: {output_path} (plate area blacked out)")

if __name__ == "__main__":
    blackout_plate("Background.jpeg")
