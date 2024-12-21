const dropbox = document.getElementById("dropbox");
const imageInput = document.getElementById("imageInput");
const uploadForm = document.getElementById("uploadForm");
const outputImage = document.getElementById("uploadedImage");
const descriptionText = document.getElementById("description");

let selectedFile = null;

// Handle Drag-and-Drop events
dropbox.addEventListener("click", () => imageInput.click());

dropbox.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropbox.classList.add("dragover");
});

dropbox.addEventListener("dragleave", () => {
    dropbox.classList.remove("dragover");
});

dropbox.addEventListener("drop", (e) => {
    e.preventDefault();
    dropbox.classList.remove("dragover");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        selectedFile = files[0];
        dropbox.innerHTML = `<p>${selectedFile.name} selected. Ready to upload.</p>`;
    }
});

// Handle file selection via input
imageInput.addEventListener("change", (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        selectedFile = files[0];
        dropbox.innerHTML = `<p>${selectedFile.name} selected. Ready to upload.</p>`;
    }
});

// Handle form submission
uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!selectedFile) {
        alert("Please select an image to upload.");
        return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
        const response = await fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.error) {
            alert(data.error);
        } else {
            outputImage.src = URL.createObjectURL(selectedFile);
            outputImage.style.display = "block";
            descriptionText.innerText = `Description: ${data.description}`;
        }
    } catch (error) {
        alert("An error occurred while processing your request.");
    }
});
