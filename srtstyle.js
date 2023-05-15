// Initialize an array to store the website shortcuts
let shortcuts = [];

// Function to show the form for adding a new shortcut
function showForm() {
  document.getElementById('form-container').style.display = 'block';
}

// Function to hide the form
function hideForm() {
  document.getElementById('form-container').style.display = 'none';
}

// Function to add a new shortcut
function addShortcut() {
  // Get the form values
  const url = document.getElementById('website-url').value;
  const title = document.getElementById('website-title').value;
  const icon = document.getElementById('website-icon').files[0];

  // Create a new object to represent the shortcut
  const shortcut = {
    url,
    title,
    icon
  };

  // Add the new shortcut to the array
  shortcuts.unshift(shortcut);

  // Clear the form
  document.getElementById('website-url').value = '';
  document.getElementById('website-title').value = '';
  document.getElementById('website-icon').value = '';

  // Update the shortcut container with the new shortcut
  updateShortcutContainer();

  // Hide the form
  hideForm();
}

// Function to update the shortcut container with the latest shortcuts
function updateShortcutContainer() {
  // Get the shortcut container element
  const container = document.getElementById('shortcut-container');

  // Clear the existing shortcuts
  container.innerHTML = '';

  // Loop through the shortcuts and add each one to the container
  shortcuts.forEach((shortcut) => {
    // Create a new shortcut element
    const shortcutElem = document.createElement('div');
    shortcutElem.classList.add('shortcut');
    shortcutElem.onclick = () => {
      // Redirect to the website URL when the shortcut is clicked
      window.location.href = shortcut.url;
    };

    // Create an image element for the shortcut icon
    const iconElem = document.createElement('img');
    iconElem.src = URL.createObjectURL(shortcut.icon);
    iconElem.alt = shortcut.title;
    shortcutElem.appendChild(iconElem);

    // Create a span element for the shortcut title
    const titleElem = document.createElement('span');
    titleElem.textContent = shortcut.title;
    shortcutElem.appendChild(titleElem);

    // Add the shortcut element to the container
    container.appendChild(shortcutElem);
  });
}

// Add an event listener to the form submit button
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission
  addShortcut(); // Add the new shortcut
});

// Update the shortcut container with any existing shortcuts
updateShortcutContainer();
