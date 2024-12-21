from flask import Flask, request, jsonify, send_from_directory
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
API_KEY = os.getenv("HF_API_KEY")
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

app = Flask(__name__, static_folder="../frontend", static_url_path="")
UPLOAD_FOLDER = "../images"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def query_image_to_caption(image_path):
    with open(image_path, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=HEADERS, data=data)
    return response.json()

@app.route('/')
def index():
    # Serve the frontend HTML file
    return send_from_directory('../frontend', 'index.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files['image']
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
    image.save(image_path)

    # Get description from Hugging Face API
    result = query_image_to_caption(image_path)
    if isinstance(result, list) and len(result) > 0:
        description = result[0].get("generated_text", "No description available")
    else:
        description = "No description available"

    return jsonify({"description": description})

if __name__ == "__main__":
    app.run(debug=True)
