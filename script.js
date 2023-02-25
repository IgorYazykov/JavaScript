const API = "https://63f4faff3f99f5855dbb7d69.mockapi.io/api"
const tbody = document.querySelector("#tbody");
const nameHer = document.querySelector("#heroName");
const comics = document.querySelector("#heroComics");
const favor = document.querySelector("#heroFavourite");
const butAdd = document.querySelector("#butAd");

async function controller (method,action,data){
    const URL = `${API}${action}`
    const params = {
        method,
        headers:{
            'content-type':'application/json'
        },
    };
    if(data)params.body = JSON.stringify(data);
    const response = await fetch(URL,params)
    try{
        if(response.ok){
            const data = await response.json()
            if(data.length == 2 ){
                data.forEach(element => {
                    const option = document.createElement("option");
                    option.innerText = `${element.name}`
                    comics.append(option);
                });
            } else{
                return data
            }
        }else{
            throw new Error (response.status)
        }
    } catch (err){
        console.log(err)
    }
}

controller("GET","/universes")
    

butAdd.addEventListener("click", async (e)=>{
    e.preventDefault()
    const response = await controller("GET","/heroes")
    const Name = nameHer.value;
    const Comics = comics.value;
    const Favourite = favor.checked;
    const body = {
        Name,
        Comics,
        Favourite,
    }
    if(response != undefined){
        let copyHeroe = response.find(heroe => (heroe.Name) == (body.Name) );
        if(copyHeroe){
            console.log("Вы уже ввели данного персонажа");
        } else {
            postHeroes(body)
        }
    } else {
        postHeroes(body)
    }
});

async function postHeroes (body){
    const response = await controller("POST","/heroes",body);
    renderHeroes(body,response);
}

async function renderHeroes(heroesData,data){
    const tr = document.createElement("tr");
    const tdn = document.createElement("td");
    const tdc = document.createElement("td");
    const tdf = document.createElement("td");
    const tdb = document.createElement("td");
    const lable = document.createElement("lable");
    const input = document.createElement("input");
    const button = document.createElement("button");

    input.setAttribute("type","checkbox");
    if(heroesData.Favourite == undefined){ console.log(heroesData.Favourite)} else if (heroesData.Favourite == true){
        input.setAttribute("checked","true")
    };

    input.addEventListener("click", async()=>{
        const Favourite = input.checked;
        const Name = heroesData.Name;
        const Comics = heroesData.Comics;
        const body = {
            Name,
            Comics,
            Favourite
        };
        await controller("PUT",`/heroes/${data.id}`,body);
    });

    tdf.classList.add("heroFavouriteInput");

    lable.innerText="Favourite: ";
    tdc.innerText=`${heroesData.Comics}`;
    tdn.innerText=`${heroesData.Name}`;
    button.innerText="Delete";

    button.addEventListener("click", async(e)=>{
        e.preventDefault();
        await controller("DELETE",`/heroes/${data.id}`);
        tbody.removeChild(tr);
    });

    tr.append(tdn);
    tr.append(tdc);
    tr.append(tdf);
    tdb.append(button);
    tdf.append(input);
    tr.append(tdb);
    tdf.append(lable);
    tbody.append(tr);
}