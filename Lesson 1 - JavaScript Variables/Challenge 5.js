// Why does this code not work? Edit until it works

const myArray = [20 ,30 ,40];

console.log(myArray[3]);

//The above code is invalid because it attempts to print the value at index 3, but there is no index 3 in this array!

// Remember, arrays start their indexing at 0, so this array has the following index values:

const myArray = [20, 30 ,40]; // Index: 0 ,1 ,2

// And therefore, this is the correct way to write this program:

const myArray = [20, 30 ,40];

console.log(myArray[2]);