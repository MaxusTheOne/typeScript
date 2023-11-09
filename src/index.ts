// compile and run with: tsc && node ./dist/index.js (prob only works in bash)

let age: number = 18;
age = 21;
console.log(age);

enum Color {
  Red,
  Green,
  Blue,
}
// Why does thus not error?
// ? Means it can be undefined
// default values can be set
// ignores _ in numbers, just for show
function calculateTax(income: number, taxYear: number = 2023, useless?: string) {
  console.log(`Tax for ${taxYear} also ${useless}`);

  if (income > 500_000) return income * 0.5;
  return income * 0.3;
}
function sum(a: number, b: number) {
  return a + b;
}
calculateTax(200_000);

let paint: Color = Color.Blue;
console.log(calculateTax(400_000));

let employee: {
  id: number;
  name: string;
  printName: () => void;
} = {
  id: 1,
  name: "John",
  printName: () => {
    console.log(employee.name);
    return employee.name;
  },
};
console.log(employee.printName());

// Using type "aliases" types can be made and used. Pog. Better than constructor stuff
type Employee = {
  id: number;
  name: string;
  printName: () => void;
};

let peter: Employee = {
  id: 3,
  name: "peter",
  printName: () => {
    console.log(peter.name);
  },
};

// you can allow multiple types using "union types( | )"
function kgToLbs(weight: number | string): number {
  if (typeof weight === "string") return parseInt(weight) * 2.25;
  return weight * 2.25;
}

console.log(kgToLbs("25"));
console.log(kgToLbs(19));

type Draggable = {
  drag: () => void;
};
type Droppable = {
  drop: () => void;
};
type Resizable = {
  resize: () => void;
};

const form: Draggable = {
  drag: () => {
    console.log("dragging");
  },
};

// combined types
type UIWidget = Draggable & Resizable & Droppable;

// decide exactly what can be typed
type Metric = "km" | "m" | "cm";

const distance: Metric = "m";

// could allow different types for more robust code (idk either)
function greet(name: string | undefined | null) {
  if (name) console.log(`Hi ${name}`);
}
greet(null);
greet("John");

// properties can be optional
type Customer = {
  birthDate: Date;
  deathDate?: Date;
};

// making code more robust and making sure we get what we want back, by specifying we want a customer back
function getCustomerById(id: number): Customer | undefined | null {
  console.log(`getting customer ${id}`);
  return undefined;
}

// if ur really sure it's a customer type
let customer = getCustomerById(1) as Customer;
console.log(customer?.birthDate?.getFullYear());

// supped to be usefull idk
let customer3 = {} as Customer;

// can be htmlElement or null, except if you foce it with assertion (as)
// let phone = document.getElementById("phone") as HTMLElement;

// use any type to pretend ur in JavaScript x)
function doSomethingJs(document: any) {
  document.toUpperCase();
}

// if we don't know, we can use type unknown
function doSomething(document: unknown) {
  if (typeof document === "string") {
    let doc2 = document.toUpperCase();
    console.log(doc2);
  }
}
doSomething("urMom");

function handleDocument(document: unknown): void {
  // syntax for checking it's in an interface
  if (document instanceof HTMLInputElement) {
    console.log("is an interface");
  }
}

// type never
// if we type it with never we tell our compiler that anything after will not run, it also will without x)
// yeah idk, for making better debug
/* function throwError(message: string): never {
   throw new Error(message);
 }

 throwError("AAAAAAAAHHHH");
console.log("this will not be read, prob");*/

class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.balance += amount;
  }
}

let account = new Account(1, "Jhon", 0);
account.deposit(100);

// for checking interfaces or classes
console.log(account instanceof Account);

// same but shorter and cooler, also able to assign public/private and readonly
class AccountBetter {
  constructor(public readonly _id: number, public owner: string, private balance: number, public nickname?: string) {}
  deposit(amount: number) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.balance += amount;
  }
  // _ is also ignored outside of the class, so it will show id prob should just call it getId
  get id() {
    return this._id;
  }
  // literally does the same, Thomas prefers this
  getid() {
    return this._id;
  }
}
// nickname is optional "?" so I can use 3-4 args
let Markus = new AccountBetter(2, "Markus", 100_000);
