// Add a listener for the mouseout event on the sidebar
document.querySelector(".sidenav").addEventListener("mouseout", function () {
    // Hide the sidebar
    this.style.left = "-200px";
  });
  