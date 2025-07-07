from flask import jsonify, send_from_directory
import os

IMAGE_DIRECTORY = os.path.join(os.getcwd(), 'app', 'static', 'images')

def get_images(conditions):
    image_files = []
    for condition in conditions:
        image_filename = f"{condition.lower().replace(' ', '_')}.png"
        image_path = os.path.join(IMAGE_DIRECTORY, image_filename)
        if os.path.exists(image_path):
            image_files.append(image_filename)
        else:
            image_files.append(None)  # or skip, or add a placeholder
    return image_files

def list_images():
    images = [img for img in os.listdir(IMAGE_DIRECTORY) if img.endswith('.png')]
    return jsonify(images)