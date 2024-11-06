// Function to create the typewriter effect
function typewriterEffect(elementId, delay = 100) {
  const element = document.getElementById(elementId);
  const text = element.innerHTML;
  element.innerHTML = ""; // Clear the original content

  let delayOffset = 0;

  // Loop through each character in the text
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.innerHTML = char === " " ? "&nbsp;" : char; // Keep spaces consistent
    element.appendChild(span);

    // Add the 'show' class with a delay to each character
    setTimeout(() => {
      span.classList.add("show");
    }, delayOffset);

    delayOffset += delay; // Increase delay for each letter
  });
}

// Initialize typewriter effect on page load for both elements
window.addEventListener("load", () => {
  typewriterEffect("animated-heading", 100); // Adjust delay as needed for first line
  typewriterEffect("animated-heading2", 100); // Adjust delay as needed for second line
});
