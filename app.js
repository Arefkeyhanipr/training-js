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
