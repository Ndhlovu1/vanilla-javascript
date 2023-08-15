/*
    REPEATING TASKS ARE USEFUL BUT MUST BE STOPPED
        1. Creating Recursions and 
        2. Avoiding infinite loops

*/

//EXAMPLE 1 - WIll run non stop
// function runInfinite(){
//     console.log("Line 1")
//     console.log("Line 2")
//     console.log("Line 3")

//     runInfinite()
// }

// runInfinite()

// Updated Case, but with Recursion
let counter = 5

function runfinite(){
    console.log("Line "+counter)
    counter = counter -1
    
    if(counter === 0) {
        return;//end call, also, this is our base case
    }

    runfinite() // A function that calls itself

}

runfinite()

