const API =  "https://api.github.com/users/";
const inputText = document.querySelector("input");
const buttonGet = document.querySelector("button");
const body = document.querySelector("#body");

buttonGet.addEventListener("click",()=>{
    userName = inputText.value;
    renderHubUser(`${API}${userName}`);
});

async function renderHubUser(action){
    const gitHubUser = await fetch (action);
    try{
        if(gitHubUser.ok){
            const json = await gitHubUser.json()
            console.log(json)
            const divContainer = document.createElement("div");
            const img = document.createElement("img");
            const numbersRep = document.createElement("p");
            const followers = document.createElement("p");
            const following = document.createElement("p");

            following.innerText=`Количество наблюдаемых: ${json.following}`
            followers.innerText=`Количество фоловеров: ${json.followers}`;
            numbersRep.innerText=`Количество репозиториев: ${json.public_repos}`;
            img.classList.add("img");
            img.setAttribute("src",`${json.avatar_url}`);
            divContainer.classList.add("container");

            divContainer.append(img);
            divContainer.append(following);
            divContainer.append(followers);
            divContainer.append(numbersRep);
            body.append(divContainer);

        } else {
            throw new Error (gitHubUser.status);
        }
    } catch(err) {
        alert(`Ошибка: ${err}`);
    }
}