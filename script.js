// script.js

// Wrap your code in a block or use an IIFE (Immediately Invoked Function Expression) to create a separate scope
(function () {
  // Get all elements with the class 'clickable-image'
  const clickableImages = document.querySelectorAll(".clickable-image");

  // Iterate over each clickable image and add a click event listener
  clickableImages.forEach((image) => {
    image.addEventListener("click", function () {
      // Check which image was clicked based on its 'alt' attribute
      const altText = image.alt.toLowerCase(); // Convert to lowercase for case-insensitive comparison

      // Perform the appropriate action based on the clicked image
      if (altText === "india pale ale" || altText === "aalborg taffel akvavit") {
        console.log("Indeholder alkohol");
      } else if (altText === "japansk blåbærsoda" || altText === "faxe kondi") {
        console.log("Alkoholfri");
      } else {
        console.log("Unknown image clicked");
      }
    });
  });
})();
