enum Countries {
    Lithuania = "LT",
    Latvia = "LV",
    Estonia = "EE"
}

class Person {
    name: string;
    country: Countries
 
    constructor(name: string, country: Countries) {
        this.name = name;
        this.country = country;
    }

    anounce(): string {
        return  `Hi, my name is ${this.name} and I am from ${this.country}`
    }
}

const person = new Person('Tomas', Countries.Lithuania);
const newMessage: string = person.anounce();
console.log(newMessage);
