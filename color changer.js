// Get the button and body elements
const button = document.getElementById('myButton');
const body = document.body;

// Add an event listener to the button
button.addEventListener('click', () => {
  // Generate random RGB values
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  // Create an RGB color string
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  // Update the background color
  body.style.backgroundColor = randomColor;
});
