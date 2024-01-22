const accountId = "133455"
let accountEmail = "sym16@gmail.com" 
var accountPassword =  "234657"
accountCity = "surat"


// Here the 2nd letter of the 1st alphabet needs to be capital n the pattern to declare the variable will be written in different types u can write them by yr wish like for e.x - accountId , accountName , account_Id n so on . 

// the meaning of const is constant which can't be changed after u have put on the value of the variable  constant means it won't change n the variable means it will be chnaged later which is not confirmed. 

// accountId = "33" // when u want to change the constant variable to another one it won't happen cuz the node js wont allow it or analyse it.

accountEmail = "sayma@google.com"
accountPassword = "23456"
accountCity = "mumbai"
let accountState;

// In java script if u r writing the variable n declaring it n not putting its value then the node js will declare it undefined. it means its not defined yet.

// In java script u can use the variable directly but it will be good not to use the variables directly without using the const or let. 

console.log(accountId);

// if u want to change the variable then u can write it like shown upwards but if u want to change the more variables or const then u can use the console table.

console.table([accountId , accountEmail, accountPassword, accountCity, accountState])


// prefer not to use var as much as possible cuz of issue in block scope and in functional scope. 