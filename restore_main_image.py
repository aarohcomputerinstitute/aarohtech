from PIL import Image
import os

base_dir = r"f:\aaroh-new\public\img\photos"

# Mapping: (Source File, Target File, Target Size)
restore_map = [
    ("sa16.jpg", "ai-main.png", (285, 546)),
    ("sa16@2x.jpg", "ai-main@2x.png", (570, 1092))
]

def restore_image(source_name, target_name, size):
    source_path = os.path.join(base_dir, source_name)
    target_path = os.path.join(base_dir, target_name)
    
    if not os.path.exists(source_path):
        print(f"Source not found: {source_path}")
        return

    try:
        with Image.open(source_path) as img:
            # Ensure it's RGB
            img = img.convert("RGB")
            
            # Resize exact (since sa16 matches the target aspect ratio roughly or exactly)
            # sa16 is 285x546, so it's an exact match. 
            # We treat it as the "master" source.
            
            img_resized = img.resize(size, Image.LANCZOS)
            img_resized.save(target_path, "PNG")
            print(f"Restored {target_name} from {source_name} ({size[0]}x{size[1]})")
            
    except Exception as e:
        print(f"Error restoring {target_name}: {e}")

if __name__ == "__main__":
    for src, tgt, dims in restore_map:
        restore_image(src, tgt, dims)
