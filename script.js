//your JS code here. If required.
// Function to wait for a specified time and resolve with a message
async function showMessageWithDelay(text, delayInSeconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delayInSeconds * 1000);
  });
}

// Get elements from the HTML
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Event listener for the button click
btn.addEventListener('click', async () => {
  // Get user input
  const text = textInput.value;
  const delay = parseFloat(delayInput.value);

  // Check if the delay is a valid number
  if (!isNaN(delay)) {
    // Call the async function and wait for the result
    try {
      const result = await showMessageWithDelay(text, delay);

      // Display the result in the output div
      outputDiv.innerText = `Message: ${result}`;
    } catch (error) {
      // Handle errors if any
      console.error(error);
    }
  } else {
    // Display an error message for invalid delay input
    outputDiv.innerText = 'Please enter a valid delay.';
  }
});
