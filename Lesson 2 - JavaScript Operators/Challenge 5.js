//What does "result" evaluate to?

const myobj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = 
  (myArray[0].price * myArray[0].quantity) >
  (myArray[1].price * myArray[1].quantity)
//RESULT: true

/*This is similar to challenge 4. We just need to remember how to access properties and values from objects and arrays. Read the solution from challenge 4 for a review.

Like challenge 4, we can go through each piece of the expression, figure out what it equals, and combine everything back together.
The only tricky part is how we have added each property (nestedObject1 and nestedObject2) from myObj to myArray.

So let's start simple. What would we get if we printed myArray[0] Well, we would get myObj.nestedObject1. So... What would we get if we printed that?

We would get this:*/

nestedObject1: {
  price: 100,
  quantity: 5
}

//To illustrate this, let's separate these out into separate variables

const myobj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity);

//Let's walk through each part of result and denote the values of each

myArray[0].price - evaluates to 100
myArray[0].quantity - evaluates to 5
myArray[1].price - evaluates to 150
myArray[1].quantity - evaluates to 2

//So really, our expression is simply 100 * 5 > 150 * 2, which can be further simplified to 500 > 300, which equals true