document.addEventListener("DOMContentLoaded", function () {
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

    // Attach the function to the search box
    document.getElementById("title").addEventListener("keyup", liveSearch);

    document.getElementById("background").classList.add("transition-effect");
});
