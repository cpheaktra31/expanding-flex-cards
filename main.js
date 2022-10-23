let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", function(){
        document.querySelectorAll(".card").forEach(notActive => {
            notActive.classList.remove("active");
        });
        this.classList.add("active");
    });
});
