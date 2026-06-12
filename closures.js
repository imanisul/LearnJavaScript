//A closure is created when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

//Imagine your mother gives you ₹1000 pocket money before leaving for work.

// Mother leaves home
//       ↓
// You still have the money

// Even though your mother is gone, you can still use the money she gave you.

// Similarly:

// Outer Function finishes
//         ↓
// Inner Function still remembers variables

// This "remembering" behavior is called a Closure.

function outer() {

    let name = "Anisul";

    function inner() {
        console.log(name);
    }

    return inner;
}

const myFunction = outer();

myFunction();