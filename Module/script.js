//first way---------- Named *****************

//Use import and give the address to it so we can get the sent variables, like the code below
import { name, age, greeting } from "./app.js";

console.log(name);
console.log(age);
greeting();

//--------------- Secound way Default ***************

import city from "./app.js";

console.log(city);

//--------------- Getting all module at once ***************

// so what if we want to get all of the export using the first way(Named) at once? we will do it like the code below using a star

import * as everything from "./app.js";

console.log(everything);
console.log(everything.age);
console.log(everything.name);
everything.greeting();
