const cardButtons = document.querySelectorAll(".card");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function openModal(event) {
    const button = event.target;
    const card = button.closest(".card");
    const img = card.querySelector("img").src;
    const desc = card.dataset.description;
    const name = card.querySelector("h2").textContent;

    modalInner.innerHTML = `
        <img width="600" height="600" src="${img.replace(
            "200",
            "600"
        )}" alt="${name}"/>
        <p>${desc}</p> 
    `;

    modalOuter.classList.add("open");
}

const closeModal = () => modalOuter.classList.remove("open");

cardButtons.forEach((button) => button.addEventListener("click", openModal));

window.addEventListener("keydown", checkForEsc);
modalOuter.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal-inner");
    if (isOutside) closeModal();
});

function checkForEsc(event) {
    if (event.key == "Escape") closeModal();
    else console.log(event.key);
}
