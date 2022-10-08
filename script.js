let input = document.querySelector(".input");
let addButton = document.querySelector(".add-btn");
let cards = document.querySelector(".cards");

input.addEventListener("input", () => {
    if (!(input.value === "" || typeof (input.value) === "undefined")) {
        addButton.classList.remove("disabled");
    } else {
        addButton.classList.add("disabled");
    }
})

addButton.addEventListener("click", function add() {
    let val = input.value;
    let flash = createFlashCard(val)
    cards.appendChild(flash);
    input.value = "";
    addButton.classList.add("disabled");
});

function deleteFlash(item) {
    item.remove();
}
function createFlashCard(val) {
    let flash = document.createElement("DIV");
    document.createElement("DIV");
    flash.classList.add("flash-card");
    flash.innerHTML = `<button class="del-btn" onClick="deleteFlash(this.parentElement)"><i class="fa-solid fa-map-pin"></i></button>
    <h3>${val}</h3>`;
    return flash;
}