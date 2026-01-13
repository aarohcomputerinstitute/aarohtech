from PIL import Image
import os

def resize_and_crop(image_path, target_size):
    try:
        img = Image.open(image_path)
        # Target aspect ratio
        target_ratio = target_size[0] / target_size[1]
        img_ratio = img.width / img.height
        
        if img_ratio > target_ratio:
            # Image is wider than target
            new_width = int(img.height * target_ratio)
            offset = (img.width - new_width) // 2
            box = (offset, 0, offset + new_width, img.height)
        else:
            # Image is taller than target
            new_height = int(img.width / target_ratio)
            offset = (img.height - new_height) // 2
            box = (0, offset, img.width, offset + new_height)
            
        img = img.crop(box)
        img = img.resize(target_size, Image.Resampling.LANCZOS)
        return img
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return None

target_path = 'public/img/photos/movie2.jpg'
sa16_size = (285, 546)

if os.path.exists(target_path):
    new_img = resize_and_crop(target_path, sa16_size)
    if new_img:
        new_img.save(target_path)
        print(f"Successfully resized {target_path} to {sa16_size}")
else:
    print(f"File not found: {target_path}")
