# Image Description App

This repository allows you to generate image descriptions using a custom AI model. Follow the steps below to clone, set up, and run the application.

## Steps to Set Up

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/akansh30/img_desc_app.git
```
### 2. Set Up the Virtual Environment

Navigate to the backend folder:
 ```bash
cd backend
```
Create a virtual environment:
```bash
python -m venv venv
```
### 3. Activate the Virtual Environment
```bash
source venv/Scripts/activate
```
### 4. Install dependencies inside backend folder
```bash
pip install -r ../requirements.txt
```
### 5. Configure API key
Create a .env file in the backend folder and add your Hugging Face API key like this:
```bash
HF_API_KEY = "<your_api_key>"
```
### 6. Run the Application
```bash
python app.py
```
### 7. View the application
```bash
http://127.0.0.1:5000
```
### 8. Image Storage
The application will automatically store all processed images in a self-created ```
images``` folder in the ```backend``` directory.




