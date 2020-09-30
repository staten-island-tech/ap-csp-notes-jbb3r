 // constant stays the same you can't make const=1000
// var lets you change the value but const stays the same

// instead just use let [name]



/* this is the old way of creating variables

var life = 100; //notes, this is not computed 

life = life - 10 ;
var name = 'Dev ed';

var checkout = true;

var box = null;
console.log(life) ;

variables are boxes where you can add different types of data.
-how to write a variable
 1) var 

 make sure to put the quotes to denote names

 whats a boolean?
 say we have a shopping website and we have a check out button, but we only want the button available once there are products in the basket. 
  a boolean is a value of true or false
  imagine it kind of like a switch.

 What is undefined?
 variable that doesn't have a value, there is a variable but it's not defined

 WHat is null?
 variable has non value, it is not commonly used. has a value of nothing?
*/

/*const name = "dev ed";

function adder(num1,num2) {
    console.log(num1+num2);
}

adder(5,10)*/


/*string concatenations

const name ="edwin";

console.log('my name is  ${name'); */


//number
/*
const num1 =100;
const num2 = 50;
let val;

//simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 * num2;

//math object? math object
val =Math.PI;
val =Math.E;
Val= Math.round(2.8);
val= Math.ceil(2.4);
val= Math.floor(2.8);
val= Math.sqrt(64);
val =Math.abs(-3);
val =Math.pow(8,2);
val =Math.min(2,3,4,33,2,45);
val =Math.max(2,3,4,33,2,45);
val= Math.random();

console.log(val);



const age = 16;

if (age >= 18) {
    console.log("you are good to go");
} else if(age <15){
    console.log("wow you are really young");
}

else{
    console.log("you are not old enough");
} 

const dice1= 6;
const dice2= 3;

if (dice1 === 6 && dice2 === 6) {
    console.log("you are good to go");
} else {
    console.log("you are not old enough");
}
*/

const use = {
    name: 'edwin',
    age :24,
    married: false,
    purchases: ["phone", "car", "laptop"]


    sayName: function() {
        console.log(this.name);
    }


};

user.sayName ();

function.sayName();

function saymyAge() {
    console.log('My age is ${this');
}

saymyAge();
