// console.log(2 > 1); // its greater than 1 , answer is true.
// console.log(2 >= 1); // its greater than or equal to 1 , the answer is true.
// console.log(2 < 1); // 2 is lesser than 1 , the answer is false.
// console.log(2 == 1); // 2 is equal to 1 , the answer is false.
// console.log(2 != 1); // 2 is not equal to 1 , the answer is true.

// NOTE : U can use this type of simple method to compare. basic method is correct way for using cuz there r number in comparision or string in short there r 2 same datatypes that r being compared.


// NOTE : Do not use this type of methods to compare where 2 different datatypes gets compared. therer 2 different datatypes that r being compared like there will be string or number or boolean n so on.

// console.log("2" > 1); // its true.
// console.log("02" > 1); // true.
// console.log("02" < 1); // false.

// dont use 2 datatypes to compare together. 

// console.log(null > 0); // false.
// console.log(null >= 0); // true.
// console.log(null == 0); // false.
// console.log(null < 0); // false.

// Its not like that null is greater or equal to 0 but its not predectable , the example with true is that node converted the null to 0 n so 0 is equal to 0. sometimes u will get the result as NaN or undefined too.

// console.log(undefined == 0); // false.
// console.log(undefined > 0); // false.
// console.log(undefined < 0);// false.

// u will get the answer in false but make sure to keep this thing in mind that comparision and quallity check r the 2 different things. the thing is (==) double equal or (===) tripple equal r different than that of the greater or lesser or equal to (< , > , =). 

console.log("2" === 1); 

// If u r using the 2 equal (==) then its ok cuz it will be converted but if u r using the 3 equals then the method becomes strict. datatype checks specially if the one is number or its string , shouls i convert it or not. please avoid the double equals or comparision of two different datatypes cuz that will cause u confusion.