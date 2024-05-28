// //------------------------------------------------     Simple Checkout Order Details     ------------------------------------------------

// const shoe = 20;
// const jeans = 15;
// const tShirt = 5;

// const arefBudget = 70;
// const nickBudget = 40;
// const allOrders = shoe + jeans + tShirt * 2;

// const finalPrice = allOrders * 0.95;

// console.log(`you need to pay ${allOrders}$ for this clothes`);

// console.log(`the avarge price is : ${allOrders / 4}$ `);

// console.log(
//   `you got 0/5% discount with your promo code (${
//     allOrders * 0.05
//   }$ off) and now you can pay ${finalPrice}$`
// );

// const finalMassageForAref =
//   arefBudget >= finalPrice
//     ? `Aref You can buy all of your orders and have fun :)`
//     : `Sorry Aref your budget is not enough you need more money`;

// const finalMassageForNick =
//   nickBudget >= finalPrice
//     ? `Nick You can buy all of your orders and have fun :)`
//     : `Sorry Nick your budget is not enough you need more money`;
// console.log(finalMassageForAref);
// console.log(finalMassageForNick);

// =============================================
// =============================================
//Capitalize first letter of a word

// const word = "hello world im aref";
// const firstLetter = word.charAt(0);
// const upperCaseFirstLetter = firstLetter.toUpperCase();
// const finalWord = word.replace(firstLetter, upperCaseFirstLetter);

// console.log(finalWord);
//Done

// =============================================
// =============================================
//Capitalize first letter of every word in the text

// const word = "hello world im aref";

// const spilited = word.split(" ");

// console.log(spilited);

// const myArray = [];

// for (const i of spilited) {
//   const firstLetter = i.charAt(0);
//   const upperCaseFirstLetter = firstLetter.toUpperCase();
//   const finalWords = i.replace(firstLetter, upperCaseFirstLetter);
//   const replaceFinalWithOld = myArray.push(finalWords);
// }

// console.log(myArray);

// const makeTheTextAgain = myArray.join(" ");

// //and the result is every first letter of an word is Uppercase like this -> Hello World Im Aref
// console.log(makeTheTextAgain);
// =============================================
// =============================================
//Replace a part of phone number with stars

// const num = "0912123456789";

// const substring = num.slice(6, 10);

// console.log(substring);

// const stars = "****";

// const hiddenNumber = num.replace(substring, stars);

// console.log(hiddenNumber);
// // or we can write it in one line like this code below(i dont recommande this cause its not a clean code)

// const num2 = "0910865841401";

// const finalPhoneNumber = num2.replace(num2.slice(6, 10), "****");

// console.log(finalPhoneNumber);

// =============================================
// =============================================
//Extract First name and Last name

// const fullName = "Aref Keyhani";

// const eachWord = fullName.split(" ");

// console.log(eachWord);
// const firstName = eachWord[0];
// const lastName = eachWord[1];

// //or we can write it like this

// const firstName = [];
// const lastName = [];

// function getFirstName() {
//   firstName.push(eachWord[0]);
// }
// function getLastName() {
//   lastName.push(eachWord[1]);
// }

// getFirstName();
// getLastName();
// const finalName = firstName.join("");
// const finalLastName = lastName.join("");
// console.log(finalName);
// console.log(finalLastName);

// //or we can write it like this

// const fullName = "Aref Keyhani";

// const spaceInex = fullName.indexOf(" ");
// const firstName = fullName.slice(0, spaceInex);
// const lastName = fullName.slice(spaceInex + 1);

// console.log(firstName);
// console.log(lastName);

// =============================================
// =============================================
// 1. create an array
// 2. add your fav sports
// 3.use this list in a text
// 4. remove the last item from the list
// 5. create a new array for the first two items then replace it in main array

// const sports = [];

// console.log(sports);
// //1 is Done
// sports.push("basketball", "box", "runing", "kickBox", "swiming");
// console.log(sports);
// //2 is done

// const stringSports = sports.join(", ");
// const text = ` My fav sports are ${stringSports}`;
// console.log(text);
// //3 is done

// sports.pop();
// console.log(sports);
// //4 is done

// const firstTwoSports = sports.slice(0, 2);
// console.log(firstTwoSports);

// sports.splice(0, 2, firstTwoSports);
// console.log(sports);
// //5 is done

// =============================================
// =============================================
//Array Destruncturing
//// full stack = [["HTML","CSS","JS","REACT"],["NODE","EXPRESS","MONGODB"]]
//First way is code below

// const fullStack = [
//   ["HTML", "CSS", "JS", "REACT"],
//   ["NODE", "EXPRESS", "MONGODB"],
// ];
// const frontEnd = fullStack[0];
// const backEnd = fullStack[1];

// console.log(frontEnd);
// console.log(backEnd);

//Secound way is code below

// const fullStack = [
//   ["HTML", "CSS", "JS", "REACT"],
//   ["NODE", "EXPRESS", "MONGODB"],
// ];

// const [frontEnd, backEnd] = fullStack;

// const [CSS, JS] = frontEnd;
// const [NODE, EXPRESS] = backEnd;

// console.log(CSS, JS);
// console.log(NODE, EXPRESS);

// =============================================
// =============================================
//Destructue data

// const data = [
//   {
//     identity: {
//       name: "aref",
//       lastName: "keyhani",
//       age: 23,
//       country: "iran",
//       city: "Tehran",
//     },
//   },
//   { skills: ["js", "html", "css"] },
// ];

// const [identity, skills] = data;

// console.log(identity);
// console.log(skills);

// const {
//   identity: { name, lastName, age, country, city },
// } = identity;

// console.log(name, lastName, age, country, city);

// const {
//   skills: [js, html, css],
// } = skills;

// console.log(js, html, css);

// =============================================
// =============================================
//get the keys and values of the object

// const object = {
//   name: "aref",
//   lastName: "keyhani",
//   age: 23,
// };

// const keys = Object.keys(object);

// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//   console.log(`this is one of the keys ${keys[i]}`);
//   console.log(`this is one of the values ${object[keys[i]]}`);
// }
////or we can write it like this
// const values = Object.values(object);

// for (const i of keys) {
//   console.log(i);
// }
// for (const i of values) {
//   console.log(i);
// }

// =============================================
// =============================================

//Write a JS code to print Even numbers in given array

// const numbers = [10, 15, 17, 16, 25, 28, 102, 904];
// const evenArray = [];
// for (const i of numbers) {
//   //   console.log(i);
//   if (i % 2 == 0) {
//     evenArray.push(i);
//   }
// }

// console.log(evenArray);

// =============================================
// =============================================
//Write a js code to print bellow patern
//// 1
//// 1 2
//// 1 2 3
//// 1 2 3 4
//// 1 2 3 4 5

// const length = 5;

// for (let i = 1; i <= length; i++) {
//   let string = "";
//   for (let j = 1; j <= i; j++) {
//     string += j + " ";
//   }
//   console.log(string);
// }

// =============================================
// =============================================

//write a JS code to remove duplicate values

// const array = [4, 2, 34, 14, 1, 12, 1, 4];

// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   if (newArray.indexOf(array[i]) === -1) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);

// // or we can write the code like this with for in
// const newArray2 = [];

// for (let i in array) {
//   if (newArray2.indexOf(array[i]) === -1) {
//     newArray2.push(array[i]);
//   }
// }

// console.log(newArray2);

// =============================================
// =============================================

// determine age based on day -> my birthday:  01/25/2001

// const determine = (birthday) => {
//   const birthDateMS = new Date(birthday).getTime();
//   const now = new Date().getTime();
//   const ageMS = now - birthDateMS;
//   const oneDay = 24 * 60 * 60 * 1000;
//   const age = Math.floor(ageMS / oneDay);
//   return age;
// };

// console.log(determine("01/25/2001"));

// =============================================
// =============================================

// remove duplicate in an Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6];

// const newSet = new Set(arr);
// const newArr = [...newSet];
// console.log(newArr);

// //or we can write it like this

// const newArr2 = [...new Set(arr)];
// console.log(newArr);

// =============================================
// =============================================

//check triangle with 9 cm and 5cm and 6 cm and say the name of it

// const side1 = 9;
// const side2 = 5;
// const side3 = 6;

// if (side1 === side2 && side2 === side3) {
//   console.log(`its a Equilateral triangle`);
// } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//   console.log(`its a is isosceles triangle`);
// } else {
//   console.log(`its a scalene triangle`);
// }

// =============================================
// =============================================

//Write a funciton to find the count of a letter in a string

// const counterLetter = (str, letter) => {
//   let counter = 0;
//   str = str.toLowerCase();
//   letter = letter.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// };

// const result = counterLetter("Hello guys im aref and im living in tehran", "h");

// console.log(result);

//or we can write it with anonymous function -->

// (function (str, letter) {
//   let counter = 0;
//   str = str.toLowerCase();
//   letter = letter.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   console.log(counter);
// })("Hello guys im aref and im living in tehran", "h");

// =============================================
// =============================================

//  Find customers with age > 60 and age < 10

// const customers = [
//   {
//     id: 1,
//     firstName: "Abby",
//     lastName: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 2,
//     firstName: "Jerry",
//     lastName: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 3,
//     firstName: "Dianna",
//     lastName: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 4,
//     firstName: "Dev",
//     lastName: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 5,
//     firstName: "Maria",
//     lastName: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];

// for (let person of customers) {
//   if (person.age > 60) {
//     console.log(
//       `${person.firstName} ${person.lastName} is older then 60 years `
//     );
//   } else if (person.age < 10) {
//     console.log(
//       `${person.firstName} ${person.lastName} is younger then 10 years`
//     );
//   }
// }

// //or we can write this with filter and get them in an array then run a loop on it

// const over60 = customers.filter((customers) => customers.age > 60);
// const under10 = customers.filter((customers) => customers.age < 10);

// for (let older of over60) {
//   console.log(`${older.firstName} ${older.lastName} is older then 60 years`);
// }
// for (let kids of under10) {
//   console.log(`${kids.firstName} ${kids.lastName} is younger then 10 years`);
// }

// =============================================

//  Build customer data with title and full name using the last training

// const customers = [
//   {
//     id: 1,
//     firstName: "Abby",
//     lastName: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 2,
//     firstName: "Jerry",
//     lastName: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 3,
//     firstName: "Dianna",
//     lastName: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 4,
//     firstName: "Dev",
//     lastName: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 5,
//     firstName: "Maria",
//     lastName: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];

// const customersWithTitle = customers.map((customer) => {
//   let title = "";
//   const { firstName, lastName } = customer;
//   if (customer.gender === "M") {
//     title = "Mr.";
//   } else if (customer.gender === "F" && customer.married) {
//     title = "Mrs.";
//   } else {
//     title = "Miss ";
//   }
//   customer.fullName = `${title}${firstName} ${lastName}`;
//   return customer;
// });

// console.log(customersWithTitle);

// //i dont recommend but we can write this with for loop like this(dont do this) -->

// for (let customer of customers) {
//   let title = "";
//   const { firstName, lastName } = customer;
//   if (customer.gender === "M") {
//     title = "Mr.";
//   } else if (customer.gender === "F" && customer.married) {
//     title = "Mrs.";
//   } else {
//     title = "Miss ";
//   }
//   customer.fullName = `${title}${firstName} ${lastName}`;
// }

// console.log(customers);

// =============================================
// =============================================
// =============================================

//Generate a random integer

// const generateRandom = (min, max) => {
//   //   if (min === undefined && max === undefined) {
//   //     return `Enter Min & Max`;
//   //   }
//   //or better to say
//   if (!min && !max) {
//     return `Enter Min & Max`;
//   }

//   if (!max) {
//     max = min;
//     min = 0;
//   }
//   const result = min + Math.floor(Math.random() * (max - min + 1));
//   return result;
// };

// console.log(generateRandom(5, 10));
