"use strict";
exports.__esModule = true;
var Countries;
(function (Countries) {
    Countries["Lithuania"] = "LT";
    Countries["Latvia"] = "LV";
    Countries["Estonia"] = "EE";
})(Countries || (Countries = {}));
var Person = /** @class */ (function () {
    function Person(name, country) {
        this.name = name;
        this.country = country;
    }
    Person.prototype.anounce = function () {
        return "Hi, my name is ".concat(this.name, " and I am from ").concat(this.country);
    };
    return Person;
}());
var person = new Person('Tom', Countries.Lithuania);
var newMessage = person.anounce();
console.log(newMessage);
