//2:39:11

/*An operator is something that exists in all coding languages. An operator is something that allows you to either compare two or more values, modify values and variables, 
and combime them together*/

/*There are five main type of operators:
  1) arthmetric operators
  2) assignment operators
  3) comparision operators
  4) numeric comparision operators
  5) logical operators 

/*These are want we call operators, the plus operator, the subtraction operator, the division operator, and the multiplication operator. These are the most basic arithmetic operators.
These are not actually valid JavaScript code, in a IDE you would assign arithmetic operators to a variable*/

20 + 50; //The "+" is considered to be a JavaScript operator and adds
//RESULT: 70

50 - 20; // The "-" is considered to be a JavaScript operator and subtracts
//RESULT: 30 

20/2; // The "/" is considered to be a JavaScript operator and divides
//RESULT: 10

2*2; // The "*" is considered to be a JavaScript operator and multiplys
//RESULT: 4

const result = 20 + 50 / 2; // This is an example of storing a result of an operator inside a variable
//RESULT: 45

//There are other arithmetic operators, such as the modulus operator:

100 % 50 //This is dividing 100 by 50 and then is figuring out what is the reminder of that division problem. In this case 50 goes into 100 two times, so there are no reminders   
//RESULT: 0

100 % 77 //77 goes into 100 one time, so we are going to get a reminder of 23
//RESULT: 23

//There is also the exponentiation operator:

8**2 //8 to the power of 2, or 8 X 8, is 64. 
//RESULT: 64

//And there is the increment operator and the decrement operator

let startingNumber = 0; //Note that this value can be re-assigned thanks to the "let" keyword

startingNumber++; //This will 1 to the value of "startingNumber" next time it is printed
//RESULT: 0

startingNumber;//This will add another 1 to the value of "startingNumber" next time it is printed
//RESULT: 1

startingNumber++ //The increment operator is taking the previous value and adding 1. 
//RESULT: 1

startingNumber//The startingNumber variable's value is now 2
//RESULT: 2

//This is equivalent to saying: 
startingNumber = startingNumber + 1

//The decrement operator works the same way as the increment operator but it instead subtracts from a value

startingNumber-- //Take one away from 2, which is the current value of "startingNumber"
//RESULT 2

startingNumber //The startingNumber variable's value is now 1
//RESULT 1

const myVariable = 20; //The "=" is considered to be an assignment operator

//Even though the "=" is typically the only used assignment operator, there are other assignment operators that exist as well

let x = 10;

x = x + 5;
//RESULT: 15

//But there is a shorter way to write this. We would need to use a different assignment operator

let x = 10;

x+=5; //The "+=" is an assignment operator that works the same as a normal equal sign but instead it's going to take whatever is on the right side of it and it's going to add it to the varaible on the left side 
//RESULT: 15

//We have this for every different operation:

x+=5;
//RESULT: 20

x-=5;
//RESULT: 15

x/=3;
//RESULT: 5

x*=2;
//RESULT 10

//However, you only really need the "=" operator. This is becauase using the "=" operator makes code more readable and reduces the need to memorize syntax and expressions

x = x + 5; //Easy to understand

x+=5; //Harder to understand

//Comparision operators introduces the concept of 

const result = 20 > 18; //">" is the greater than operator

result //20 is a greater number than 18, therefore the value is true
//RESULT: ture

//The right side is going to evaluate to a single value and this is what we call a JavaScript expression. 

const result2 = 20 === 20; //The special operator "===" asks if 20 is equal to 20 in both value and data type

result2 // Both of those values equal 20 and both are number data types
//RESULT: true

const result3 = '20' === 20;

result3 //The values of "'20'" and "20" are differenet data types. "'20'" is a string data type and "20" is a number data type
//RESULT: false

/*There are four main comparision operators in JavaScript that have to do with equality
  1) "===" 
  2) "=="
  3) "!=="
  4) "!="
*/

20 == 20;
//RESULT: true

20 === 20;
//RESULT: true

//What is the difference between "==" and "==="? It mainly has to so with the data type:

20 == '20';
//RESULT: true

20 === '20';
//RESULT: false

const numberValue = 20;

const stringValue = '20';

typeof numberValue; //"typeof" is also considered to be an operator
//RESULT: number

typeof stringValue;
//RESULT: string

//We know the "numberValue" and "stringValue" variables are number and string data types, respectively. We can compare the two values by using the "==" and the "===" operators

stringValue == numberValue; // Even though the variables have different data types, they do have the same value. The "==" doesn't care about a varaible's data type, it only compares a variables value
//RESULT: true

stringValue === numberValue; // Even though both variables have the value of 20, they also have different data types, string and number. The "===" cares about a variables value and data type
//RESULT: fales

/* It's recommended to use the "===" operator because it is more explicit about what we are writing in our code. While "stringValue" does resolve to "true" when we use the "==" operator, 
this is only because it is implicitly coercing the data type of these values. We can explicity coerce the data type by using JavaScript's built-in number function:*/

Number(stringValue); // This changes the datatype of the "stringValue" variable from being a string to being a number
//RESULT: 20

Number(stringValue) === numberValue;
//RESULT: true

const resultVariable = stringValue == numberValue; //JavaScript will evalute the expression on the right side ("stringValue == numberValue") and assign its value to the "resultVariable" variable 
//RESULT true

//The "!=" and "!==" operators does the opposite of "==" and "==="

const numberValue = 20;

const stringValue = '20';

numberValue === stringValue;
//RESULT: false

NumberValue == stringValue;
//RESULT: true

//But if we use "!=" instead of "==":

numberValue != stringValue //The "!=" operator is checking if "numberValue" is not equal to stringValue. In this case, "nuumberValue" and "stringValue" are equal because "!=" is only checking the value
//RESULT: false

numberValue !== stringValue //The "!==="" operator is checking if "numberValue" is not equal to "stringValue". In this case, "numberValue" and "stringValue" are not equal because "!==" is comparing both the value and data type     
//Result: true

//However, not everything can be compared by using JavaScript's comparision operators without first importing a programming library. For example:

const myobj = {
  property1: "some value"
  property2: 20
};

const MyArry = [1, 2, 3, 4 ,5];

myArray === myArray; //This is true simply because it was compared with itself
//RESULT: true

//But the result will be different if an array is compared to a different array even if the value is the same. For Example:

const anotherArray = [1, 2, 3, 4, 5];

myArray === anotherArray; // JavaScript compares "myArray" and "anotherArray" as being different dispute having the same value and datatype
//RESULT: false

//The same principle applies to objects. For example:

myobj === myobj
//RESULT: true

const myobj = {
  property1: "some value"
  property2: 20
}

const anotheryObj = {
  property1: "some value"
  property2: 20
};

myObj === anotherObj //JavaScript compares "myObj" and "anotherObj" as being different dispute having the same value and datatype
//RESULT: false

//The last main type of operator is the numeric comparsion operators

40 > 20 //40 is greater than (">") 20
//RESULT: true

20 < 40 //20 is less than ("<") 40
//RESULT: true

20 <= 20 //20 is less than or equal ("<=")
//RESULT: ture

20 >= 20 //20 is greater than or equal (">=")
//RESULT: true

//The final operator that falls into the comparision operator category is the ternary operator

const result = 20 === 20 ? 'values match' : 'values do not match'
//RESULT: "values match"

let resultVariable;

//This is a short hand version of writing a if else statement as seen here: 

if (20 === 20) { // The "if" does the same thing as the "?" and the "else" does the same thing as the ":" 
  resultVariable = 'values match';
} else {
  resultVariable = 'values do not match';
}
//RESULT: "values match"

//Logical operators includes the "&&", "||", and "!" operators

20  === 20 && 10 ===10 //In order for this expression to be true both "20 ===20" and "10 === 10" must be true
//RESULT: true

20  === 20 && 12 === 10 //This is false because only "20 === 20" is true, while "12 === 10" is false. But order for this expression to be true both "20  === 20" and "12 === 10" must be true 
//RESULT: false

20 === 20 || 10 === 12 //The "||" operator is checking to see if either "20 === 20" or "10 === 12" is true. If one of them is ture, then the result will be true 
//RESULT: true

20 === 18 || 10 === 12 // Both "20 === 18" and "10 === 12" are false 
//RESULT: false

//The "!" operator reverses whatever comparision operator is being used in an expression. For example:

20 === 20 //"==" checks to see if the expression is true
//RESULT: true

!(20 === 20) //"!" reverses the result of the "===" operator. In this case, from true to false 
//RESULT: false





























