document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "PKred.jpg",
        "RCred.jpg",
        "prabossred.jpg",
        "bhAAired.jpg"
    ];

    const texts = [
        "OG-Original Gangster",
        "Gamechanger",
        "Salaar-ceasefire",
        "Pushpa2-The Rule"
    ];

    const captions = [
        "OG revolves around a ruthless don named Ojas Gambheera OG who returns to Mumbai following his ten year disappearance, to kill another crime boss, Omi Bhau.",
        "An honest IAS officer's fight against a corrupt political system through fair and transparent elections.",
        "The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.",
        "As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new."
    ];

    let index = 0;
    let captionTimeout;

    function typeWriterEffect(text, element, speed = 50) {
        element.textContent = "";
        element.classList.remove("cursor-blink");
        let i = 0;
        clearTimeout(captionTimeout);

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                captionTimeout = setTimeout(type, speed);
            } else {
                element.classList.add("cursor-blink");
            }
        }

        type();
    }

    function showSlide() {
        const background = document.getElementById("background");
        const slideText = document.getElementById("slideText");
        const slideCaption = document.getElementById("slideCaption");

        if (!background || !slideText || !slideCaption) {
            console.error("Error: Missing elements!");
            return;
        }

        slideText.classList.remove("fade-in");
        slideCaption.classList.remove("fade-in");
        background.classList.add("fade-out");

        setTimeout(() => {
            background.style.backgroundImage = `url("${images[index]}")`;
            background.classList.remove("fade-out");

            slideText.textContent = texts[index];
            slideText.classList.add("fade-in");

            slideCaption.textContent = "";
            setTimeout(() => {
                typeWriterEffect(captions[index], slideCaption);
            }, 300);
        }, 300);
    }

    showSlide();

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        showSlide();
    });

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % images.length;
        showSlide();
    });

    // **Movie Card Click Event for Redirection**
    document.querySelectorAll(".moviecard").forEach(card => {
        card.addEventListener("click", function () {
            const url = this.dataset.url;
            if (url) {
                window.location.href = url;
            } else {
                console.error("No URL found for this movie card.");
            }
        });
    });

    document.querySelectorAll(".seriescard").forEach(card => {
        card.addEventListener("click", function () {
            const url = this.dataset.url;
            if (url) {
                window.location.href = url;
            } else {
                console.error("No URL found for this movie card.");
            }
        });
    });

    document.querySelectorAll(".moviecard2").forEach(card => {
        card.addEventListener("click", function () {
            const url = this.dataset.url;
            if (url) {
                window.location.href = url;
            } else {
                console.error("No URL found for this movie card.");
            }
        });
    });

    // **Live Search for Movies & Series**
    function liveSearch() {
         let searchText = document.getElementById("title").value.toLowerCase();
        let allCards = document.querySelectorAll(".moviecard, .moviecard2, .seriescard");

        allCards.forEach(card => {
            let cardText = card.querySelector(".card-text").innerText.toLowerCase();
            if (cardText.includes(searchText)) {
                card.style.display = "block"; // Show matching cards
            } else {
                card.style.display = "none"; // Hide non-matching cards
            }
        });
    }

    // Attach the function to the search box
    document.getElementById("title").addEventListener("keyup", liveSearch);

    document.getElementById("background").classList.add("transition-effect");
});
