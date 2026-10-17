document.addEventListener("click", function(event) {
    const button = event.target.closest(".filter-btn");

    if (!button) return;

    const selectedCategory = button.dataset.filter;
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");

    buttons.forEach(function(item) {
        item.classList.toggle("active", item === button);
    });

    cards.forEach(function(card) {
        const category = card.querySelector(".project-category");

        if (!category) return;

        const matches =
            selectedCategory === "ALL" ||
            category.textContent.trim() === selectedCategory;

        card.hidden = !matches;
    });
});