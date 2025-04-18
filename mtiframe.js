document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("trailer");
  
    if (!iframe) return;
  
    const originalSrc = iframe.getAttribute("src");
    const hasQuery = originalSrc.includes("?");
    const autoplaySrc = originalSrc + (hasQuery ? "&" : "?") + "autoplay=1&mute=1";
  
    iframe.addEventListener("mouseenter", () => {
      iframe.src = autoplaySrc;
    });
  
    iframe.addEventListener("mouseleave", () => {
      iframe.src = originalSrc;
    });
  });
  