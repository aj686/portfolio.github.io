



//function for button
function button() {
    alert("Please wait for order")
}

// can change new value 
let message = "Hello Bundle Store Kajang";
console.log(typeof message);   //string
message = 123;
console.log(message);          //number
message = true;
console.log(message);          //boolen 
message = null;
console.log(message);
let myName;
console.log(myName);

// fixed value 
const newMessage = "Baju bundle saiz M ada ?";
//newMessage = "Hello"
console.log(newMessage);
//alert(message);

//variable name rules 
/*
1. start with letter & can;t start with number
2. can't used reserved name
3. cant use spacebar or quaotation mark
4/ can't use reserved name
*/

// Operator precedents 
let price = (2+3) * 10;
console.log(price);

// Increment and decremeant 
let myNumber1 = 10;
myNumber1++;
console.log(myNumber1);

let myNumber2 = 10;
--myNumber2;
console.log(myNumber2);

//Adding variable into 2nd variable
//let A = "Hello";
let B = "World";
//console.log(A + " " + B);  
let newName = `Hello ${B}`;
console.log(newName);

//Convert string to number 
let myNumber = Number.parseFloat('12345');
console.log(myNumber);

//Convert number to string 
let str = 123;
str = str.toString();
console.log( typeof str);

// Declare OBJECT(variable name) with content properties(behaviour) and method(function built in object)
//person is object 
// firstName - attendClass = properties of object
let person = {
    firstName : "Ajwad",
    lastName : "Aqhari",
    emailAddress : "ajwadaqhari1@gmail.com",
    phoneNumber : 60179519690,
    attendClass  : false

}

console.log(person.phoneNumber);

//function, call function with value and function retun value 

//let carName = "Buggati Cheron";    //Global scope

function car(carName) {
    console.log(carName);

    let newCar = "Proton Wira";   //Local Scope for expressionFunction function
    let expressionFunction = function () {
        console.log(newCar);
    }
    expressionFunction();
}
car("Buggati Cheron"); //call function with value 
 
//function return value
function newCalculation(value) {
    let total = value * 10;
    return total;
}

console.log(newCalculation(2));

//Change the title in web page with function JS 
showMessage("Bundle Store Cyberjaya");

//Tenary Operators 
// condition ? 'statement' 'statement'
let harga = 10;
let duit = (harga <= 15)? 'Betul' : 'Salah';
console.log(duit);

//loping 
// for(initialization, condition, increment/decrement)
/*for (let i = 0; i<10; i++) {
    console.log(i);
}
*/



