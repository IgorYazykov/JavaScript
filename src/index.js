import data from "./components/data";
import renderUserIcon from "./components/render";
import "./style/style.css";

data.forEach((elem)=>{
    const {id: id, name: name,age: age,email: email,country: country,company: company,birthday: birthday} = elem;
    const newUser = new renderUserIcon (id, name, age, email, country, company, birthday);
    newUser.render();
});

