let score = "sayma"

// console.log(typeof score); // Here we used the score as 35 first the result says it is number then we used double quotes then it says it is string.
// console.log(typeof(score));

// Then we wanted the value in number so we tried the number like example given below n it said the number is number. 

 let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// Then we wrote the only value in number n it said it is NoN (not a number) sometimes the node or js makes mistakes like this but there e some other ways to get the answers too.
// console.log(valueInNumber);

// Then we tried the null the node said it is 0 then we tried boolean it said it is 1 cuz it is true n if we had written the false then the answer would be 0. 

// Then we wrote the value that's not the number so the answer was again NoN (not a number).

let isLoggedIn = "sayma"

// let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn);

// As per the example upper below when we wrote the true by using boolean we got the answer as 1 n when we used the value as 0 we got the answer false. 

// When we wrote the value as ("") empty double quotes then we got the value as false but when we wrote the value as ("sayma") when we wrote something in that place we got the answer as true.

let someNumber = 30

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// Here we wrote some number as 30 and we used string the answer we got was 30.

console.log(typeof stringNumber);
// When we used the typeof to check if it got converted to string or not we got the answer as the string. 

//  ************************************************* : OPERATIONS : **********************************************************

let value = 4
// let negValue = -value
// console.log(negValue);

// when we wrote the negvalue to find the negvalue we wrote -value of negvalue the answer was -4.

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);

// As per the example given as upper we can get the answers like that too. 

let str1 = "welcome!"
let str2 = " sayma";

let str3 = str1 + str2
console.log(str3);

// Here we gave the str1 and str2 a name and we added them and gave them a name as str3 and using console.log we goe the answer.


console.log("1" + 2); // Here we gave the quotation mark to 1 n we got the answer as 12.
console.log(1 + "2"); // Here we gave the quotation mark to 2 n we got the answer as 12. 
console.log("1" + 2 + 2); // Here we gave quotation mark to 1 n added another 2 n we got the answer as 122.
console.log(1 + 2 + "2"); // Here we gave the quotation mark to 2 and got the answer as 32.
console.log(1 + "2" + 2); // Here we gave the quotation mark to 2 and got the answer as 122.

// Do not be dependent on node for this type of methods of arthmetic operations.  

// u will see many examples of js in exams or on internet like :

// console.log(2 + 3 * 4 % 2);
 
// DON'T use this type of codes in real life its ok for the exams or for the questions but not in real life coding avoid writing it like that instead u can write like this :

// console.log((2 + 3) * 4); // Use the perenthesis () for using this method.
//  we can get the answers by first adding it n then multiplying its answer to another value like that u can use this method. 

console.log(true); // Here we wrote the true and we got the answer true as expected.
console.log(+ true); // Here we wrote the + true and we got the answer as 1.
console.log(+ ""); // Here we wrote this value and we got the answer as 0. this is not the perfect way of writing code.

// let num1 , num2 , num3

// num1 = num2 = num3 = 2 + 2

// Here we wrote the 3 numbers equally and showed it as a single number has a value as 4 , we dont need to write this type of code cuz the code needs to be readable thats not the right Way.

let gameCounter = 101 // As per we wrote the value as 101 and we used the addition n we got the answer as 102. 
// ++gameCounter; // This is the prefix increment.
gameCounter++; // we used the addition before and after the variable n got the same answer. this is postfix increment.
console.log(gameCounter);

// The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.