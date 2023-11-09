"use strict";
var _a;
let age = 18;
age = 21;
console.log(age);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function calculateTax(income, taxYear = 2023, useless) {
    console.log(`Tax for ${taxYear} also ${useless}`);
    if (income > 500000)
        return income * 0.5;
    return income * 0.3;
}
function sum(a, b) {
    return a + b;
}
calculateTax(200000);
let paint = Color.Blue;
console.log(calculateTax(400000));
let employee = {
    id: 1,
    name: "John",
    printName: () => {
        console.log(employee.name);
        return employee.name;
    },
};
console.log(employee.printName());
let peter = {
    id: 3,
    name: "peter",
    printName: () => {
        console.log(peter.name);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "string")
        return parseInt(weight) * 2.25;
    return weight * 2.25;
}
console.log(kgToLbs("25"));
console.log(kgToLbs(19));
const form = {
    drag: () => {
        console.log("dragging");
    },
};
const distance = "m";
function greet(name) {
    if (name)
        console.log(`Hi ${name}`);
}
greet(null);
greet("John");
function getCustomerById(id) {
    console.log(`getting customer ${id}`);
    return undefined;
}
let customer = getCustomerById(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customer3 = {};
function doSomethingJs(document) {
    document.toUpperCase();
}
function doSomething(document) {
    if (typeof document === "string") {
        let doc2 = document.toUpperCase();
        console.log(doc2);
    }
}
doSomething("urMom");
function handleDocument(document) {
    if (document instanceof HTMLInputElement) {
        console.log("is an interface");
    }
}
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Amount must be positive");
        this.balance += amount;
    }
}
let account = new Account(1, "Jhon", 0);
account.deposit(100);
console.log(account instanceof Account);
class AccountBetter {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Amount must be positive");
        this.balance += amount;
    }
}
//# sourceMappingURL=index.js.map