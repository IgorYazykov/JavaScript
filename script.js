function random(){
    return Math.floor(Math.random() * (9-1)+1);
};

const body = document.querySelector("body");
const img = document.createElement("img");
let number = random();
img.setAttribute("src",`img/${number}.png`);
body.append(img);