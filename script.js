const buttonSend = document.getElementById("buttonSend");
const body = document.querySelector("body");
const API = "https://jsonplaceholder.typicode.com/";
let usedElem = [];

buttonSend.addEventListener("click", e => {   
    e.preventDefault(); 
    let flag = 0;
    let idElement = document.getElementById("idInput");
    elemValue = idElement.value;
    usedElem.forEach (elem => {
        if (elem == elemValue){
            flag++;
        }
    });
    if (flag != 1){
        (elemValue >= 1 && elemValue <= 100) ? (fetchSend(elemValue),usedElem.push(elemValue) ): alert(`Введенное число: ${elemValue}, не соответсвует промежутку 1-100`);
    } else {
        alert("вы уже вводили это id")
    }

});

const fetchSend = elem => fetch(`${API}posts/${elem}`)
    .then(response => response.json())
    .catch( error => {
        console.log(`Ошибка: ${error}`);
        return Promise.reject();
    })
    .then(
        (json) => {
            const card = document.createElement("div");
            const titleCard = document.createElement("p");
            const textCard = document.createElement("p");
            const buttonComment = document.createElement("div");
            const buttonText = document.createElement("p");
            titleCard.innerText = `${json.title}`;
            textCard.innerText = `${json.body}`;
            buttonText.innerText = `хотите увидеть комментарии?`;
            buttonEvent(buttonComment,card,elemValue);
            card.classList.add("card");
            buttonComment.classList.add("button")
            buttonComment.append(buttonText);
            card.append(titleCard);
            card.append(textCard);
            card.append( buttonComment);
            body.append(card);
        },
        () =>{
            alert("ошибка")
        }
    );

function buttonEvent (button,parentblock,elemValue){
    let flag = 0;
    button.addEventListener("click", () => {
        flag != 1 ? 
        fetch(`${API}comments`)
            .then(response => response.json())
            .then(json => {
                json.forEach(elem=>{
                    if (elem.postId == elemValue){
                        const cardComment = document.createElement("div");
                        cardComment.classList.add("blockComment");
                        const commentsName = document.createElement("p");
                        const commentsEmail = document.createElement("p");
                        const commentsBody = document.createElement("p");
                        commentsName.innerText = `${elem.name}`;
                        commentsEmail.innerText = `${elem.email}`;
                        commentsBody.innerText = `${elem.body}`;
                        cardComment.append(commentsName);
                        cardComment.append(commentsEmail);
                        cardComment.append(commentsBody);
                        parentblock.append(cardComment);
                        return flag =+ 1;
                    };
                });
            })
        : alert("вы уже получили коментарий к этому посту!");
    }); 
};