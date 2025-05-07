// Number of raindrops
const numberOfRaindrops = 100;

// Function to generate the rain
function createRain() {
  const rainContainer = document.querySelector(".rain");

  for (let i = 0; i < numberOfRaindrops; i++) {
    // Create a raindrop
    const raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");

    // Random position for the raindrop on the X axis
    const xPosition = Math.random() * window.innerWidth;
    // Random fall speed (animation duration)
    const fallDuration = Math.random() * 2 + 3; // between 3 to 5 seconds

    // Styling the raindrop
    raindrop.style.left = `${xPosition}px`;
    raindrop.style.animationDuration = `${fallDuration}s`;
    raindrop.style.animationDelay = `${Math.random() * 5}s`; // random delay for each raindrop

    // Add the raindrop to the container
    rainContainer.appendChild(raindrop);
  }
}

// Initialize the rain
createRain();
