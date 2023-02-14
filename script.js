let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
}
let bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getMoney = (user ,bank) => {
    return new Promise ((resolve,reject)=>{
        let confirmAlert = confirm("Посмотреть баланс на карте?");
        confirmAlert ? resolve(user) : reject({user ,bank})
    })

};

getMoney(userData,bankData)
    .then ((moneyVall) => {
            let confirmVal;
            let flag;
            do {
                flag = 0;
                confirmVal = "";
                confirmVal = prompt("Введите название валюты в формате USD, EUR");
                for (let key in moneyVall){
                    if (confirmVal == key){
                        flag = 1;
                    }
                }
            } while (flag == 0 );
            console.log(`Баланс составляет:${moneyVall[confirmVal]} ${confirmVal}`);
        },

        (data) => {
            let confirmVal;
            let flagUser;
            let flagBank;
            do {
                flagUser = 0;
                flagBank = 0;
                confirmVal = "";
                confirmVal = prompt("Введите название валюты в формате USD, EUR");
                for (let key in data.user){
                    if (confirmVal == key){
                        flagUser = 1;
                    }
                }
                for (let key in data.bank){
                    if (confirmVal == key){
                        if (data.bank[confirmVal].max == 0){
                            console.log(`В данном банкомате нет валюты: ${confirmVal}`)
                            flagBank = 0;
                        } else {
                            flagBank = 1;
                        }
                    }
                }
            } while (flagUser == 0 || flagBank == 0);

            let userMoney; 
            moneyFlag = 0;
            userMoney = 0;
            userMoney = prompt("Введите сумму для снятия наличных");
            if (data.bank[confirmVal].max < userMoney){
                console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${data.bank[confirmVal].max} ${confirmVal}`)
            } else if (data.bank[confirmVal].min > userMoney) {
                console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия ${data.bank[confirmVal].min} ${confirmVal}`)
            } else {
                if (data.user[confirmVal] < userMoney){
                    console.log(`На вашем счету не хватает средств. Максимально допустимая сумма для снятия у вас равна: ${data.user[confirmVal]}`)
                } else {
                    console.log(`Вот Ваши денежки ${userMoney} ${confirmVal} ${data.bank[confirmVal].img}`);
                }
            }
        }
    )
    .finally(
        () => console.log('Спасибо, хорошего дня 😊')
    );