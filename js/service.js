document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {

            // reset semua card
            cards.forEach(c => {
                c.classList.remove("bg-blue-600", "text-white");
                c.classList.add("bg-white");
            });

            // aktifkan yang diklik
            this.classList.remove("bg-white");
            this.classList.add("bg-blue-600", "text-white");
        });
    });
});