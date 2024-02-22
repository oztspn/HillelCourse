class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    getInfo =  function () {
        return `Full name: ${this.name}. Age: ${this.age}.`;
    }
}

class Car{
    constructor(brand, model, year, carNumber) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.carNumber = carNumber;
    }
    setPerson = function (person) {
        if (person.age >= 18 )
            this.person = person;
        else
            return 'The owner is less than 18 years old';
    }
    getInfo = function () {
        return `Info about the car:
        Сar brand: ${this.brand}.
        Сar model: ${this.model}.
        Сar year: ${this.year}.
        Сar number: ${this.carNumber}.
        Info about the owner:${this.person ? this.person.getInfo() : 'The owner is less than 18 years old'}`;
    }
}

let person1 = new Person('Jacob', 43);
let car1 = new Car('Audi', 'RS7', 2021, 'JH780P');
car1.setPerson(person1);
console.log(car1.getInfo());


let person2 = new Person('Rebeca', 16);
let car2 = new Car('BMW', 'X5', 2018, 'REBECA');
car2.setPerson(person2);
console.log(car2.getInfo());
