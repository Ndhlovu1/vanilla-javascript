/*

    SCOPE - WHAT CAN AND CANT BE ACCESSED

*/

//GLOBAL SCOPE - CODE OUTSIDE A FUNCTION
var name = "Ndhlovu1"

//LOCAL SCOPE - DECLARED INSIDE A FUNCTION OR TIED TO A VARIABLE
function details(){
    var person = {
        name : "Ndhlovu1",
        age : 23,
        degree : "Comp Sci."

    }

    return person
}

console.log(details.person)

