// Function to create the typewriter effect
function typewriterEffect(elementId, delay = 100) {
  const element = document.getElementById(elementId);
  const text = element.innerHTML;
  element.innerHTML = ''; // Clear the original content

  let delayOffset = 0;

  // Loop through each character in the text
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.innerHTML = char === ' ' ? '&nbsp;' : char; // Keep spaces consistent
    element.appendChild(span);

    // Add the 'show' class with a delay to each character
    setTimeout(() => {
      span.classList.add('show');
    }, delayOffset);
    
    delayOffset += delay; // Increase delay for each letter
  });
}

// Initialize typewriter effect on page load for both elements
window.addEventListener('load', () => {
  typewriterEffect('animated-heading', 100);   // Adjust delay as needed for first line
  typewriterEffect('animated-heading2', 100);  // Adjust delay as needed for second line
});







// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });