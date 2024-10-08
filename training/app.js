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

// =============================================
// =============================================

//------------------------------------------------     map and set     ------------------------------------------------

//-----------------------  map  -------------------------

// //in the objects we cant use an array or object as an key,so we can use map instead

// const myMap = new Map();

// // myMap.set("name", "aref");

// // myMap.set([1, 2, 3], 6);

// // myMap.set({ age: 23 }, true);

// // console.log(myMap);

// //better to write like this

// myMap.set("name", "aref").set([1, 2, 3], 6).set({ age: 23 }, true);

// console.log(myMap);

// //or we can write the codes with only Map like this

// const myMap2 = new Map([
//   ["name", "aref"],
//   [[1, 2, 3], 6],
//   [{ age: 26 }, true],
// ]);
// console.log(myMap2);

//---------------------- get,size,delete,clear,has--------------------------

// //working more with map
// const myMap = new Map();

// myMap.set("name", "aref");

// myMap.set("age", 23);
// myMap.set("nothing", "need to delete");

// const result = myMap.get("name");
// const result2 = myMap.size;
// const result3 = myMap.delete("nothing");
// const result5 = myMap.has("age");
// const result6 = myMap.has("agee");

// console.log(result);
// console.log(result2);
// console.log(myMap);
// console.log(result5);
// console.log(result6);
// 6;
// const result4 = myMap.clear();

// console.log(myMap);

//----------------------- map iteration -------------------------

// const myMap = new Map();

// myMap.set("name", "aref");
// myMap.set("age", 23);

// const keys = myMap.keys();

// console.log(keys);

// for (const key of keys) {
//   console.log(`the key is ${key}`);
//   console.log(myMap.get(key));
// }

// const values = myMap.values();

// for (const value of values) {
//   console.log(`the value is ${value}`);
// }

// myMap.forEach((value, key) => {
//   console.log(value);
//   console.log(key);
// });

// //the entries will give the value and the key in the same time
// const entries = myMap.entries();
// console.log(entries);
// for (const entry of entries) {
//   console.log(entry);
// }

//-----------------------  set  -------------------------

// const mySet = new Set([1, 2, "aref", [23, 55, 14]]);
// mySet.add(22);
// console.log(mySet);

//----------------------- set methods -------------------------

// const mySet = new Set([1, 2, "aref", [23, 55, 14]]);

// console.log(mySet);

// const result = mySet.size;
// const result2 = mySet.has(14);
// const result3 = mySet.has(2);
// const result4 = mySet.delete(1);

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// const result5 = mySet.clear;

// console.log(result5);

//----------------------- Set iteration -------------------------

// const mySet = new Set([1, 2, "aref", [23, 55, 14]]);

// const values = mySet.values();

// console.log(values);

// for (const value of values) {
//   console.log(`this is a  value ${value}`);
// }

// mySet.forEach((value) => console.log(value));

// =============================================
// =============================================

//------------------------------------------------    symbol     ------------------------------------------------

// const sym1 = Symbol();
// const sym2 = Symbol();
// console.log(sym1);
// console.log(sym2);
// console.log(sym1 === sym2);
// console.log(typeof sym1);
// const sym3 = Symbol("name"); // description

// console.log(sym3);
// console.log(sym3.description);

//----------------------- The use of Symbol -------------------------

// const age = Symbol("age"); //primitive type

// const data = {
//   firstName: "aref",
//   lastName: "keyhani",
//   [age]: 26, // Hidden property
// };

// console.log(data);
// console.log(Object.keys(data));
// for (const i in data) {
//   console.log(i);
// }
// //as you can see the symbol is hidden, and we cant use any loops or changes that we make on the object on the symbol too
// //like when we want to change everything in a object but not one of them we can use symbol so it will be hidden from the change

//----------------------- shared Symbol -------------------------

// // const sym1 = Symbol.for("name");
// // const sym2 = Symbol.for("name");
// // console.log(sym1 === sym2);

// // const sym3 = Symbol("name");
// // const sym4 = Symbol.for("name");

// // console.log(sym3 === sym4);

// // const sym5 = Symbol("name");
// // const sym6 = Symbol("name");

// // console.log(sym5 === sym6);

// // const data = {
// //   firstName: "aref",
// //   lastName: "keyhani",
// // };

// // const add = () => {
// //   const age = Symbol();
// //   data[age] = 23;
// // };

// // add();

// // console.log(data);
// // console.log(data[age]);

// //problem in here is that we cant use the age in the function
// //so here we will use symbol.for() like the code below
// const data = {
//   firstName: "aref",
//   lastName: "keyhani",
// };

// const add = () => {
//   const age = Symbol.for("age");
//   data[age] = 23;
// };

// add();
// const age2 = Symbol.for("age");
// console.log(data);
// console.log(data[age2]);

// // so we srite ha symbol.for instead of symbol,
// //and outside of the function we are naming the age2 and using the age of the funciton
// //if you remember we said that symbol.for() are same,so here our problem will be solved

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     Dom & Events     ------------------------------------------------

// Single selector

// //query Selector
// const element = document.querySelector("h1");
// const elementH1 = document.querySelector(".container");
// const elementP = document.querySelector("#text");

// console.log(element);
// console.dir(element);

// console.log(elementH1);

// console.log(elementP);

// //Get Elemeny by ...
// const newElement = document.getElementById("text");

// console.log(newElement);

//==============================================================

// Multi selector

//query Selector All
// const elementList = document.querySelectorAll("h1");
// const elementList2 = document.querySelectorAll(".container");

// console.log(elementList);
// console.log(elementList[0]);
// console.log(elementList[1]);

// console.log(elementList2);
// console.log(elementList2[0]);
// console.log(elementList2[1]);

// //Get Elemeny by ...

// const elementList3 = document.getElementsByTagName("p");

// console.log(elementList3);
// console.log(elementList3[0]);
// console.log(elementList3[1]);

// const elementList4 = document.getElementsByClassName("text");

// console.log(elementList4);
// console.log(elementList4[0]);
// console.log(elementList4[1]);

//===============================
//Select the elements inside the other elemts

// const header = document.querySelector("#header");
// const textOfHeader = header.querySelector("#text");

// console.log(header);
// console.log(textOfHeader);

//----------------------- Parents - siblings -------------------------

// const elem = document.querySelector("div");

// //this will refer to the body because the div is inside of the body
// console.log(elem.parentNode);
// console.log(elem.parentElement);

// //and this will show what are inside of the div
// console.log(elem.childNodes);
// console.log(elem.children);

// //as you can see the childnodes will return more values because it will even give the spaces after the lines
// //like if we have 2 lines after every line we will have a space as we made it with enter,node will show that to us as well
// //
// //
// //this will show whats after the element div and in this code it will show the other div
// console.log(elem.nextElementSibling);
// //and this code will show the h2 because its the previous code
// console.log(elem.previousElementSibling);
// //this code below will show the first child of the div that is --> <h1>
// console.log(elem.firstElementChild);
// //and this one will show the last child that is the --> <p>
// console.log(elem.lastElementChild);

//----------------------- changing css with js -------------------------

// const elem = document.querySelector("#header");

// elem.style.color = "gray";
// elem.style.fontSize = "20px";
// elem.style.backgroundColor = "black";

// elem.firstElementChild.style.color = "green";

// const elem2 = document.querySelector("#main");

// //this code below will delete the class name that the element have and replace it with what you want
// elem2.className = "container2";

// console.log(elem2);
// //with code below we can add or remove the class names of an elemnt
// elem2.classList.add("container");
// elem2.classList.remove("imMain");
// console.log(elem2);

// //with code below we can toggle the class for an element
// // elem2.classList.toggle("container2");
// //we can use it like this

// setInterval(() => {
//   elem2.classList.toggle("container2");
// }, 5000);

// //this way the style will change every 5 secounds

//----------------------- Inserting to DOM -------------------------

// const elem = document.querySelector("div");

// // if we want to replace our text with the text HTML we can use this

// // elem.innerHTML = "<span>Removed</span>";

// //if we dont want to replace thehtml but we want to add it we can use it like this

// elem.innerHTML += "<span>Removed</span>";

// //we can also add  elemts to our HTML

// const btn = document.createElement("button");

// btn.innerText = "BIG BUTTON";
// btn.style.fontSize = "30px";
// btn.style.backgroundColor = "gray";
// btn.style.color = "black";
// elem.appendChild(btn);

//----------------------- Delete from DOM -------------------------

// const elem = document.querySelector("div");

// //this will delete all of the div

// elem.remove();

// //this will delete the first child of the div--> the h1

// elem.removeChild(elem.children[0]);

// //or we can write it like this

// elem.removeChild(elem.firstElementChild);

//----------------------- Events -------------------------

// const elem = document.querySelector("#main");
// const btn = document.querySelector(".btn");

// // btn.addEventListener("click", change);

// // function change() {
// //   elem.classList.toggle("container2");
// // }

// //we can write the function inside of the addeventlistener like the code below

// //in this way it doesnt matter that we give a name to the function or not

// btn.addEventListener("click", function () {
//   elem.classList.toggle("container2");
// });

//----------------------- types of Events -------------------------

// const btn = document.querySelector(".btn");

// // btn.addEventListener("click", change);
// // btn.addEventListener("mousedown", change);
// // btn.addEventListener("mouseup", change);
// // btn.addEventListener("mouseenter", change);
// // btn.addEventListener("mouseover", change);
// // btn.addEventListener("mouseleave", change);
// // btn.addEventListener("mouseout", change);
// // btn.addEventListener("mousemove", change);

// function change() {
//   console.log(`hello`);
// }

// // btn.addEventListener("keydown", change);
// // btn.addEventListener("keyup", change);
// // btn.addEventListener("keydown", change);

// const put = document.querySelector("input");

// // put.addEventListener("change", change);
// // put.addEventListener("focus", change);
// // put.addEventListener("blur", change);

// // window.addEventListener("load", change);
// // window.addEventListener("unload", change);
// // window.addEventListener("resize", change);

//----------------------- Target & event object -------------------------

// const btn = document.querySelector(".btn");
// //with target you can find the element that you want
// // const change = (event) => {
// //   console.log(event.target);
// // };
// //from the event in here we can get more information from the element
// const change = (event) => {
//   console.log(event);
// };

// btn.addEventListener("click", change);
// // like with this event listener when we use keyboard it will tell us witch key we press down and it will even give the code of the key
// btn.addEventListener("keydown", change);

//----------------------- Prevent Default -------------------------

// const form = document.querySelector("#main-form");

// //we use preventDefault so the site doesnt reload it self

// const change = (event) => {
//   event.preventDefault();
//   console.log(event);
// };

// form.addEventListener("submit", change);

//----------------------- Stop propagation -------------------------

// const div = document.querySelector("#main");

// const btn = document.querySelector(".btn");

// //what happens here is that if we click on the button, the button and the div will be loged

// // const change = (event) => {
// //   console.log(event.target);
// // };

// // console.log(div);

// // btn.addEventListener("click", change);
// // div.addEventListener("click", change);

// //let me clearify it for you

// // const showButton = (event) => {
// //   console.log(`button`);
// // };

// // const showDiv = (event) => {
// //   console.log(`Div`);
// // };

// // btn.addEventListener("click", showButton);
// // div.addEventListener("click", showDiv);

// //as you can see when we click on the div and the elemts inside of it it will log the "div"
// //but when we click on the button we will get "button" and the "div"
// //so how can we fix this problem? with Stop propagation like code below

// // const showButton = (event) => {
// //   event.stopPropagation();
// //   console.log(`button`);
// // };

// // const showDiv = (event) => {
// //   console.log(`Div`);
// // };

// // btn.addEventListener("click", showButton);
// // div.addEventListener("click", showDiv);

// //with stopPropagation() now the eventlistener doesnt get the parent and only gives us the button it self
// //so lets write it one more time with getting the elements

// const showButton = (event) => {
//   event.stopPropagation();
//   console.log(event.target);
// };

// const showDiv = (event) => {
//   console.log(event.target);
// };

// btn.addEventListener("click", showButton);
// div.addEventListener("click", showDiv);

//----------------------- how to delete the Event -------------------------

// const div = document.querySelector("#main");

// const btn = document.querySelector(".btn");

// const showButton = (event) => {
//   event.stopPropagation();
//   console.log(event.target);
// };

// const showDiv = (event) => {
//   btn.removeEventListener("click", showButton);
//   console.log("Div Clicked !");
// };

// btn.addEventListener("click", showButton);
// div.addEventListener("click", showDiv);

// //as you can see as soon as we click on the div the showbutton and its eventlistener doesnt work
// //because we deleted from the code by clicking on the div,befor clicking on the div you can use the button but after that there is no use

//----------------------- Dataset -------------------------

// const train = document.querySelector("#train");

// console.log(train.dataset);

// train.dataset.next = "React";

// console.log(train.dataset);

//----------------------- size of an element -------------------------

// const btn = document.querySelector(".btn");

// console.log(btn.offsetWidth);
// console.log(btn.clientWidth);
// //the reason that clientWidth is smaller is that it doesnt take the border so its smaller

// console.log(btn.offsetHeight);
// console.log(btn.clientHeight);

// //offset hight and width are for the element itself
// //we can get the space between element from left of the page and up of the page

// console.log(btn.offsetTop);
// console.log(btn.offsetLeft);

// console.dir(btn);

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     BOM     ------------------------------------------------

//----------------------- Window -------------------------

// //outer height and width is all the page
// console.log(`outer height : ${window.outerHeight}`);
// console.log(`outer width :${window.outerWidth}`);

// //inner height and width is the part of the page that we see,like the inspect is not a part of it
// console.log(`inner height :${window.innerHeight}`);
// console.log(`inner width :${window.innerWidth}`);

//----------------------- Screen -------------------------

// //screen height and width will show the size of your screen or lets say the manitor

// console.log(`height : ${screen.height}`);
// console.log(`width : ${screen.width}`);

// //the avail height and width is the screen that is avaible for us,the avail height is lower then screen height because of the navbar of windows,mac & etc

// console.log(`avail height : ${screen.availHeight}`);
// console.log(`avail width : ${screen.availWidth}`);

//----------------------- location -------------------------

// console.log(window.location);

// location.assign("https://google.com");
// location.href = "https://google.com";

// location.replace("https://google.com");

// console.log(location.reload());

//----------------------- history -------------------------

// console.log(history);

// history.back();
// history.forward();

//----------------------- Navigator -------------------------
//this is information of your browser
// console.log(navigator);

// console.log(navigator.geolocation);

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     Client-side storge     ------------------------------------------------

// =======================================================================================================================================
//----------------------- Local storge - persistent - 5MB - Origin -------------------------

// localStorage.setItem("Name", "Aref");

//----------------------- JSON stringify -------------------------

////for using objects and other things in setItem we use JSON stringify cause it only accepts stings,like the code below

// const data = { name: "aref", age: 23 };
// const stringData = JSON.stringify(data);

// localStorage.setItem("Name", "Aref");

// localStorage.setItem("data", stringData);

////as you can see now in the application,storage,local storage part the key is data but the value is an object

//----------------------- JSON parse,getItem,changing and clear the data -------------------------

// const data = { name: "Aref", age: 23 };
// const stringData = JSON.stringify(data);
// localStorage.setItem("data", stringData);
// //With getItem we can get the value of the key
// const getData = localStorage.getItem("data");

// console.log(getData);

// //now if we want to make the sting to the original shape we use parse
// //like the code below

// const parsedData = JSON.parse(getData);

// console.log(parsedData);

// //we can change the value of the key like code below

// localStorage.setItem("lastName", "Keyhani");
// localStorage.setItem("lastName", "Keyani Pirdehi");
// //now the first setItem will change to the secound

// //we can clear and delete everything from the local storage with-->

// localStorage.clear();

// //but if we want to just remove one of the items we use-->
// //Remember you need to give the key of the item not the value
// localStorage.removeItem("data");

// =======================================================================================================================================

//----------------------- Session Storage  -------------------------

// //same as local storage with few diffrences
// //if we clode the tab and reopen it again all the things are saved but
// //in the session storage it will be all gone
// //all the other things are the same such as clear,getItem,setItem & etc

// const data = { name: "Aref", age: 23 };
// const stringData = JSON.stringify(data);
// sessionStorage.setItem("data", stringData);

// =======================================================================================================================================

//----------------------- Cookies  -------------------------

// //Cookies - Persistent - 80KB

// //a simple way to say what is cookies is when you get to site and sign in and login if you refresh the page your still logged in
// //why is that? cause your information is saved in your cookies
// //we use cookies for other things too
// //you can find the cookies in the application,storage,cookise

// document.cookie = "name=Aref";
// document.cookie = "age=27";

// //we have something named path. simple wat to say this is that we allow the user to have access in the all parts of the site
// // and we have somthing like max-age, like when you login to a site but after 1 week your loged out,thats what max-age does

// //in the code below the cookie will disappeare in 10 secounds if we comment it
// document.cookie = "name2=Arash; path=/; max-age=10";
// //max-age defualt is per secound

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     Asynchono     ------------------------------------------------

//----------------------- Call Back  -------------------------

// //here we have two functions and the first function will run after 2 secounds
// //what if we want to use the parameter of the first function for the secound one?
// //we can use callBack in this situation like the code below

// function dublicate(number, callBack) {
//   setTimeout(() => {
//     const result = number * 2;
//     console.log(result);
//     callBack(result);
//   }, 2000);
// }

// const add = (number) => {
//   console.log(number + 5);
// };

// dublicate(5, add);

//----------------------- callBack HELL!  -------------------------

// function dublicate(number, callback1, callback2) {
//   setTimeout(() => {
//     const result = number * 2;
//     console.log("The main", result);
//     callback1(result, callback2);
//   }, 2000);
// }

// const add = (number, callback) => {
//   const res = number + 5;
//   console.log("first callback", res);
//   callback(res);
// };

// const makeItString = (num) => {
//   console.log("secound callBack", num.toString());
// };

// dublicate(5, add, makeItString);

// //okay as you can see this looks like HELL! for giving the parameter to another function in here
// //we made another callback in dublicate then made a parameter callback in add and used another callback in add for send it to makeItString
// //we did all of this just to give the parameter to another function and made this mess
// //this is one of the reasons we regularly don't use the callback cause it will make a CALLBACK HELL!

//
//----------------------- Promise -------------------------
//we use Promise so we dont use the callback, they are similar to eachother,both trying to make Asynchono, but promise doesnt have the problems like callback hell

// const data = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log(`1`);
//     resolve();
//     //resolve in here is something similar to return and it means the job is done here
//   }, 2000);
// });

// data.then(() => console.log(`2`));

//----------------------- resolve & reject -------------------------

////as you can see here we are asking for users password
////it will check it and then put the result in alert and in console

// const password = "thisIsPassword";

// const getPassword = prompt(`please enter your password`);

// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (password === getPassword) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// });
// if (password === getPassword) {
//   data.then(() => alert(`Welcome to your panel`));
//   data.then(() => console.log(`%cWelcome to your panel`, "color:green;"));
// } else {
//   data.catch(() => alert(`The password was wrong`));
//   data.catch(() => console.error(`The password was wrong`));
// }

//----------------------- then & catch -------------------------
// //we can use then and catch like this to get the massages from resove and reject and send it
// const password = "thisIsPassword";

// const getPassword = prompt(`please enter your password`);
// const name = prompt(`enter your name`);

// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (password === getPassword) {
//       resolve(`Welcome to your panel `);
//     } else {
//       reject(`password was wrong`);
//     }
//   }, 2000);
// });

// data
//   .then((result) => console.log(result + name))
//   .catch((error) => console.error(error));

//----------------------- solve the callback hell problem with promise -------------------------

// const dublicate = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number * 2;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// };

// const add = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number + 5;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// };

// dublicate(5)
//   .then((number) => add(number))
//   .then((finalNum) => console.log(finalNum));

//----------------------- async & await - ES8 -------------------------
////we can only use async in functions

// const dublicate = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number * 2;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// };

// const add = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number + 5;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// };

// async function start() {
//   console.log(`start`);
//   const resultOfDb = await dublicate(5);
//   console.log(resultOfDb);
//   const resultOfAdd = await add(2);
//   console.log(resultOfAdd);
//   console.log(`End`);
// }
// start();

//----------------------- Error handeling in async & await  -------------------------
//// as you remember in then and catch when we got an error the catch handels it,but what about async? lets get to iy

////ill put an error in the code, first ill change the line 2052 and put and if else in it and then change the input of dublicate from 5 to null
////so we get an error
////so about the handeling, we can handel this problem with try and catch

// const dublicate = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === "number") {
//         const result = number * 2;
//         resolve(result);
//       } else {
//         reject("invalid data type");
//       }
//     }, 1000);
//   });
//   return promise;
// };

// const add = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number + 5;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// };

// async function start() {
//   console.log(`start`);
//   try {
//     //as you can see the error is here, the dublicate needs a number but we are giving it an null
//     const resultOfDb = await dublicate(null);
//     console.log(resultOfDb);
//     const resultOfAdd = await add(2);
//     console.log(resultOfAdd);
//   } catch (error) {
//     //this will show us that we have an error
//     console.error(error);
//   }

//   console.log(`End`);
// }
// start();

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     API     ------------------------------------------------

// =======================================================================================================================================

//----------------------- XMLHttpRequest  -------------------------

// //this is how we send a request with XMLHttpRequesr
// const xhr = new XMLHttpRequest();

// //here we say we want to get from the url
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// xhr.onload = () => {
//   const data = xhr.response;
//   console.log(data);
//   console.log(JSON.parse(data));
// };

// //here we send our request to the server
// xhr.send();

//----------------------- fetch  -------------------------
// //fetch is easier way to get the data from the server like the code below:
// //this is fetch using promise:

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// //we can use fetch with async too like the code below:

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// }

// getData();

//----------------------- GET & POST  -------------------------

// const url = "https://jsonplaceholder.typicode.com/posts";

// //Defualt in fetch is "GET",remember this
// //GET
// //get is the way to get the data from the server
// fetch(url, { method: "GET" })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// //POST
// //post is the way to send the data to the server
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({
//     title: "JS training",
//     body: "This is a training of JS",
//     userId: "5000",
//   }),
//   headers: {
//     "content-type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// //or we can write the post like this so its more clear and clean coded

// const data = {
//   title: "JS training",
//   body: "This is a training of JS",
//   userId: "5000",
// };

// const head = {
//   "content-type": "application/json",
// };

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: head,
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

//----------------------- PUT & PATCH  -------------------------

//put and patch are for updating data

//--- PUT ---
//put will delete the data and replace it with what we want like the code below

// const data = {
//   title: "JS training",
//   body: "This is a training of JS",
//   userId: "5000",
// };

// const head = {
//   "content-type": "application/json",
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify(data),
//   headers: head,
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// //the original out come of "https://jsonplaceholder.typicode.com/posts/1" is  {
// // "userId": 1,
// // "id": 1,
// // "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// // "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// // }
// //but we changed it to data that we want

// //---  PATCH  ---
// //PATCH is for changin things in the data and it will not delete all of the data and it will only change the data that you need ;ike the code below

// //here the original title is "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" but we change it to "hello"

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "hello",
//   }),
//   headers: {
//     "content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

//----------------------- Delete  -------------------------
// //Delete is used for deleting a data

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

// //As you can see we have a empty object in the log and everything inside of it is deleted

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================
//------------------------------------------------     small review on important things     ------------------------------------------------
// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================

//----------------------- for review  -------------------------

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// const num = ["one", "two", "three", "four", "five"];

// for (let i = 0; i < num.length; i++) {
//   console.log(`Length number ${i} and the number is ${num[i]}`);
// }

// //for of & for in review

// for (let nums of num) {
//   console.log(`We got number ${nums} with for of`);
// }

// const user = {
//   name: "aref",
//   age: 23,
//   job: "programmer",
// };

// for (data in user) {
//   console.log(
//     `This is information of the user,The ${data} is ${user[data]}, it was an object so we got it with for in`
//   );
// }

// //foreach review

// num.forEach(function (nums, index) {
//   console.log(`We got ${nums} in the index of ${index} using foreach`);
// });

//----------------------- DOM review  -------------------------

// //---simple DOM change review---
// document.title = "We are Training  JS";

// const text = document.getElementById("text");

// text.style.color = "rgb(80, 90, 70)";
// text.style.fontSize = "30px";
// console.log(text);

// const mainText = document.querySelector("#main p");

// mainText.style.color = "white";
// console.log(mainText);

// const mainHeader = document.querySelector("#main h1");

// // mainHeader.style.color = "white";

// mainHeader.style.textTransform = "upperCase";

// //---addevent listener review---

// const btn = document.querySelector(".btn");
// const mainDiv = document.querySelector("#main");
// btn.addEventListener("click", changeColor);

// function changeColor() {
//   mainDiv.classList.toggle("changeBackground");
//   mainHeader.classList.toggle("spin");
// }

// console.log(mainHeader);

//----------------------- LocalStorage review  -------------------------

// localStorage.setItem("todo", "go to basketball");

// const whatWeDo = localStorage.getItem("todo");

// console.log(whatWeDo);

// localStorage.clear();

// const todoList = ["basketball", "programming", "shower"];
// const jsonTodoList = JSON.stringify(todoList);

// localStorage.setItem("todos", jsonTodoList);

// const retrieved = JSON.parse(localStorage.getItem("todos"));

// console.log(retrieved);

// const todoObj = {
//   todo1: "basketball",
//   todo2: "shower",
//   todo3: "programming",
// };

// localStorage.setItem("todo2", JSON.stringify(todoObj));

// const retrievedObj = JSON.parse(localStorage.getItem("todo2"));

// console.log(retrievedObj);

//----------------------- diffrence between query selector and get element(or better to say nodeList and collection)  -------------------------
// //this is an nodeList
// // const itemList = document.querySelector("#item-list");
// // const item = document.querySelectorAll(".item");
// // const counterItem = document.querySelector("#counter");

// // console.log(itemList);
// // console.log(item);

// //and this is an HTML collection
// const itemList1 = document.getElementById("item-list");
// const item1 = document.getElementsByClassName("item");

// // console.log(itemList1);
// // console.log(item1);

// //they are both getting the same items but have a little bit of diffrences that we are going to look at
// //first of all we cant use forEach on the HTMLcollection it will give us an error but we can use it in nodelist

// ////nodeList forEach works fine

// // item.forEach((item) => {
// //   console.log(item);
// // });

// ////But HTML collection forEach gives error as you can see
// // item1.forEach((item) => {
// //   console.log(item);
// // });

// ////but we can use for loop on both of them

// // //nodelist works fine with for loop
// // for (items of item) {
// //   console.log(items);
// // }
// // //HTML collection works fine with for loop
// // for (items of item1) {
// //   console.log(items);
// // }

// //so lets get to another diffrence
// //HTML collection will update it self but the nodelist will not to it by it self
// //let me show you what i mean

// //here i want to add another li to the list and as we can see the h2 is showing us how many li's we have

// ////HTML collection

// // const newItem1 = document.createElement("li");
// // newItem1.classList.add("item");
// // newItem1.innerHTML = "item3";

// // itemList1.appendChild(newItem1);

// // counterItem.innerHTML = item1.length;

// ////as you can see the HTML collection will update the length by it self
// ////lets see how nodelist works

// ////Node list
// // const newItem = document.createElement("li");
// // newItem.classList.add("item");
// // newItem.innerHTML = "item3";

// // itemList.appendChild(newItem);

// // counterItem.innerHTML = item.length;

// ////as you can see here the nodelist will add the new item to the list but doesnt update the length
// ////so how can we solve this problem?

// const itemList = document.querySelector("#item-list");
// const item = itemList.children;
// const counterItem = document.querySelector("#counter");

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerHTML = `item ${item.length + 1}`;

// itemList.appendChild(newItem);

// counterItem.innerHTML = item.length;

// //if we change the item from queryselectorAll and use the children method instead,the problem will be solved as you can see

//----------------------- map review  -------------------------

// const names = ["aref", "Arash", "omid", "kasra"];
// //map with regular function
// const eachName = names.map((name) => {
//   return name;
// });
// //map with arrow function
// const eachNameAf = names.map((name) => name.toUpperCase());

// console.log(eachName);
// console.log(eachNameAf);

//----------------------- find review  -------------------------

// //only returns one result

// const numbers = ["1", "2", "3", "11", "5", "7", "63", "123", "63", "87", "54"];

// const aref = ["aref", "arefe", "arash"];
// const searchNum = numbers.find((num) => {
//   return num.includes(11);
// });

// console.log(searchNum);

//----------------------- Filter review  -------------------------

// //returns all the numbers that have 1 in it

// const numbers = ["1", "2", "3", "11", "5", "7", "63", "123", "63", "87", "54"];

// const aref = ["aref", "arefe", "arash"];
// const searchNum = numbers.filter((num) => {
//   return num.includes(1);
// });

// console.log(searchNum);

//----------------------- some & every review  -------------------------

// const numbers = ["1", "2", "3", "11", "5", "7", "63", "123", "63", "87", "54"];

// const someAreBigger = numbers.some((num) => {
//   return num > 5;
// });

// console.log(someAreBigger);

// const allAreBigger = numbers.every((num) => {
//   return num > 5;
// });

// console.log(allAreBigger);

//----------------------- Turnary operator review  -------------------------

// const numbers = ["1", "2", "3", "11", "5", "7", "63", "123", "63", "87", "54"];

// const biggerThenFive = numbers.map((num) => {
//   if (num > 5) {
//     console.log(`im bigger`);
//   } else {
//     console.log(`nope im tiny`);
//   }
// });

// const biggerThenFive1 = numbers.map((num) => {
//   return num > 5 ? console.log("im so bigger") : console.log(`im so tiny`);
// });

//----------------------- callStack review  -------------------------
//so javascript read the codes line by line and im gonna show you how it will read the codes below

// //here we have function but we didnt call it so it doesn't invoke at the time
// function sayHi() {
//   //step 2
//   console.log(`hello ${name} welcome`);

//   //here we invoke another function so we jump to that function
//   changeName();

//   //after changeName is done we will get back here and get the result of this log
//   //step 4
//   console.log(`say name is finished`);
// }

// function changeName() {
//   //step 3
//   name = "omid";
//   console.log(`we changed the name to ${name}`);
//   console.log(`changeName is finished`);
// }

// //the first thing that javascript will read is this codes is the -> name
// //step 1
// let name = "aref";

// // here we invoke the sayhi function so it will go back up
// sayHi();

// //and after all of that, in the end we will have this log
// //step 5
// console.log(`we are done with this review`);

//----------------------- this review  -------------------------

// //the key word this is a pointer that refrens to an object

// //this will refer to the window object
// function sayHi() {
//   console.log(this);
// }
// sayHi();

// const user = {
//   name: "aref",
//   thisObject() {
//     console.log(this);
//   },
//   whatName() {
//     console.log(this.name);
//   },
// };

// user.thisObject();
// user.whatName();
// //so why dont we say user.name here? think that we want to do a same thing on many users
// //watch the code below so you can see how easy it will get with this

// const user1 = {
//   name: "aref",
// };
// const user2 = {
//   name: "omid",
// };

// function makeBig() {
//   console.log(this.name.toUpperCase());
// }

// user1.makeNameBig = makeBig;
// user2.makeNameBig = makeBig;

// user1.makeNameBig();
// user2.makeNameBig();

// const user3 = {
//   name: "aref",
//   skills: ["HTML", "Css", "JS"],
//   greeting() {
//     console.log(`welcome ${this.name}`);
//     //if we use regular function we will not get the skills cause it will refer to greeting object
//     //and there is no skills, so if we use arrow function it will not create a new space and it will refear to the user3
//     const getSkills = () => {
//       console.log(`aref knows how to work with ${this.skills}`);
//     };
//     getSkills();
//   },
// };

// user3.greeting();

//----------------------- bind - call - aplly review  -------------------------

// const user = {
//   name: "Aref",
//   lastName: "Keyhani",
//   fullName() {
//     console.log(`You are ${this.name} ${this.lastName}`);
//   },
// };

// function registerUser(country, lan) {
//   this.fullName();
//   console.log(`Your country is ${country} and your language is ${lan}`);
// }

// const regestration = registerUser.bind(user);
// regestration("Iran", "farsi");

// registerUser.call(user, "iran", "farsi");

// registerUser.apply(user, ["iran", "farsi"]);

//----------------------- constructor function review  -------------------------

// function Todo(name, age, info) {
//   this.name = name;
//   this.age = age;
//   this.info = () => {
//     console.log(`${this.name} is ${this.age} years old`);
//   };
// }

// const myTodoList = new Todo("aref", 24);
// const myTodoList2 = new Todo("omid", 36);

// console.log(myTodoList);
// console.log(myTodoList2);

// myTodoList.info();
// myTodoList2.info();

//----------------------- prototype review  -------------------------

// function Todo(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Todo.prototype.info = function () {
//   console.log(`${this.name} is ${this.age} years old`);
// };

// const myTodoList = new Todo("aref", 24);
// const myTodoList2 = new Todo("omid", 36);

// myTodoList.info();
// myTodoList2.info();

// console.log(myTodoList);
// console.log(myTodoList2);

//----------------------- prototype Inheritence review  -------------------------

// const Human = function (name, lastname, age, city) {
//   this.name = name;
//   this.lastname = lastname;
//   this.age = age;
//   this.city = city;
// };

// Human.prototype.fullName = function () {
//   console.log(`hello ${this.name} ${this.lastname}`);
// };

// Human.prototype.livingIn = function () {
//   console.log(`Your living at ${this.city}`);
// };

// Human.prototype.old = function () {
//   console.log(`you are ${this.age} years old`);
// };

// function Alien(name, lastname, age, city, skinColor, eyes) {
//   //Keyword this is going to reference the Alien object
//   Human.call(this, name, lastname, age, city);
//   //Define as normal
//   this.skinColor = skinColor;
//   this.eyes = eyes;
// }

// //Inherit prototype
// Alien.prototype = Object.create(Human.prototype);

// Alien.prototype.speciallity = function () {
//   console.log(`Toxic Green Acid!`);
// };

// //Alien

// const faja = new Alien("rez", "kojo", 638, "unknown location", "green", 3);

// faja.fullName();
// faja.livingIn();
// faja.old();

// faja.speciallity();

// console.log(faja);

// //Human
// const mytodo = new Human("aref", "keyhani", 23, "tehran");

// mytodo.fullName();
// mytodo.livingIn();
// mytodo.old();

//----------------------- classes review  -------------------------

// class Enemy {
//   constructor(name, life, level) {
//     this.name = name;
//     this.life = life;
//     this.level = level;
//   }
//   getInfo() {
//     console.log(
//       `name is ${this.name}, it has ${this.life} life points, and the level is ${this.level}`
//     );
//   }
// }

// const dragon = new Enemy("wozzy", 1000, 999);
// const bug = new Enemy("biz", 5, 1);
// const dog = new Enemy("pupz", 56, 86);

// console.log(dragon);
// console.log(bug);

// dog.getInfo();

// class Alian extends Enemy {
//   constructor(name, life, level, color, reason) {
//     super(name, life, level);
//     this.color = color;
//     this.reason = reason;
//   }
// }

// const oneEye = new Alian("gurgu", 50000, 1400000, "Gray", "war and fight");

// console.log(oneEye);

// oneEye.getInfo();
