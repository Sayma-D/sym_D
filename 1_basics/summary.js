// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// If u want to put the data to memory n by accessing it then there r two types of it - 

//    1. primitive
//    2. Non - primitive or reference type

//  1. primitive - there r 7 types of it.

// 1. string - when u r asking for its data then it will give u the copy of it not the original data n if u r changing the data then u r changing the copy of. 

//  2. Boolean - its true or false. 

//  3. Numbers - the numbers. 

//  4. Null - it means empty , null is not 0 or not empty string , its means empty only.

//  5. Undefined - it means u have declared the variable but u haven't put on a value u r still deciding.

//  6. Symbol - it is used when u r in an advanced java and when there r many components then this comes in work , if u r working on buttons n u want to make a button a special then u will use symbol n wrape it n it will become special. 

//  7. BigInt - it is used when there is a big value or scientific value then it id used to solve it. 

// Java script has another type known as type script which is written as - 

// const score:number = 100

// u have to use the type script like that. 

 const score = 100 // it is a basic number value.
 const scoreValue = 100.4 // there nothing special in decimal its also comes in number category.

// other examples we have shown r - 

const isLoggedIn = false
let outsideTemp = null
let userEmail; 

// u can write the semicolon (;) or use undefined too for not writing value it will be shown as undefined no matter what u use semicolon or undefined.  

// example of symbol - 

//  const id = symbol('123')
//  const anotherId = symbol('123')

// console.log(id === anotherId);

// we used tripple equals to see if they r equal or not n it shows its not same at all so obvious symbol is used for this to show diffenrence between them. 

// Example of BigInt - 

// const bigNumber = 23682460863435n

// If we write (n) then it will become the bigint number automatically. 

// Non - primitive (Reference) : it is used when u want reference in memory then it will allocate it directly.

// 1. Arrays 2. Objects 3. Functions

// Array - 

const heroes =  ["captain America" , "Iron man" , "Wanda"];

// this is the example of an array , the array r written in square brackets , n the values r also called reference type or non - primitive type. 

// Objects -

{
    name : "sayma"
    age : "19"
}

// the example given upper is the objects. u can write the value like this if there is a curlu braces then its called objects.

let myObj = {
    name : "sayma",
    age : "19" ,
}

// u can write the objects in curly barces n u can store the value in variable too but its ok not use the variables curly braces r enough. 

// Functions - 

const myFunction = function() {
     console.log("Hello world");
}

// the example given upper is of function n writing (function (){} ) is the method for function.

// If u want to know the datatype of any value then u can use this -

// console.log(typeof bigNumber); 

// u can know the datatypes of any value by using type of. 

// we used the bigNumer as described in bigint example n we got the answer as undefined. 

// console.log(typeof outsideTemp); // its the object.

//  console.log(typeof scoreValue); // its number.

// console.log(typeof myFunction); // its a function.

// the return value of function is funtion itself so the funtion is called the object function , so the return type of any non - primitive type is object.
