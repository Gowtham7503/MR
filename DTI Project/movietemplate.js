document.addEventListener("DOMContentLoaded", () => {
  const poster = document.querySelector(".moviecard");
  const zoomOverlay = document.querySelector(".zoom-overlay");
  const zoomImage = zoomOverlay.querySelector("img");

  if (poster && zoomOverlay && zoomImage) {
    // Show zoom overlay and set image source when poster is clicked
    poster.addEventListener("click", () => {
      const posterSrc = poster.getAttribute("data-poster");
      if (posterSrc) {
        zoomImage.src = posterSrc;
        zoomOverlay.classList.add("show");
      } else {
        console.error("No poster image URL found in data-poster attribute.");
      }
    });

    // Hide zoom overlay when clicked anywhere on the overlay
    zoomOverlay.addEventListener("click", () => {
      zoomOverlay.classList.remove("show");
      zoomImage.src = ""; // Clear source to prevent flicker
    });

    // Optional: ESC key to close zoom overlay
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        zoomOverlay.classList.remove("show");
        zoomImage.src = "";
      }
    });
  } else {
    console.error("Required elements (.moviecard, .zoom-overlay, or img) not found.");
  }
});