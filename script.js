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
]

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
            alertInformation(buttonBuy,info);

            flagCard = item.getAttribute("id");
        } else if (flagCard != 0){
            alert("Вы уже выбрали товар")
        }
    });
};

function alertInformation(item,elem){
    item.addEventListener("click",function(){
        let alertBlock = document.createElement("div");
        alertBlock.classList.add("alert");
        generalBudy.append(alertBlock);
        let blockInAlert = document.createElement("div");
        blockInAlert.classList.add("text_in_alert");
        let alertp= document.createElement("p");
        blockInAlert.append(alertp)
        alertp.innerText=`вы купили ${elem.name}`;
        alertBlock.append(blockInAlert);
        setTimeout(function(){
            location. reload();
        },5000);
    });
};