import { Users } from "./renderUser";
export class renderUserIcon extends Users{
    constructor (id, name, age, email, country, company, birthday){
        super(id, name, age, email, country, company, birthday)
    }

    render(){
        const body = document.querySelector("body");
        const userContainer = document.createElement("div");
        userContainer.innerText = `id: ${this.id}
        Имя: ${this.name}
        Возраст: ${this.age}
        Почта: ${this.email}
        Страна: ${this.country}
        Компания: ${this.company}
        Год рождения: ${this.birthday}`;
        userContainer.setAttribute("id","container");
        body.append(userContainer);
    }
}

export default renderUserIcon;