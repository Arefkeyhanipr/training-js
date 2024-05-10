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
//
//
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
//
//
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

// =======================================================================================================================================
// =======================================================================================================================================
//
//
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

// =======================================================================================================================================
// =======================================================================================================================================
//
//
//
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

// =======================================================================================================================================
// =======================================================================================================================================
//
//
//------------------------------------------------     Function     ------------------------------------------------

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

//------------------------  return function   ------------------------
// //there is a problem with the codes above,we can log the codes inside the function right,but can we do it out of it?

// function duplicate(num1, num2) {
//   const result = num1 * num2;
// }
// console.log(duplicate(2, 3));

// //as you see the result is undefined
// //the solution for this is using return so we are telling the function to give me the result
// //so i can use it anywhere in my codes

// //and it will look like this --->

// function anotherDuplicate(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }
// console.log(anotherDuplicate(2, 3));

// //as you see when we add the return to our code, we can get the log of the result out side of it and use it
// //*************** warning ***************
// // if you write any codes after the return in function it will not be avaible and it wont run

// =============================================
// =============================================

//------------------------  Function Declaration and function Expression   ------------------------

// //we have two kinds of functions here that are:

// //Function Declaration

// function sayMyName(name) {
//   console.log(`Your name is ${name} user number one`);
// }

// sayMyName("Aref");

// //function Expression

// const sayMyName2 = function (name) {
//   console.log(`your name is ${name} user number two`);
// };

// sayMyName2(`Kasra`);

// // so the difference between this two kind of function is about the hoisting
// //in the Function Declaration we can call the function befor the function
// //but in the function Expression we cant call the function befor of it
// //like the example below-->
// sayMyName3("mohammad");

// function sayMyName3(name) {
//   console.log(`Your name is ${name} user number three`);
// }

// //sayMyName4 gives an error that says "Cannot access 'sayMyName4' before initialization"
// sayMyName4(`Kasra`);

// const sayMyName4 = function (name) {
//   console.log(`your name is ${name} user number four`);
// };

// //as you can see there is an error for the function Expression
// //cause you have to call the function after it not befor it
// //or else it wont work for function expression

// =============================================
// =============================================

//------------------------  Anonymous Function & IIFE function   ------------------------

//-------Anonymous Function

// //when we write a function with no name thats Anonymous Function

// // function(){

// // }

// // a simple example for it is function expression
// //if you look at function expression we are not giving the name to the function in that place

// // const something = function (any) {};

// //first we name it,and then make the function with noname cause it already has a name

// //-------IIFE function

// // IIFE ==> Immediately Invoked Function Expression

// //as the name tells us it means the function will immediately start runing itself

// //how do we make this? we just make a function and place it in a parentheses and in the end we will add an empry parentheses
// //it will immediately run and doesnt need to be called

// (function () {
//   console.log(`I am IIFE Function`);
// })();

// //so it has 3 parts
// //first is the parentheses
// //secound the function in the parentheses
// //and third is the empty parentheses so it calls itself

// //********** a IIFE function is a Anonymous function and we cant name it **********

// =============================================
// =============================================

//------------------------  Arrow function | ES6   ------------------------

// const sum = function (num1, num2) {
//   const result = num1 + num2;
//   return result;
// };
// console.log(sum(3, 4));

// // or we can say-->

// const sum2 = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum2(5, 6));
// // this is a better and a clean code

// //so lets get to the Arrow function
// //in the arrow function we delete the word -function- and after the parentheses we use a arrow like =>
// //and then like the regular function we will open our function and do what we want on it
// const sum3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum3(10, 20));

// //we can even make this better like this ->
// //delete the -bracket- and the -return- for one line arrow function
// const sum4 = (num1, num2) => num1 + num2;
// console.log(sum4(333, 555));

// //*************** warning ***************
// //if your using the one line arrow function you can just have one line and no more
// //or else you need to open the bracket like the regular function

// =============================================
// =============================================

//------------------------  Callback function   ------------------------

//##########################################################  important  ##########################################################

// //callback function is a function when you use another function for the parameter
// //lets say we have two functions,function number one and function number two
// //when i set the function number two to the parameter of function number one thats called callback function just like codes below-->

// const showMessage = (text) => console.log(`the result is ${text}`);

// function sum(num1, num2, callBack) {
//   const summation = num1 + num2;
//   const result = summation ** 2;
//   callBack(result);
// }

// sum(1, 2, showMessage);

// //here we set the showmessage function to the parameter named callback
// //lets get this more simple for you:

// const showMeSomething = (finalNum) =>
//   console.log(`The final result of your plus is ${finalNum}`);

// function sum2(num1, num2, callBack) {
//   const plus = num1 + num2;
//   callBack(plus);
// }

// sum2(22, 11, showMeSomething);

// //at first the 22 and 11 will be 33 at line 588
// //then it will go to the callback and send to the showMeSomething function and 33 will set to the finalNum
// //and the result will be a text with --> The final result of your plus is 33

// //the reason why 33 goes to the showMeSomething is that we set the callBack to showMeSomething when we are calling the fucntion in sum2()
// //as you can see after the 22 and 11 we have showMeSomething in the sum2()
// // and in the parameters of sum2 we have num1,num2 and in third parameter we have callBack so the callBack and showMeSomething are set to eachother

// //the plus is equal to finalNum

// =======================================================================================================================================
// =======================================================================================================================================
//
//
//
// //------------------------------------------------   loops and functions     ------------------------------------------------

//------------------------  forEach   ------------------------

// const numbers = [1, 3, 5, 7, 9];

// const newNumbers = [];

// //we can do stuff to each of the values of the array like the code below-->

// numbers.forEach((i) => {
//   let powerOfI = i ** 2;
//   newNumbers.push(powerOfI);
// });
// console.log(newNumbers);

// =============================================
// =============================================

//------------------------  map   ------------------------

//map is similer to the foeEach, but we can return the items and make changes easly,lets see

// const numbers = [1, 3, 5, 7, 9];

// const newNumbers = numbers.map((number) => {
//   return number * 3;
// });

// console.log(newNumbers);

//as you can see we can give the information that we want to a new array without making a new array,with just using map and returning what we want

//or we can write it like this in only oneline

// const numbers = [1, 3, 5, 7, 9];

// const newNumbers = numbers.map((number) => number * 3);
// console.log(newNumbers);

// =============================================
// =============================================

//------------------------  find,findIndex   ------------------------

//find is a method to see if what we want is inclueded in the array or not
//the fact is find will give us the number only one time,like if we are looking for 5 or the text "hello"
//and we have more then 1 5 or hello the find will just gives us the first 5 and the first hello it reaches in the array

// const numbers = [2, 4, 6, 8, 10, 6];

// const result = numbers.find((number) => {
//   console.log(number);
//   const isEqual = number === 6;
//   console.log(isEqual);
//   return isEqual;
// });

// console.log(`Result ${result} is in the array`);

// // as you can see the loop will stop at 6 and wont read number 8 and 10 and the another 6
// //we can write it in another and better way

// const result2 = numbers.find((number) => number === 6);

// console.log(`Result ${result2} is in the array`);
// //
// //
// //if you want to find the index of what your looking for its just like find but we will use the findIndex loop like code below -->

// const result3 = numbers.findIndex((number) => number === 6);

// console.log(
//   `index of what your looking for is ${result3} it means its siting on the ${
//     result3 + 1
//   } part of the array`
// );

// =============================================
// =============================================

//------------------------  filter   ------------------------

//the difference between find and filter is that filter will find everything that you want and wont stop till the end of array for searching
//like the code below-->

// const numbers = [2, 4, 6, 8, 10, 6];

// const result = numbers.filter((number) => number === 6);
// console.log(result);

// =============================================
// =============================================

//------------------------  Reduce   ------------------------

//if we want to add the numbers together we can use the reduce

// const numbers = [2, 4, 6, 8, 10, 6];

// const result = numbers.reduce((accumulator, currentValue) => {
//   const result = accumulator + currentValue;
//   return result;
// }, 0);

// console.log(result);

// //or we can write it like this

// const result2 = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(result2);

// //the loop that we had goes like this
// //loop 1 -> acc=0 , cur=2  --> 2
// //loop 2 -> acc=2 , cur=4  --> 6
// //loop 3 -> acc=6 , cur=6  --> 12
// //and goes on...

// =============================================
// =============================================

//------------------------  Every & Some   ------------------------

//if we want to check something or everything in an array we can use every and some
//lets get to it

//so in the codes below we are asking the function and the every loop that are all items in the array number or not
//the answer that every or some gives us is only true or false

// const data = [1, 2, 3, 4, 5];

// const result = data.every((item) => {
//   const isTrue = typeof item === "number";
//   return isTrue;
// });

// console.log(result);

// //the code below will be false cause we are asking if EVERY item is number,and hi is not a number
// const data2 = [1, 2, 3, 4, 5, "hi"];

// const result2 = data2.every((item) => typeof item === "number");

// console.log(result2);

// //some in the other hand is just looking for 1 reason to say its true
// //so when we are asking the some about the string actually we are asking is there any strings in the array?

// const data3 = [1, 2, 3, 4, 5, "hi"];

// const result3 = data3.some((item) => typeof item === "string");

// console.log(result3);

// //a false example for -some- in code below

// const data4 = [1, 2, 3, 4, 5, "hi"];

// const result4 = data4.some((item) => typeof item === "boolean");

// console.log(result4);

// =============================================
// =============================================

//------------------------  the word - this -   ------------------------

//we can say - this - selects the place that we are using it or better to say its showing us the parrent

// console.log(this);

// //like the code below - this - will show myData
// const myData = {
//   age: 23,
//   name: "Aref",
//   showMsg: function () {
//     console.log(this);
//   },
// };

// myData.showMsg();

// //the reason that in this code below we again refer to the window is that abc right now is in global
// //and again we are using this in a global object so it will refer to all of the window

// const abc = myData.showMsg;
// abc();

// =============================================
// =============================================

//------------------------  bind   ------------------------

// globalThis.name = "aref";

// function sayMyName() {
//   console.log(`Your name is ${this.name}`);
//   console.log(this);
// }

// sayMyName();

// const data = { name: "Hamid" };
// sayMyName = sayMyName.bind(data);

// sayMyName();

// =============================================
// =============================================

//------------------------  call,apply   ------------------------

// globalThis.name = "aref";

// function sayMyName(age, lastName) {
//   console.log(`Your name is ${this.name}`);
//   console.log(age, lastName);
// }

// sayMyName(23, "keyhani");

// const data = { name: "Hamid" };

// sayMyName.call(data, 25, "mohammadi");
// //the diffrence between call and apply is if you want to set a parameter value you need to keep it in array like code below
// const data2 = { name: "Reza" };
// sayMyName.apply(data, [27, "sasani"]);

// =============================================
// =============================================

//------------------------  Setter,Getter   ------------------------
//we use setter and getter to not use so many codes,like if we want some people in our site and we want thair names
//we dont need to write their names every time and a const name=ali and const last name mohammadi
//we can use setter and getter and write it one time and then just give the names to the function
//it will make our code clean and way easier

// const data = {
//   firstName: "Aref",
//   lastName: "keyhani",
//   get fullName() {
//     return `${data.firstName} ${data.lastName}`;
//   },
//   set fullName(string) {
//     // this.firstName = string.split(" ")[0];
//     // this.lastName = string.split(" ")[1];
//     //or we can use the code below that is in one line and better
//     [this.firstName, this.lastName] = string.split(" ");
//   },
// };

// console.log(data.fullName);

// data.fullName = "ali sarmad";

// console.log(data.fullName);

// =============================================
// =============================================

//------------------------  Closure & Factory function   ------------------------

//closure we can say its a function that is returning another function inside of it,the function inside of the function is closure
// and the function that is returning the function is Factory function
//lets get to it-->

//the problem with this code below is that you can change the likescounter in global
//like giving a likecounter+=10, and this is wrong
// let likesCounter = 0;
// const like = () => {
//   likesCounter++;
//   return likesCounter;
// };

// console.log(like());
// console.log(like());
// console.log(like());

//in the code below like is a - factory function - and the function inside of it is - closure -

// function like() {
//   let likesCounter = 0;
//   return function () {
//     likesCounter++;
//     return likesCounter;
//   };
// }

// const incraseLike1 = like();

// console.log(`post number one has ${incraseLike1()} likes`);
// console.log(`post number one has ${incraseLike1()} likes`);
// console.log(`post number one has ${incraseLike1()} likes`);

// //its better to write the code like this if we want to show the log with a text

// const incraseLike2 = like();

// function resultPostTwo() {
//   let result = `post number two has ${incraseLike2()} likes`;
//   return result;
// }

// console.log(resultPostTwo());
// console.log(resultPostTwo());

// =============================================
// =============================================

//------------------------  pure & impure function   ------------------------

// this is a pure function,because everytime that we are giving a value of 3 to it it will return 3 to us

// const dublicate = (number) => number * 2;
// console.log(dublicate(3));
// console.log(dublicate(3));
// console.log(dublicate(3));

//the function below has someside efects,like we areusing the function for dublicating but the function is also changing the name
//we call this kind of functions impure functions

// let name = "aref";

// const dublicate = (number) => {
//   name = "ali";
//   return number * 4;
// };

// console.log(dublicate(2));
// console.log(dublicate(2));
// console.log(dublicate(2));

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     Math     ------------------------------------------------
//------------------------  Math round ,ceil,floor,trunc   ------------------------

// const num = 5.23;

// //we use round to round the number to the up or down as close as it is
// const rounding = Math.round(num);
// console.log(rounding);

// //ceil will round the number to up
// const roundUp = Math.ceil(num);
// console.log(roundUp);
// //floor wil round to the down number
// const roundDown = Math.floor(num);
// console.log(roundDown);
// //trunc will remove the decimal number
// const deleteDecimal = Math.trunc(num);
// console.log(deleteDecimal);

// =============================================
// =============================================

//------------------------  Math pow,sqrt,abs   ------------------------

// const num1 = 2;
// const num2 = 6;
// //pow
// console.log(Math.pow(num1, num2));
// console.log(Math.pow(num2, num1));

// //sqrt
// console.log(Math.sqrt(num2));
// console.log(Math.sqrt(num1));
// console.log(Math.sqrt(9));

// //abs
// console.log(Math.abs(-12));

// =============================================
// =============================================

//------------------------  Math min,max   ------------------------

// const resultMin = Math.min(1, 4, 5, 7, -1);
// console.log(resultMin);

// const resultMax = Math.max(1, 4, 5, 7, -1);
// console.log(resultMax);

// const num = [1, 2, 6, 8, -10, -5];

// const minArrayNum = Math.min(...num);
// console.log(minArrayNum);

// const maxArrayNum = Math.max(...num);
// console.log(maxArrayNum);

// =============================================
// =============================================

//------------------------  Math random   ------------------------
//this number are between 0 and 1--> 0<random number, 1>random number

// const random = Math.random();
// console.log(random);

// //if you want to make it bigger you can do this

// const bigRandom = Math.random();
// console.log(random * 10);

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================

//------------------------------------------------     Date & Time     ------------------------------------------------

//------------------------  Date object   ------------------------

// const date = new Date();

// console.log(date);

//------------------------  Date year,month & ...   ------------------------

// //the parameters in the date are like this, Date(year,month,day,hour,minute,secound)
// const date = new Date(2001, 0, 25, 12, 30, 5);
// console.log(date);
// //we can write it with sting too
// const date2 = new Date("3 jan 2001");
// const date3 = new Date("1/10/2001");

// console.log(date2);
// console.log(date3);
// //as you can see for the months if we are using numbers the months will start at 0-->jan=0
// //but in the string months start at 1--> jan=1

//------------------------  Date getTime   ------------------------

// const date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// //week starts at monday
// console.log(date.getDay());
// console.log(date.getUTCHours());

// =============================================
// =============================================

//------------------------  set Interval &set time out   ------------------------

// let counter = 0;

// // const interval = setInterval(() => {
// //   counter++;
// //   console.log(`${counter} seconds past `);
// //   if (counter == 10) {
// //     console.log(`Times up!`);
// //     clearInterval(interval);
// //   }
// // }, 1000);

// // or we can write it like this:

// const count = () => {
//   counter++;
//   console.log(`${counter} seconds past `);
//   if (counter == 10) {
//     console.log(`Times up!`);
//     clearInterval(interval);
//   }
// };

// const interval = setInterval(count, 1000);

// setTimeout(() => {
//   console.log(`milad`);
// }, 2000);

// //to stop the setimeout we use clearTimeout(-here goes the name of set timeout-)

// =============================================
// =============================================

//------------------------------------------------     Error     ------------------------------------------------

// //Error Handeling
// const makeString = (arr) => {
//   console.log(arr.join(" "));
// };

// //this will give an error
// // makeString(22);

// try {
//   makeString(22);
//   console.log(`All good! :)`);
// } catch (error) {
//   console.log(error);
//   console.log(`we have an error! :(
// Please try again later.`);
// }
//------------------------------------------------

// // finally

// const makeString = (arr) => {
//   console.log(arr.join(" "));
// };

// try {
//   makeString(22);
//   console.log(`All good! :)`);
// } catch (error) {
//   console.log(error);
//   console.log(`we have an error! :(
// Please try again later.`);
// } finally {
//   //clean up
//   console.log(`Lets go to the next part`);
// }

// //we use the finally for the final thing that we want to do
// //like reset the function or anything else

//------------------------------------------------

//throw

// const makeString = (arr) => {
//   console.log(arr.join(" "));
// };

// try {
//   makeString(22);
//   console.log(`All good! :)`);
// } catch (error) {
//   console.log(error);
//   console.log(`we have an error! :(
// Please try again later.`);
//   throw { message: `test the entry of makeString` };
// } finally {
//   //clean up
//   console.log(`Lets go to the next part`);
// }

// //with throw we can make an error so the other programers can see it
