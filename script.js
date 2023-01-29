const generalBudy = document.querySelector("body")
const body = document.querySelector(".container");

const shop = [
    {
        name: "Телефоны",
        id: "1",
        product: [
            {
                img: "img/phone_1.png",
                name: "IPhone 10",
                id: "1.1",
                discription: "Apple iPhone X (Apple iPhone 10); дисплей Super Retina HD 5,8”, разрешение 2436 × 1125 пикселей, 458 пикселей на дюйм; защита от воды, пыли и брызг (IP67), 6-ядерный 64-битный процессор A11 Bionic, нейронная система, встроенный сопроцессор движения М11;"
            },
            {
                img: "img/phone_2.png",
                name: "Huawei P20",
                id: "1.2",
                discription: "Этой весной компания Huawei представила в Париже новые смартфоны из флагманской линейки: P20 и P20 Pro — продолжение смартфонов P10 и P10 Plus. Как китайцы умудрились проскочить сразу 10 пунктов в порядковых индексах, остается только гадать, но, по всей видимости, мы никогда не увидим ни P11, ни P12 — скорее уж P30."
            },
            {
                img: "img/phone_3.png",
                name: "Huawei P10",
                id: "1.3",
                discription: "Huawei P10 это смартфон 2017 года. Он имеет размеры 145.3 x 69.3 x 7 мм и вес 145 г. Он оснащен IPS-NEO LCD дисплеем размером 5.1 дюймов. Разрешение составляет 1080 x 1920 и плотность пикселей 432 ppi"
            }
        ]
    },{
        name: "Умные часы",
        id: "2",
        product: [
            {
                img: "img/Smartwatch_1.png",
                name: "Sony SmartWatch",
                id: "2.1",
                discription: "Ключевое новшество интерфейса SmartWatch в том, что теперь на экран влезает 4 иконки установленных приложений или один виджет. Теперь и представить трудно, как раньше на LiveView можно было обходиться всего одним приложением на экране."
            },{
                img: "img/Smartwatch_2.png",
                name: "Xiaomi Pace Pace",
                id: "2.2",
                discription: "Как утверждает производитель, умные часы используют систему позиционирования GPS+GLONASS и вмещают первый в мире 28-нанометровый GPS-модуль. Он обеспечивает точное отслеживание в реальном времени, а также количество шагов, высоту, частоту шага и другие важные спортивные данные."
            },{
                img: "img/Smartwatch_3.png",
                name: "Fitbit Versa 2",
                id: "2.3",
                discription: "Поддерживайте активный ритм жизни с умными часами Fitbit Versa 2! Многофункциональный гаджет позволит вам отслеживать самые важные показатели относительно роботы своего организма."
            }
        ]
    },{
        name: "Наушники",
        id: "3",
        product: [
            {
                img: "img/Headphones_1.png",
                name: "JBL T450BT",
                id: "3.1",
                discription: "JBL T450 — накладные наушники, где внутри корпуса находится пара 32 мм динамиков, способных воспроизводить мощный звук JBL Pure Bass, который можно слышать в концертных залах, на спортивных аренах и в звукозаписывающих студиях по всему миру."
            },{
                img: "img/Headphones_2.png",
                name: "JBL T450BT",
                id: "3.2",
                discription: "Наслаждайтесь безупречным качеством беспроводной связи благодаря гарнитуре, оптимизированной для 3D-звука на консолях PS4 и PS51. Беспроводная гарнитура PULSE 3D имеет усовершенствованный дизайн и оснащена двумя микрофонами с шумоподавлением, зарядкой через USB Type-C® и панелью с удобными элементами управления."
            },{
                img: "img/Headphone_3.png",
                name: "Nabi",
                id: "3.3",
                discription: "Отличительной особенностью является двойной режим прослушивания: один для родителей, другой для детей. Дочерний режим ограничивает громкость до 80 дБ. Режим для взрослых не имеет таких ограничений; Вы сможете играть свою любимую тяжелую рок-музыку с громкостью до 11."
            }
        ]
    }
];

const leftBlock = document.createElement("div");
const logo = document.createElement("p");
logo.innerText="Категории:";
leftBlock.classList.add("categori-container");
logo.classList.add("logo");
leftBlock.append(logo);
body.append(leftBlock);

shop.forEach(function(item){
    ferstRender(item);
});

function ferstRender(item){
    let elem = document.createElement("p");
    elem.classList.add("button");
    elem.innerText=`${item.name}`;
    elem.setAttribute("id",`${item.id}`)
    leftBlock.append(elem);
    activTovarButton(elem,item);
};

let flagCategori = 0

function activTovarButton (item,info){
    item.addEventListener("click",function activMidleRender (){
        if (flagCategori == 0){
            let midleContainer = document.createElement("div");
            midleContainer.classList.add("categori-card");
            info.product.forEach(function(item){
                let card = document.createElement("div");
                card.classList.add("card");
                let img = document.createElement("img");
                img.classList.add("card-img");
                img.setAttribute("src",`${item.img}`);
                card.append(img);
                let name = document.createElement("p");
                name.innerText=`${item.name}`;
                card.append(name);

                midleContainer.append(card);

                activationCard(card,item);

            })
            body.append(midleContainer);
            flagCategori = item.getAttribute("id");
        } else if (flagCategori != 0){
            alert("Вы уже выбрали категорию")
        }
    });
};

let flagCard = 0

function activationCard (item,info){
    item.addEventListener("click",function(){
        if (flagCard == 0){
            let rightBlock = document.createElement("div")
            rightBlock.classList.add("information");
            let img = document.createElement("img");
            img.classList.add("card-img","information-img");
            img.setAttribute("src",`${info.img}`);
            rightBlock.append(img);
            let name = document.createElement("p");
            name.classList.add("information_logo");
            name.innerText=`${info.name}`;
            rightBlock.append(name);
            let discription = document.createElement("p");
            discription.classList.add("information_text");
            discription.innerText=`${info.discription}`;
            rightBlock.append(discription);
            let buttonBuy = document.createElement("div");
            buttonBuy.classList.add("button");
            let buttonBuyText = document.createElement("p");
            buttonBuyText.innerText="Купить";
            buttonBuy.append(buttonBuyText);
            rightBlock.append(buttonBuy);
            body.append(rightBlock);

            confirmInformation(buttonBuy,info,rightBlock);

            flagCard = item.getAttribute("id");
        } else if (flagCard != 0){
            alert("Вы уже выбрали товар")
        }
    });
};

let buyFlag = 0;

function confirmInformation(button,info,rightBlock){
    button.addEventListener("click",function(){
        if (buyFlag == 0){
            let persInfo = document.createElement("form");

            let masUserInfo = ["Имя ","Фамилия ","Отчество ","Ваш город ","Адресс почты ","Оплата ","Количество ","Коментарий к покупке "];

            masUserInfo.forEach(function(item){
                let p = document.createElement("p");
                p.innerText=item;
                persInfo.append(p); 
                p.classList.add("information_logo","margin_for_form");
                if(item == "Ваш город "){
                    let citi = ["Харьков","Киев","Днепр"];
                    let infoCiti = document.createElement("select");
                    infoCiti.setAttribute("name","city");
                    renderSelectMenu (citi,infoCiti);
                    persInfo.append(infoCiti);
                } else if (item == "Оплата "){
                    let choiceOplata = ["наличными","картой"];
                    let infoChoiceOplata = document.createElement("select");
                    infoChoiceOplata.setAttribute("name","choiceOplata");
                    renderSelectMenu (choiceOplata,infoChoiceOplata);
                    persInfo.append(infoChoiceOplata);
                } else {
                    let infoName = document.createElement("input");
                    infoName.setAttribute("type","text");
                    infoName.setAttribute("name",`${item}`);
                    persInfo.append(infoName);
                }
            });

            persInfo.classList.add("userInfo");

            let confirm = document.createElement("div");
            confirm.classList.add("button");
            let pconfirm = document.createElement("p");
            pconfirm.innerText="Подтвердить";
            confirm.append(pconfirm);

            confirmActivated(confirm,info);

            rightBlock.append(persInfo);
            rightBlock.append(confirm);
            buyFlag = 1;
        } else if (buyFlag != 0){
            alert("Вы уже начали оформлять товар")
        }
    });
};

function renderSelectMenu (arr,perentEl){
    arr.forEach(function(item){
        let option = document.createElement("option");
        option.setAttribute("value",`${item}`);
        option.innerText = `${item}`;
        perentEl.append(option);
    })
}

function confirmActivated(button, info){
    button.addEventListener("click",function(){
        let formData = document.querySelectorAll("input");
        let formCiti = document.getElementsByName("city");
        let formOplata = document.getElementsByName("choiceOplata");
        let masValue = [];
        for(let i=0 ; i<8 ; i++){
            if (i==3){
                masValue.push(formCiti[0].value);
            } else if (i<3){
                masValue.push(formData[i].value);
            } else if (i>3 && i<5){
                masValue.push(formData[i-1].value);
            } else if (i==5){
                masValue.push(formOplata[0].value);
            } else if (i==6){
                masValue.push(+formData[i-2].value);
            }else{
                masValue.push(formData[i-2].value);
            }
        };

        let masUserInfo = ["Имя","Фамилия","Отчество","Ваш город","Адресс почты","Оплата","Количество","Коментарий к покупке"];
        let valueError = [];
        let wereValueError = [];
        
        for(let i=0; i<8 ; i++){
            confirtmInfo(masValue[i],masUserInfo[i],valueError,wereValueError,i)
        };

        if(valueError.length != 0){
            alertErors(valueError,wereValueError);
        }else{
            alertInformation(info,masValue,masUserInfo)
        }
        
    });
};

function confirtmInfo(arr,constArr,errors,location,i){
    if(i == 6){
        if (arr == '') {
            errors.push("Это поле не может быть пустым!");
            location.push(constArr);
        }else if(isNaN(arr)){
            errors.push("Вы не ввели количествопокупаемого товара.");
            location.push(constArr);
        };
    } else if (i < 3 || i == 4){
        if (arr == ''){
            errors.push("Это поле не может быть пустым!");
            location.push(constArr);
        } else if (!isNaN(arr)) {
            errors.push("В этом поле не может быть числа!");
            location.push(constArr);
        } else {
            if (arr.length <= 3){
                errors.push("Длинна этого поля не может быть меньше 3!");
                location.push(constArr);
            };
        };
    };
};

function alertErors(WhatEr,location){
    let alertError = document.createElement("div");
    alertError.setAttribute("name","alertInfoErr");
    alertError.classList.add("alert");
    generalBudy.append(alertError);
    let errorContainer = document.createElement("div");
    errorContainer.classList.add("alert_err_container");
    for (let i = 0 ; i < WhatEr.length ; i++){
        createTableInAlert(WhatEr[i],location[i],errorContainer);
    };
    let buttonClose = document.createElement("div");
    buttonClose.innerText = "Понятно";
    buttonClose.classList.add("button_error_alert");
    removButtonWindow(buttonClose);
    errorContainer.append(buttonClose);
    alertError.append(errorContainer);
}

function removButtonWindow(button){
    button.addEventListener("click",function(){
        let removeEll = document.getElementsByName("alertInfoErr");
        generalBudy.removeChild(removeEll[0]);
    });
};

function createTableInAlert(err,wereEr,container){
    let pName = document.createElement("p");
    pName.innerText = `${wereEr}`;
    pName.classList.add("text_in_alert_err");
    container.append(pName);
    let pErr = document.createElement("p");
    pErr.innerText = `${err}`;
    pErr.classList.add("text_in_alert_err");
    container.append(pErr);
}

function alertInformation(infoTovar,infoUser,info){
    let alertBlock = document.createElement("div");
    alertBlock.classList.add("alert");
    generalBudy.append(alertBlock);
    let blockInAlert = document.createElement("div");
    blockInAlert.classList.add("alert_info_container");
    let pFirst = document.createElement("p");
    pFirst.innerText = "Информация про заказчика";
    pFirst.classList.add("text_in_alert_err");
    let parentUserInfo = document.createElement("div")
    parentUserInfo.classList.add("alert_user_container")
    for (let i = 0 ; i < infoUser.length ; i++){
        createTableInAlertUser(infoUser[i],info[i],parentUserInfo)
    };
    blockInAlert.append(pFirst);
    blockInAlert.append(parentUserInfo);
    
    let pSecond = document.createElement("p");
    pSecond.innerText = "Информация про заказ";
    pSecond.classList.add("text_in_alert_err");
    blockInAlert.append(pSecond);
    let tovarContainer = document.createElement("div")
    tovarContainer.classList.add("alert_user_container");

    let pTovarAlert = document.createElement("p");
    pTovarAlert.classList.add("text_in_alert_err");
    pTovarAlert.innerText = "Ваш товар";
    tovarContainer.append(pTovarAlert);
    let pTovarNameAlert = document.createElement("p");
    pTovarNameAlert.classList.add("text_in_alert_err");
    pTovarNameAlert.innerText = `${infoTovar.name}`;
    tovarContainer.append(pTovarNameAlert);

    blockInAlert.append(tovarContainer)

    let pMail = document.createElement("p");
    pMail.classList.add("text_in_alert_err");
    pMail.innerText = "С вами скоро свяжуться!"
    blockInAlert.append(pMail)

    alertBlock.append(blockInAlert);
    setTimeout(function(){
        location. reload();
    },10000);
};

function createTableInAlertUser(arrUser,arrInfo,parentBlock){
    let pUser = document.createElement("p");
    pUser.innerText = `${arrInfo}`;
    pUser.classList.add("text_in_alert_err");
    parentBlock.append(pUser);
    let pName = document.createElement("p");
    pName.innerText = `${arrUser}`;
    pName.classList.add("text_in_alert_err");
    parentBlock.append(pName);
}