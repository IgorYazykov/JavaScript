function People(name, age){
    this.name = name;
    this.age = age;
};

People.prototype.getInfo = function(){
    return `name: ${this.name}; age: ${this.age};`
};

function Car(carModel, model, year, numberplate, owner){
    this.carModel = carModel;
    this.model = model;
    this.year = year;
    this.numberplate = numberplate;
    this.owner = owner;
};

Car.prototype.getInfoCar = function(){
    return `CarModel: ${this.carModel}; model: ${this.model}; year: ${this.year}; numberplate: ${this.numberplate}; owner: ${this.owner};`
};

const dataPeople = [
    {
        name: "Valeria",
        age: "25"
    },
    {
        name: "Ivan",
        age: "29"
    },
    {
        name: "Maria",
        age: "22"
    },
    {
        name: "Leonid",
        age: "17"
    }
];

dataPeople
    .map(function(dataPeople){
        return new People(dataPeople.name, dataPeople.age);
    })
    .forEach(function(dataPeople){
        console.log(dataPeople.getInfo());
    });

const dataCar = [
    {
        carModel: "Skoda octavia",
        model: "Skoda",
        year: "2010",
        numberplate: "4169",
        owner: ""
    },
    {
        carModel: "Hyundai Tucson",
        model: "Hyundai",
        year: "2008",
        numberplate: "4891",
        owner: ""
    },
    {
        carModel: "Audi e-tron",
        model: "Audi",
        year: "2020",
        numberplate: "9420",
        owner: ""
    },
    {
        carModel: "Opel Grandland",
        model: "Opel",
        year: "2022",
        numberplate: "0129",
        owner: ""
    },   
];

for(let key in dataCar){
    if (dataPeople[key].age>18){
        dataCar[key].owner = dataPeople[key].name;
    } else {
        dataCar[key].owner = "not 18 year old";
    }
}

dataCar
    .map(function(dataCar){
        return new Car(dataCar.carModel, dataCar.model, dataCar.year, dataCar.numberplate, dataCar.owner);
    })
    .forEach(function(dataCar){
        console.log(dataCar.getInfoCar());
    });
