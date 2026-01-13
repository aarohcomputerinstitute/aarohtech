import os
from PIL import Image

# Mapping: filename -> (width, height) at 1x
targets = {
    "ai-side1.png": (125, 90),
    "ai-side3.png": (150, 166),
    "ai-main.png": (285, 546),
    "ai-side2.png": (125, 40),
    "ai-side4.png": (150, 147),
    "ai-side5.png": (175, 102)
}

base_dir = r"f:\aaroh-new\public\img\photos"

def resize_and_crop(img, target_size):
    target_w, target_h = target_size
    im_w, im_h = img.size
    
    target_ratio = target_w / target_h
    im_ratio = im_w / im_h
    
    if target_ratio > im_ratio:
        # Target is wider, fit to width
        scale = target_w / im_w
        new_w = target_w
        new_h = int(im_h * scale)
    else:
        # Target is taller, fit to height
        scale = target_h / im_h
        new_h = target_h
        new_w = int(im_w * scale)
        
    img_resized = img.resize((new_w, new_h), Image.LANCZOS)
    
    # Center crop
    left = (new_w - target_w) / 2
    top = (new_h - target_h) / 2
    right = (new_w + target_w) / 2
    bottom = (new_h + target_h) / 2
    
    return img_resized.crop((left, top, right, bottom))

for filename, (w, h) in targets.items():
    source_path = os.path.join(base_dir, filename)
    
    if not os.path.exists(source_path):
        print(f"File not found: {source_path}")
        continue
        
    try:
        # Open the source image
        with Image.open(source_path) as img:
            # We need to process it. Since we are overwriting, we should perhaps load it into memory fully.
            img = img.copy()
            
            # --- Generate 1x ---
            new_img = resize_and_crop(img, (w, h))
            new_img.save(source_path)
            print(f"Resized {filename} to {w}x{h}")
            
            # --- Generate 2x ---
            filename_2x = filename.replace(".png", "@2x.png")
            path_2x = os.path.join(base_dir, filename_2x)
            
            # Use original source img for 2x to keep better quality
            new_img_2x = resize_and_crop(img, (w * 2, h * 2))
            new_img_2x.save(path_2x)
            print(f"Resized {filename_2x} to {w*2}x{h*2}")
            
    except Exception as e:
        print(f"Error processing {filename}: {e}")
