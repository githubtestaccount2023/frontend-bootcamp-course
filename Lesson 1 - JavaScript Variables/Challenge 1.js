/* In the dev tools console, figure out how to do the following (use Google to help):

1) Create a boolean variable called 'myBoolean' and set it to ture

2) Create a string variable called 'myString' and set it to 'hello world'

3) Create a number variable called 'firstNumber' and set it equal to '20'

4) Create another number variable called 'secondNumber' and sit it equal to '40'

5) Re-assign 'secondNumber' and sit it equal to '80'

6) Create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' at index 1

7) Create an object called 'myObject' and assign 'myArray' to a property called 'firstProperty', and the sum of 'firstNumber' and 'secondNumber' to a property called 'sumProperty'

8) Print 'myObject' to the console

9) Print the 'sumProperty' of 'myObject' to the console

10) Print the value at index 1 of 'firstProperty */

const myBoolean = true; //1
const myString = 'hello world'; //2
const firstNumber = 20; //3
let secondNumber = 40; //4
secondNumber = 80; //5
const myArray = [myBoolean, myString]; //6

const myObject = { //7
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

console.log (myObject); //8
//Result: {firstProperty: Array(2), sumProperty: 100} 

const sumProp = myObject.sumProperty; //9
console.log (sumProp);
//RESULT: 100

const firstProp = myObject.firstProperty; //10
const arrayValue = firstProp[1];
console.log(arrayValue);
//RESULT: hello world





