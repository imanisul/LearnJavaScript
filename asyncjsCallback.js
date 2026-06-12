//  A callback is simply a function passed as an argument to another function, which is executed later.

// Real-Life Example: Ordering Food

// Imagine you order food at a restaurant.

// You place the order.
// The chef starts cooking.
// While waiting, you talk with friends.
// When food is ready, the waiter calls your name.

// That "calling your name when the food is ready" is like a callback.



function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet("Anisul", sayBye);






// function fetchData(callback){
//     setTimeout(() => {
//         callback("Data Recived")
//     },2000);
// }


// fetchData(console.log())
