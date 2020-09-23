// Kung Fu Panda Slideshow / Gallery

// Global Variable
let imgPaths = ["po.png", "tigress.png", "viper.png", "monkey.png", "crane.png"];
let imgIndex = 0;

// Event Listeners
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("random").addEventListener("click", randomSlide);

// Event Functions
function nextSlide() {
    // Increment
    imgIndex++;
    if (imgIndex == imgPaths.length) {
        imgIndex = 0;
    }

    // Display the new image
    document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
}

function randomSlide() {
    // Get a random index: integer b/t 0 and up to the length of the array
    imgIndex = Math.randomInt(0, imgPaths.length);

    // Display the new image
    document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
}

