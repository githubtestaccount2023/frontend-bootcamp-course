//Why is this code invalid? Edit this until it is valid

const objectVariable = { 
  property1: 'i am property 1';
  property2: 'i am property 2';
  property3: [20 ,30 ,40]
};

console.log(objectVariable.property3[2]);

// The code above is invalid because it contains semi-colons ; in the wrong places. When creating objects, you need to place a comma after each object, NOT a semi-colon.

// Here is the fixed program that will properly run in your Console.

const objectVariable = { 
  property1: 'i am property 1',
  property2: 'i am property 2',
  property3: [20 ,30 ,40]
};

console.log(objectVariable.property3[2]);





