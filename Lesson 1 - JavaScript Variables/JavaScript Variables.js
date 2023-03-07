//When creating variables in JavaScript you must make a declaration and assignment to properly use it. You must first declare the variable and then assign it a value

  const newVariable = 'hello world'; // This declared and assigned the variable at the same time

//But we can also break it out into individual steps:

  let anotherVariable; // All this does is declare the variable. In other words, creates a new variable and gives it a name
  anotherVariable = 20; // This assigns the variable a value. In this case the value is the number 20

  let AnotherVariable = 25; // ";" at the end of this variable indicates that this is the end of an expression
  let AnotherVariable = 25 // Even without ";" at the end, this is would be still be a valid expression because it's on its own line
  let AnotherVariable = 25 let yetAnotherVariable = 20 // These two variables are invalid because they are on the same line with no ";". Each of these variables would need a ";" in order to be valid while on the same line

//A variable can be declared in three different ways:
  
  const variable1 = 10;
  let variable2 = 10;
  var variable3 = 10;

/*All three ways of declaring these varaibles are valid but how do we decide between using "const", "let", and "var"?
1) const: use "const" whenever you want to keep the varaible's assignment the same all throughout your code  
2) let: Use "let" whenever you execpt to ressign a variable at some point in your code
3) var: This is a legacy keyword in JavaScript and shouldn't really be used anymore.*/

  let counter = 0;

counter = counter + 1;
//RESULT: 1

counter++;
//RESULT: 2

//We are reassinging the value of this variable mulitiple times using the "let" keyword. use "let" if you expect a varaible's value to change. but if we tried this with the "const" keyword...
  const counter = 0;

counter ++;
//RESULT: error!!!

//This will create an error because the "const" keyword doesn't allow us to reassign a new value to a varaible. Use "const" when you don't expect or want the variable's value to change

  const taxRate = 0.08;

//by using "const" the tax rate will never change. This is an example of an use case for a "const" varaible 

//There are many different types of naming conventions for coding. To use a varaible in JavaScript you must declare your varaible in one word and use one of these naming conventions:

  const yourFirstVariable = 10; // Camel Case
  const your_first_Variable = 10; // Snake Case
  const YOURFIRSTVARIABLE = 10; // Constant Case
  const yourfirstvariable = 10; // Lower Case
  const YourFirstvariable = 10;// Pascal Case

//You cannot declare a variable starting with a number but you can use a number anywhere after the first character. Also quotations will not work 
/*All of those are say "your first variable" however, JavaScript will recognize them as different variables due to the different naming conventions. This is how we are allowed to declare all of these at once
Even though all of these variables are functional, there are more preferable naming conventions than others*/

const q = 20; // How are we supposed to know what "q" represents? Maybe it represents a counter in a for loop or a tax rate on something?    

//But if "20" represents a tax rate than how are we supposed to know that from "q"? Whatever it means you need to name your variable accordingly

const taxRateForNetIncome = 20; // Here you are clearly specifying what this value represents. Howver, you may write out a variable name that is too long and/or complex. 

//You want a variable name that is not too vauge but also doesn't take too long to type out. You must find a nice middle ground. 

//The left side is everything to the left of "=" and the right side is everything to the right of the "="

const firstVariable = // This is the left side. This side will include either const or let and a variable name 
'JavaScript gives you superpowers'; // This is the right side. This side has the value that you are assigning to that variable 

//It's important to make a distinction between the left and right side because depending on what you are putting on what side you get different behaviours 
 
//Here is a piece of code demonstrating that we can have many different things on the right side of an expression:

const variable1 = 10;
const variable2 = variable1;
const variable3 = "Jordan"
const variable4 = {
  variableType: "object",
  variableValue: "some value"
};
const variable5 = (function () {
  return "Hello, my name is";
})();
const variable6 = variable5 + variable3;

//on the left side we have our declared variables but on the right side we have anything from a number, to a string, to an object, or even a combination of variables

console.log(variable6); // This is adding the value of "variable5" (Hello, my name is) with the value of "variable3" (Jordan)
//RESULT: Hello, my name is Jordan

//There are different data types that can be assigned in JavaScript. For example here are the three most common:

const variable1 = 10; // This value is a number
const variable2 = "some value"; // This value is a string
const variable3 = false; // This value is a boolean

// number, string, and boolean are the three most common data types in JavaScript

// Unlike in other programming languages, JavaScript doesn't require you to specify what data type you are assigning as a value

const variable1 = 10 // Here JavaScript knows that the data type being expressed here is a number
const variable1: number = 10; // Other programming languages would need to be told what the data type of the value is. Is this case, "number" would be required

/* A statically typed language requires  you to spefify a value's data type before running the code in order for the compolier to know what types of data to expect.
However, JavaScript is a dynamically typed language, which means that the complier will have no clue what type of variable it's dealing with until it actually
evaluates a variable's assigment value and figures out what type it is */

typeof variable1;
//RESULT: "number"

typeof variable2;
//RESULT: "string"

typeof variable3;
//RESULT: "boolean"

/* So, why do you even need to know the data types in JavaScript? Without understanding the different data types you are assinging to your variables things can get confusing.
You may try to add combine variables together and you don't know why they are combining in the way that they are. For example: */

variable1 + variable2
// RESULT: 10some value

/* You tried to add a string and a number together but JavaScript has coerced the value of "variable1", which is a number, into a string and has concatenated (in other words,combined) those strings together into a single string.
This is an example of an implicit coercion of a variable type. Without understanding what different data types you are assinging to your variables, things may start to get confusing when combining different variables together */

const stringValue = 'hello world'; //using single quotes is valid
const anotherStringValue = "hello world"; // using double quotes are also valid

//However, the convention is that sting values are denoted by single quotes

const numberValue = 20; // To denote a number, just write the number without using quotations  
const numberValue2= 20,000; // Not valid. You need to write the number as one big number with no commas, etc

//A boolean value only has two possiable values, "true" or "false." For example: 

const booleanValue = true;
const anotherBooleanValue = false;

//An array is basically a list and with this list you may put in any data type you want
const firstArray = [10, 20, 30 ,40]; // An array is specified by "[   ]" and its values are separated by commas

const secondArray = [10, 'a string', { prop: 'slkdfsl' }, [1, 2]]; // An array can contain different data types and even include another array

// An array is indexed, which means that each of its values are identified by a single index and these indexes start at zero. You start at 0 and count your way up in order. For example:

const firstArray = [10, 20, 30 ,40]; // "10" has an index of 0, "20" has an index of 1, "30" has an index of 2, and "40" has an index of 3

//we can retrive these values from an array by typing out the array variable with brackets and using a value's index instead. For example:

const firstArray = [10, 20, 30 ,40]; // "10" has an index of 0

console.log(firstArray[0]);
// RESULT: 10

const secondArray = [10, 'a string', { prop: 'slkdfsl' }, [1, 2]]; // You can even grab values from nested arrays. "[1, 2]" has an index of 3 and "2" has an index of 1  

console.log(secondArray[3][0]) // Use bracket notation to retrive values from thier respective indexes  
// RESULT: 1

/* Think of objects in JavaScript as being a complex container. You can nest an infinte amount of containers within a container. Objects are denoted by "{}" and within an object you must give it properties. 
Properties are written just like a variable. You can think of them as being variables contained within the object. To create another property you must put a "," after the last property. 
It works simular to an array but you need to think of it as being a key value pair */ 

const objectVariable = { prop1: 20 , prop2: 50}; // "prop1" is the key and "20" is the value. Together they are a "key value pair"

objectVariable
// RESULT: Object { prop1: 20, prop2: 50 }

// To access properties within a object, we use dot notation. For example:

objectVariable.prop1
// RESULT: 20

//This can be infinitely nested (Think how folders and sub-folders behave). For example:

const nestedObject = { // "{  }" is what you enclose an object in
  layer1: {
    layer2: {
      layer3: {
        targetValue: 20 // "targetValue" is nested within several other properites 
      }
    }
  }
}

//Dot notation allows you to grab the values of the properites of the object. For example, to get the value of "targetValue":

nestedObject.layer1.layer2.layer3.targetValue; // This works similarly to how a file path works on a computer 
//RESULT: 20

objectVariable['prop1']; // Another way is to define the property you want to grab using bracket notation
//RESULT: 20

/* SUMMARY
- When using variable we first have to declare it and then assign it a value and this is often done is the same line of code

- Use the key word let whenever we want to reassign a variable's value and use const whenever we don't want to change a variable's value

- The left side of "=" represents the variable that will hold the value that you are assigning. The right side of "=" represents a variable's value   

- There are many ways to write a variable in JavaScript but camelcase is the preferred way

- There are five main types of variables:
  1) strings
  2) numbers
  3) booleans
  4) arrays
  5) objects

  - ";" represents the end of a JavaScript expression, except if you are using an object, in which case you can go down multiple lines  

















