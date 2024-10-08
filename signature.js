// Get the button element
const button = document.getElementById('myButton');

// Get the paragraph element where the text will be added
const paragraph = document.getElementById('myParagraph');
const body = document.body;

// Define the array of possible lines
const lines = [
  'Hello, World!',
  'add here',
  // Add more lines here...
];

// Add an event listener to the button
button.addEventListener('click', () => {
  // Generate a random index for the lines array
  const randomIndex = Math.floor(Math.random() * lines.length);

  // Get the random line
  const randomLine = lines[randomIndex];

  // Add the random line to the paragraph
  paragraph.textContent += `${randomLine}\n`; // Use textContent instead of innerHTML

  // Generate random RGB values
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  // Create an RGB color string
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  // Update the background color
  body.style.backgroundColor = randomColor;
});
