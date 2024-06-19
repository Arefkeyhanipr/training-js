//module is for using our codes in another js script
//we can make big projects to small parts of js and not make a so big js file
//first way---------- Named *********************

const name = "Aref";
const age = 23;

function hello() {
  console.log(`hi im ${name} and im ${age} years old`);
}

//Use export to send the variables like the code below
//we even can change the name of it with -as- like hello in here
export { name, age, hello as greeting };

//--------------- Secound way Default ***************

//The differences between default module and named module is in default module we can only sent one thing to the other file
//like the code below

const city = "Tehran";

export default city;
