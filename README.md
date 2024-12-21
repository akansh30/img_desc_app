# Image Description Web App

This repository sets up a user-friendly interface using HTML, CSS, and JavaScript for uploading images and generating descriptions based on the images using the Hugging Face API. The backend is built with Flask, utilizing a REST API for communication.

![Screenshot 2024-12-21 233550](https://github.com/user-attachments/assets/fdfb51eb-bdd8-422c-8534-1c0de74ddcc4)
![Screenshot 2024-12-21 233640](https://github.com/user-attachments/assets/d36cfb7d-6eba-4f76-b1cf-42e92f1fd8d2)
![Screenshot 2024-12-21 233750](https://github.com/user-attachments/assets/1c252ebb-cd7e-45b0-bc4d-4c47f79a6d57)
![Screenshot 2024-12-21 234006](https://github.com/user-attachments/assets/98e7310e-1d73-436b-aa66-aeb2f09debcb)

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
Create a .env file in the root directtory and add your Hugging Face API key like this:
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




