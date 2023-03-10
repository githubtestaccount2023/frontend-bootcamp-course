//Do the following two blocks of code result in the same answer? If not, which one would you recommend using and why?

//========== SNIPPET 1 ==========

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

//========== SNIPPET 2 ==========

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);

//No, they do not result in the same answer. The first code block will evaluate to false while the second code block will evaluate to true

//Which one is better? Well that's a bit of a trick question. When looking at this code, there is no reason why secondNumber should be a string data type. Here is how I would write this:

const firstNumber = 20;
const secondNumber = 20;

const result = firstNumber === secondNumber;

console.log(result);

