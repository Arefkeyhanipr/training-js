// //we can name variables in js 3 ways like this:

// //camel Case
// let firstName;
// let lastName;

// //snake_case
// let first_name;
// let last_name;

// //Pascal Case
// let FirstName;
// let LastName;

// =============================================
// =============================================

// //Atithmetic Operators

// const x = 150;
// const y = 300;

// const plus = x + y;
// console.log(`${x} plus ${y} will be ${plus}`);
// const minus = y - x;
// console.log(`${y} minus ${x} will be ${minus}`);
// const multi = x * y;
// console.log(`${x} multiply ${y} will be ${multi}`);
// const division = y / x;
// console.log(`Division of ${y} and ${x} will be ${division}`);
// const power = x ** y;
// console.log(`${x} power ${y} will be ${power}`);
// const leftOver = y % x;
// console.log(`leftOver of the division of ${y} & ${x} is ${leftOver}`);

// =============================================
// =============================================

// // Nullish coalescing operator

// let name;

// let age = 23;

// console.log(name ?? age);

// console.log(age ?? name);

//!!!!! //cause the name does not have any value,this will return the age

// let empty = null;

// let nothing;

// console.log(empty ?? nothing);

// console.log(nothing ?? empty);

//!!!!!! //if we dont have any values the result will be the secound variable

// =============================================
// =============================================

// //Ternary oparator

// const x = 5;
// const y = 6;
// console.log(
//   x < y ? `y(${y}) is bigger then x(${x})` : `x(${x}) is bigger then y(${y})`
// );

//!!! //We can say this is a smaller virsion of -if- with less code & best for 1 line statements

// =============================================
// =============================================

// //------------------------------------------------     split,replace,concat,trim     ------------------------------------------------
// const info = `Hi world my name is aref keyhani pirdehi`;
// const age = "    im 23 years old";
// console.log(info.split(" "));
// console.log(info.replace("world", "my friends"));
// console.log(info.concat(age));
// console.log(age);
// console.log(age.trim());

// =============================================
// =============================================

// //------------------------------------------------     slice,substring     ------------------------------------------------

// const info = `Hi world my name is aref keyhani pirdehi and im 23 years old`;
// const myAge = info.slice(-15);
// const hello = info.slice(0, 2);

// console.log(myAge);
// console.log(hello);

//substring is the same as slice but we cant use any negetives like -x so i recommend to use slice only

// =============================================
// =============================================

// //------------------------------------------------     join-flat     ------------------------------------------------

// const myArray = ["aref", "keyhani", "pirdehi", "23"];

// const string = myArray.join(" e ");

// console.log(string);

// const newArray = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const change = newArray.flat();

// console.log(change);

// =============================================
// =============================================

// //------------------------------------------------     Spread Operator     ------------------------------------------------

// //    spread operator is something like concat :
// //    use 3 dots befor the key and you can call it

// const info = ["aref", "keyhani", 23];
// const anotherInfo = ["ali", "sasani", 20];

// const allInfo = [...info, ...anotherInfo];

// console.log(allInfo);

// =============================================
// =============================================

// //------------------------------------------------     Array Destruring     ------------------------------------------------

// const info = [
//   "aref",
//   "keyhani",
//   23,
//   "tehran",
//   "programmer",
//   "basketballplayer",
// ];

// const [name, lastName, age, ...other] = info;
// console.log(name, lastName, age, ...other);

// =============================================
// =============================================
// const something = "fav";

// const data = {
//   name: "aref",
//   lastName: "keyhani pirdehi",
//   "a g e": 23,
//   skills: ["basketball", "programming", "cooking"],
//   [something]: `my favoritethings to do`,
// };

// const key = "skills";

// console.log(data.name);
// console.log(data["a g e"]);
// console.log(data[key]);
// console.log(data);
// =============================================
// =============================================

//---------------------------   using -in- in the objects   ---------------------------

// const data = {
//   name: "aref",
//   lastName: "keyhani pirdehi",
// };

// console.log("lastName" in data);
// console.log("firstName" in data);

// =============================================
// =============================================

// const data = {
//   name: "aref",
//   lastName: "keyhani pirdehi",
//   "a g e": 23,
//   skills: ["basketball", "programming", "cooking"],
// };

// const keys = Object.keys(data);
// const values = Object.values(data);

// console.log(keys);
// console.log(values);

// =============================================
// =============================================

// //------------------------------------------------     Object Destruring     ------------------------------------------------

// const data = {
//   name: "aref",
//   lastName: "keyhani pirdehi",
//   age: 23,
//   address: {
//     contry: "iran",
//     more: {
//       city: "tehran",
//     },
//   },
// };

// const {
//   name,
//   lastName,
//   age,
//   address,
//   address: {
//     more: { city },
//   },
// } = data;

// console.log(address);
// console.log(city);
// console.log(lastName);

// =============================================
// =============================================

// //------------------------------------------------     Conditional statements     ------------------------------------------------

//------------------------   if,else if, else   ------------------------

//this is how it looks

// if (condition) {

// }
//And it goes like this:

// const num = 10;
// if (num > 10) {
//   console.log(`${num} is bigger then 10`);
// } else if (num == 10) {
//   console.log(`Your number is ${num}`);
// } else {
//   console.log(`${num} is less then 10`);
// }

// =============================================
// =============================================

//------------------------   Switch case   ------------------------
// const name = "aref";
// switch (name) {
//   case "aref":
//     console.log(`Hello Aref,Welcome`);
//     break;
//   case "mohammad":
//     console.log(`Hello Mohammad,Welcome`);
//   default:
//     console.log(`Hello there,Welcome`);
//     break;
// }

// =============================================
// =============================================

// //------------------------------------------------     Loops     ------------------------------------------------

//------------------------   for loop   ------------------------

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// const array = [1, 3, 5, 7];

// for (let i = 0; i <= array.length; i++) {
//   console.log(`The index of ${array[i]} in the array is ${i}`);
// }

// =============================================
// =============================================

//------------------------   for of loop   ------------------------

// this loop is specifically for array

// let statesOfUsa = ["LA", "CA", "NY"];

// for (const i of statesOfUsa) {
//   console.log(`the state of ${i}`);
// }

// =============================================
// =============================================

//------------------------   for in loop   ------------------------

// this loop is specifically for Objects

// const obj = {
//   name: "aref",
//   lastName: "Keyhani pirdehi",
//   age: 23,
// };

// for (const i in obj) {
//   console.log(obj[i]);
// }

// =============================================
// =============================================

//------------------------   while loop   ------------------------

// let i = 1;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// =============================================
// =============================================

//------------------------  Do while loop   ------------------------
//the differences between do while and while is that do while will run the code one time for sure no matter what

// let i = 20;

// do {
//   console.log(`i =${i}`);
//   i--;
// } while (i >= 0);

// let a = 10;

// do {
//   console.log(a);
//   i++;
// } while (a > 20);

// =============================================
// =============================================

//------------------------  Break and continue   ------------------------

// //Break will stop the loop
// let i = 1;

// while (i <= 20) {
//   if (i == 10) {
//     break;
//   }
//   console.log(`i= ${i}`);
//   i++;
// }

// const array = [1, 2, 3, "A", 4, 5, 6];

// for (z of array) {
//   if (typeof z !== "number") {
//     break;
//   }
//   console.log(`number in array is ${z}`);
// }

// //continue will jump to the next one
// //
// for (i of array) {
//   if (typeof i !== "number") {
//     console.log(`Number not found`);
//     continue;
//   }
//   console.log(`this are the numbers in array ${i}`);
// }

// =============================================
// =============================================

// //------------------------------------------------

//------------------------  Function   ------------------------

// //code bellow shows the text hello world im a function
// function showMessage() {
//   console.log(`Hello world im a function`);
// }

// showMessage();

// //code below will be 26,if we change the number of 4 to something else the result will change
// function plus(number) {
//   const result = number + 22;
//   console.log(result);
// }
// plus(4);
// //the code below shows us that we can use even more then one parameter in a single function
// function duplicate(num1, num2) {
//   const result = num1 * num2;
//   console.log(result);
// }

// duplicate(4, 5);
