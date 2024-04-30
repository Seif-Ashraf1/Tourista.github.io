    const cards = document.querySelectorAll(".card");

    window.onload = function () {
    cards.forEach((card) => {
        let seeMore = card.querySelector(".see-more");
        let textContent = card.querySelector(".card-content .text");

        if (textContent.scrollHeight == textContent.clientHeight) {
        seeMore.style.display = "none";
        textContent.style.height = "fit-content";
        } else {
        card.classList.add("gradient");
        }
    });
    };

    cards.forEach((card) => {
    let seeMore = card.querySelector(".see-more");
    let textContent = card.querySelector(".card-content .text");

    seeMore.addEventListener("click", () => {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if (card.classList.contains("active")) {
        seeMore.innerHTML = "See Less";
        textContent.style.height = textContent.scrollHeight + "px";
        } else {
        seeMore.innerHTML = "See More";
        textContent.style.height = "100px";
        }
    });
    });
