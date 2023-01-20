const bodyTable = document.querySelector(".table_container");
const form = document.querySelector(".form");
const inputName = document.getElementById("name");
const inputSecondName = document.getElementById("secondName");
const inputDate = document.getElementById("date");
const radioGender = document.querySelectorAll("input[name='gender']");
const selectTown = document.getElementById("town");
const inputAddress = document.getElementById("address");
const languageCheck = document.querySelectorAll("input[name='language']");
const button = document.getElementById("button");

const secButton = document.getElementById("close");

button.addEventListener('click',function(e){
    bodyTable.classList.remove("display");

    let language = [];
    let gender = "";

    radioGender.forEach(function(item){
        if(item.checked){
            gender = item.value;
        }
    });
    
    languageCheck.forEach(function(item){
        if(item.checked){
            language.push(item.value); 
        }
    });

    const data = {
        name: inputName.value,
        secondName: inputSecondName.value,
        birthday: inputDate.value,
        gender: gender,
        town: selectTown.value,
        address: inputAddress.value,
        language: language
    }

    const table = document.createElement("table");
    const trName = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdNameValue = document.createElement("td");
    const trsecondName = document.createElement("tr");
    const tdsecondName = document.createElement("td");
    const tdsecondNameValue = document.createElement("td");
    const trbirthday = document.createElement("tr");
    const tdbirthday = document.createElement("td");
    const tdbirthdayValue = document.createElement("td");
    const trgender = document.createElement("tr");
    const tdgender = document.createElement("td");
    const tdgenderValue = document.createElement("td");
    const trtown = document.createElement("tr");
    const tdtown = document.createElement("td");
    const tdtownValue = document.createElement("td");
    const traddress = document.createElement("tr");
    const tdaddress = document.createElement("td");
    const tdaddressValue = document.createElement("td");
    const trlanguage = document.createElement("tr");
    const tdlanguage = document.createElement("td");
    const tdlanguageValue = document.createElement("td");

    tdName.innerText = 'Имя';
    tdNameValue.innerText = data.name;

    tdsecondName.innerText = 'Фамилия';
    tdsecondNameValue.innerText = data.secondName;

    tdbirthday.innerText = 'День рождение';
    tdbirthdayValue.innerText = data.birthday;

    tdgender.innerText = 'Пол';
    tdgenderValue.innerText = data.gender;

    tdtown.innerText = 'Город';
    tdtownValue.innerText = data.town;

    tdaddress.innerText = 'Адрес';
    tdaddressValue.innerText = data.address;

    tdlanguage.innerText = 'Языки';
    tdlanguageValue.innerText = data.language;

    bodyTable.prepend(table);
    
    table.prepend(trlanguage);
    trlanguage.prepend(tdlanguageValue);
    trlanguage.prepend(tdlanguage);

    table.prepend(traddress);
    traddress.prepend(tdaddressValue);
    traddress.prepend(tdaddress);

    table.prepend(trtown);
    trtown.prepend(tdtownValue);
    trtown.prepend(tdtown);

    table.prepend(trgender);
    trgender.prepend(tdgenderValue);
    trgender.prepend(tdgender);

    table.prepend(trbirthday);
    trbirthday.prepend(tdbirthdayValue);
    trbirthday.prepend(tdbirthday);

    table.prepend(trsecondName);
    trsecondName.prepend(tdsecondNameValue);
    trsecondName.prepend(tdsecondName);

    table.prepend(trName);
    trName.prepend(tdNameValue);
    trName.prepend(tdName);  

    bodyTable.classList.add("table");
    form.classList.add("display");

    e.preventDefault();
});


secButton.addEventListener('click',function(e){
    const table = document.querySelector("table");
    bodyTable.removeChild(table);

    form.classList.remove("display");
    bodyTable.classList.add("display"); 
    
    e.preventDefault();
});