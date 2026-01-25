
import base64
import os

file_path = "f:/aaroh-new/public/img/logo-aaroh.png"

try:
    with open(file_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        print(f"data:image/png;base64,{encoded_string}")
except Exception as e:
    print(f"Error: {e}")
