// console.log("hi");
// alert("yououou");

/*
multi 
line 
comment
*/

// declearing vvariable
// var, let, const

// var person_Name = "Prem Acharya";
// let add = "Sydney";
// const age = 20;

// console.log(person_Name);
// console.log(add);
// console.log(age);

// person_Name = "sam smith";
// add = "USA";
// age = 33;

// console.log(person_Name);
// console.log(add);
// console.log(age);

// Operators
// Arithmetic
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// let a = 6;
// const b = "6";

// const ans = a + b;
// const ans = a - b;
// const ans = a ** b;
// const ans = a / b;
// const ans = a % b;
// a++;
// console.log(a++);
// console.log(++a);
// a--;
// console.log(a--);
// console.log(--a);

// Comparisons
// ==
// ===
// >, >=
// <, <=

// let a = 6;
// const b = "6";
// const result = a == b;
// const result = a === b;
// const result = a >= b;
// const result = a <= b;

// console.log(result);

// Data types
// Primitives
// String  		// “prem acharya” 'lkjh' `jksdf`
// Number 	//123
// Boolen		// true or false
// const dt = undefined; // not defined in system memory
// const dt = null; // Null  		// defined in system memory but no value assigned

// let a = "prem";
// console.log(a);
// let b = a;
// a = "sam";
// console.log(a, b);

// Reference Types
// Object 		//{key:”value”}
// Array		//[“data”, 1232, {}, []]
// Function 	// function()

// high order function

// const add = (a,b) =>{
//   return a + b;
// }
// const multi = (a,b) => {
//   return a * b;
// }
// const calculator = (a,b, func)=>{
//   return func(a,b);
// }

// const data = calculator(2,3,add);
// console.log(data);
// const calculator = (a,b, operator)=>{
//     if(operator === "+"){
//       return add
//     }
//     if(operator === "*"){
//       return multi
//     }
//   }

//   const data = calculator("+",2,3);




// Es6 	// const sayHi ()=> “hi”

// console.log(typeof dt);
// Object;
// const a = {
//   name: "prem",
//   age: 23,
// };

// console.log(a);
// const b = a;

// a.name = "Same";

// console.log(a, b);

//Math Object

// const data = Math.PI;
// const data = Math.round(4.4);
// const data = Math.pow(8, 2);
// const data = Math.sqrt(64);
// const data = Math.ceil(4.2);
// const data = Math.floor(4.7);
// const data = Math.min(0, 150, 30, 20, -8, -200);
// const data = Math.max(0, 150, 30, 20, -8, -200);
// const data = Math.random(); // 0 - 0.9999...

// console.log(data);

// Logical Operators
// &&
// ||
// !
// Ternary

// Conditions
// If

// const age = 20;
// const g = "m";
// if (age >= 18) {
//   console.log("Welcome to the party!!!");
// }

// If else
// if (age >= 18 && g === "m") {

// what is true and false?
//truthy: "s", 1, true, {}, [], ()=>{}
//falsy: "", 0, false, undefined, null, NAN
// console.log(typeof !!age, !!age);
// if (!age) {
//   console.log("Welcome to the party!!!");
// } else {
//   console.log("Go home kido");
// }

// statement ? "true code exc" : "fals code exe"

// age > 18 ? console.log("Welcome to the party!!!") : console.log("Go home kido");

// Else if

// const pet = "cow"; //cat, cow, dog

// if (pet === "cat") {
//   console.log("meow");
// } else if (pet == "dog") {
//   console.log("woof");
// } else if (pet === "cow") {
//   console.log("moooooow");
// } else {
//   console.log("lkjhgsfhjlsd alfhlaalslfjsd");
// }

// if (pet === "cat") {
// return  console.log("meow");
// }

// if (pet == "dog") {
//   console.log("woof");
// }

// if (pet === "cow") {
//   console.log("moooooow");
// }

// Switch
// const pet = "cow"; //cat, cow, dog
// if (pet === "cow") {
//   console.log("moooooow");
// }
// pet === "cow" && console.log("moooooow");
// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;
//   case "dog":
//     console.log("woof");
//     break;
//   case "cow":
//     console.log("mooooow");
//     break;

//   default:
//     console.log("lkjhgsfhjlsd alfhlaalslfjsd");
// }

// error handling

// try {
//   //code block
//   const b = 5;
//   //   throw new Error("DB connection lost");
//   console.log(b * 3);
// } catch (error) {
//   //catch error and handle
//   console.log(error.message);
//   ///
//   console.log("OOOPPPPPSSS!");
// } finally {
//   //run finally regardless
//   console.log("log the time");
// }

// Scheduling
// setTimeout
// console.log("Before set time out");
// const timeout = setTimeout(() => {
//   console.log("inside set time out");
// }, 1000); //ms

// clearTimeout
// clearTimeout(timeout);

// setInterval
// let i = 0;
// const int = setInterval(() => {
//   console.log("inside set interval", i++);

//   if (i === 100) {
//     clearInterval(int);
//   }
// }, 100); //ms

// clearInterval

// console.log("1. first");

// setTimeout(() => {
//   console.log("2. first");
// }, 1000);

// console.log("3. first");

// const hey = () => {
//   console.log("4. first");
// };
// console.log("5. first");

// setTimeout(() => {
//   console.log("6. first");
// }, 0);

// console.log("7. first");

// hey();

// console.log("8. first");

// function
// old way

// function add(a, b){
//   return a+b;
// }

// new
// const add = (a, b) => {
//   return a + b;
// };

// const ans = add(4, 7);
// console.log(ans);

// const bio = (name, add) =>{
//   const str = "helllo I am " + name + ". And I live in " + add
//   return str;
//   console.log(str)
// }

// 1 line code
// const bio = (name, add) =>
  //   "helllo I am " + name + ". And I live in " + add
  //   
  // }

// const data = bio("Shivani" , "Sydney");
// console.log(data)



// const fruits = ["sl", 23, null, undefined, true, ["prem"], {}];

// const fruits = ["apple","banana","orange"];
// const data = fruits.length;
// console.log(fruits, data);

// slice doesnot delete data
// splice modifies the original array
// const data = fruits.splice(1,0, "TOmato");


// const fruits = ["apple","banana","orange", "mango", "mandarin"];
// fruits.forEach((item)=>{
//   console.log(item);
// })
// Create same length of new array
// fruits.map((item)=>{
//   console.log(item);
// })

// if return put that array 

// filters the word in array
// const newFruits = fruits.filter(item =>{
//   if(item.include("o"))
//   return item;
// });

// const newFruits = fruits.filter(item => item.includes("p"));

// const balances = [2,4,5,6,7];
// const total = balances.reduce((acc, num)=> acc + num , 0)

// checks one thing
// const data = fruits.find((item) => item === "orange")
// console.log(data);

// const data = fruits.every((item) => item.includes("a"))
// console.log(data);

// Challenge 1: 
// 1. Create an array 50 random number range between 1 and 100 programatically.
// 2. sort array in descending order
// 3. get the total vlaue of the array
// 4. divide original array into 2 odd and even array.
// 5. remove the duplicate value from the original array.
//

// challange 2
// Create an array 50 unique number range between 1 and 100 programatically.
// const array = [];
// for(i =1; i<=50; i++){
//   const data = Math.floor(Math.random()*100) + 1; // 0.9999 - 99.9999
   
//     array.push(data); 
  
// }
// clean code
// const array = [];
// for(i =1; i<=50; i++){
//    // 0.9999 - 99.9999
   
//     array.push(Math.floor(Math.random()*100) + 1);
  
// }
// console.log(array);
// 2.

// const sort = array.sort((a, b)=> b-a);
// console.log(sort);

//3

// const total = array.reduce((acc, num)=> acc + num , 0);
// console.log(total);

//4

// const [even, odd] = [array.filter(item => item % 2 === 0), array.filter(item => item % 2 === 1)];
// console.log("even:",even,"odd:", odd);

// 5.


// const removeDuplicate = array.filter((item, index) => array.indexOf(item) === index);

// console.log("Remove Duplicate",removeDuplicate);


// Challenge 2
// const randomVal = () =>  Math.floor(Math.random()*100) + 1;
// const uniqueArray = [];
// while(uniqueArray.length<50){
//   const num = randomVal();
// !uniqueArray.includes(num) &&  uniqueArray.push(randomVal());
// }
// console.log("Unique Array:", uniqueArray);


// for/of
// for (const item of uniqueArray){
//   console.log(item);
// }

// Object
// const mobile = {
//  brand: "Samsung",
//  color: "Black",
//  price: 10,
//  isItBroken: false,
//  dial: ()=> {
//   console.log("calling to mom")
//  }
// }
// // Property, assign, delete
// // read property
// // const val = mobile.brand;
// // index:
// // const val = mobile["color"];
// //  assinging new property:
// // mobile.useAsHammer = false;
// // console.log(mobile);
// // delete from object
// // delete mobile.price;

// // Destructuring ...
// const {you, me, phone, brand, color} = mobile
// console.log(you, me, phone, brand, color)

// const person = {
//   name: "Prem",
//   address: "Sydney",
//   age: 20,

//   dad: "sam",
//   mom: "merry",
// }
// // Rest
// const parentDetails = ({dad, mom})=>{
//   retun `And father is ${dad} and mother is ${mom}`
// }

// // function
// rest is to combine
// const bio = ({name, address = "N/A", age, ...rest}) =>{
//   // destructuring
//   // const {name, address, age} = personObj; reading 
//   // console.log(personObj);
//   return `hi there my name is ${name} i live in ${address} and i am ${age} years old` + parentDetails(rest)
// }

// const result = bio(person);
// console.log(result);

// //  Default + Rest + Spread
// // Default
// const person1 = {
//   name: "Prem",
//   // address: "Sydney",

//   age: 20,
// }
// const result1 = bio(person1);
// console.log(result1);

// const person = {
//     name: "Prem",
//     address: "Sydney",
//     age: 20,
  
//   }
//   const parent = {
//       dad: "sam",
//       mom: "merry",
//     }
// // // Old Way
// //   // const newObj = Object.assign({}, person, parent);
// //   // ... -> takes out property spread out
//   const newObj = {...person, ...parent};
//   console.log(newObj)

// // foreach
// // looping in Object / Object to array

// // const keyArg = Object.keys(newObj);
// // const keyVal = Object.values(newObj);
// // console.log(keyArg,keyVal);

// // keyArg.forEach((item) => console.log(newObj[item]));

// // for / in
// for(const item in newObj){
//   console.log(newObj[item]);
// }

// Date
// .Formate
// .Get Methods
// .Set Methods

// const dt = Date();
// const dt = Date.now();

// const dt = new Date();
// // set
// dt.setDate(dt.getDate() + 7 );
// const fd = dt.toLocaleDateString();
// console.log(fd);

// Challenge 1:
//  Create a function that takes  food name and expiry date and returns like "xyz is expired " OR "5 more days left to use before it expires"

// const fish ={
//   name: "Tuna Fish",
//   expire: "2023-06-05",
// }

// // not expire
// const milk ={
//   name: "A2 milk",
//   expire: "2023-07-15",
// }

// const checkExpiry =({name, expire}) =>{
//   const today = Date.now();
//   const fts = new Date(expire).getTime();
//   if(today < fts){
//     return `${name} has not expired` ;
//   }
//   else {
//     return `${name} has expired` ;
//   }
// }
// const result = checkExpiry(fish);
// const result2 = checkExpiry(milk);
// console.log(result);
// console.log(result2);
