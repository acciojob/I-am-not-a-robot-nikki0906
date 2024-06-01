//your code here
// script.js

// Array to hold image URLs
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
];

// Get elements
const imagesElements = document.querySelectorAll('.container img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to check if all images are same
function checkAllSame() {
    const firstImage = imagesElements[0].src;
    for (let i = 1; i < imagesElements.length; i++) {
        if (imagesElements[i].src !== firstImage) {
            return false;
        }
    }
    return true;
}

// Event listeners
imagesElements.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.add('selected');
        const selectedImages = document.querySelectorAll('.selected');
        if (selectedImages.length === 2) {
            verifyButton.style.display = 'block';
        }
        if (selectedImages.length > 2) {
            verifyButton.style.display = 'none';
        }
    });
});

resetButton.addEventListener('click', () => {
    imagesElements.forEach(img => {
        img.classList.remove('selected');
    });
    verifyButton.style.display = 'none';
});

verifyButton.addEventListener('click', () => {
    if (checkAllSame()) {
        para.textContent = 'You are a human. Congratulations!';
    } else {
        para.textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
});

