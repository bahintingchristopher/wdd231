
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

// show
openButton.addEventListener("click", () => {
    dialogBox.showModal();
})

// close
closeButton.addEventListener("click", () => {
    dialogBox.close();
})


