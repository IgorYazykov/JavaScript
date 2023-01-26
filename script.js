const body = document.getElementById("container");

const buttonPrev = document.createElement("div");
const slider = document.createElement("img");
const buttonNext = document.createElement("div");
const pButton1 = document.createElement("p");
const pButton2 = document.createElement("p");

let imgCounter = 5;
pButton1.innerText = "<"
buttonPrev.setAttribute("id",'1');
pButton2.innerText = ">";
buttonNext.setAttribute("id",'2');
buttonPrev.classList.add("button");
buttonNext.classList.add("button");
slider.classList.add("slid");
slider.setAttribute("src",`img/${imgCounter}.png`)

body.append(buttonPrev);
buttonPrev.append(pButton1);
body.append(slider);
body.append(buttonNext);
buttonNext.append(pButton2);

function slide (button){

    button.addEventListener("click",function(){

        let id = button.getAttribute("id");

        if (id == 1){
            imgCounter -= 1;
            slider.setAttribute("src",`img/${imgCounter}.png`)
        } else if (id == 2){
            imgCounter += 1;
            slider.setAttribute("src",`img/${imgCounter}.png`)
        }

        if (imgCounter == 1 || imgCounter == 9){
            button.classList.add("opacity")
        } else if (imgCounter == 2 ){
            buttonPrev.classList.remove("opacity")
        } else if (imgCounter == 8 ){
            buttonNext.classList.remove("opacity")
        }
        
    });
}

slide(buttonPrev);
slide(buttonNext);