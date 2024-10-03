
	// Get the button element
const button = document.getElementById('myButton');

// Get the paragraph element where the text will be added
const paragraph = document.getElementById('myParagraph');

// Define the array of possible lines
//past the folowing 
const lines = [
  'Hello, World!',
  'add here',
  
];

// Add an event listener to the button
button.addEventListener('click', () => {
  // Generate a random index for the lines array
  const randomIndex = Math.floor(Math.random() * lines.length);

  // Get the random line
  const randomLine = lines[randomIndex];

  // Add the random line to the paragraph
  paragraph.innerHTML += `<br>${randomLine}`;
});
