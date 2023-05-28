"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Yakut", "Ahmedin");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
