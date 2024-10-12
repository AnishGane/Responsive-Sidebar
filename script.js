// Get the button(s) that toggle the sidebar (could be one or more elements)
const toggleButton = document.getElementsByClassName("toggle-btn");

// Get the sidebar element by its ID
const sidebar = document.getElementById("sidebar");

// Function to toggle the sidebar visibility and close all open sub-menus
function toggleSidebar() {
  // Toggle the 'close' class to open or close the sidebar
  sidebar.classList.toggle("close");

  // Toggle the rotation class on the toggle button
  toggleButton.classList.toggle("rotate");

  // Close all sub-menus when the sidebar is toggled
  closeAllSubMenus();
}

// Function to toggle the visibility of a specific sub-menu
function toggleSubMenu(button) {
  // Check if the clicked button's sub-menu is not already visible
  if (!button.nextElementSibling.classList.contains("show")) {
    // Close any other open sub-menus before opening the new one
    closeAllSubMenus();
  }

  // Get the next sibling element, which should be the sub-menu
  const submenu = button.nextElementSibling;

  // Check if the submenu exists and is valid (to avoid errors)
  if (submenu) {
    // Toggle the 'show' class to display or hide the sub-menu
    submenu.classList.toggle("show");
  } else {
    // Log an error if no submenu is found
    console.error("No submenu found.");
  }

  // Toggle the rotation of the button to indicate it's been clicked
  button.classList.toggle("rotate");

  // If the sidebar is closed when a sub-menu is opened, reopen the sidebar
  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

// Function to close all sub-menus in the sidebar
function closeAllSubMenus() {
  // Get all elements with the 'show' class (open sub-menus)
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    // Remove the 'show' class to close the sub-menu
    ul.classList.remove("show");

    // Also remove the 'rotate' class to reset the button's appearance
    ul.previousElementSibling.classList.remove("rotate");
  });
}
