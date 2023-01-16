const textBox = document.querySelector("p");
const div = document.querySelector(".div");
textBox.onfocus = () => {
    console.log("focus")
    div.classList.remove("remove")
};

textBox.onblur = () => {
    console.log("no focus")
    div.classList.add("remove")
}
