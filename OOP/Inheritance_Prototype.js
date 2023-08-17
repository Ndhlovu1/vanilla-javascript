/*
    PROTOTYPE : IS AN OBJECT THAT HOLDS PROPERTIES TO BE SHARED BY MULTIPLE OTHER OBJECTS
    INHERITANCE
*/

var bird = {
    hasWings : true,
    canFly : true,
    hasFeathers : true
}


// Object.create is used used when the superclass isnt a class - class syntax is preferred
var eagle1 = Object.create(bird)
console.log("Eagle1 :",eagle1)


console.log("\nEagle1 can fly :", eagle1.hasWings)
console.log("Eagle1 can fly :", eagle1.canFly)
console.log("Eagle1 has feathers :", eagle1.hasFeathers)


// Let's create a water bird
var skipper = Object.create(bird)

skipper.canFly = false
console.log("\nPengin Skipper :", skipper)
console.log("\nPengin has wings :", skipper.hasWings)
console.log("Pengin has feathers :", skipper.hasFeathers)
console.log("Pengin Skipper can fly :", skipper.canFly)

//let's create an Ostrich 
let ostrich = Object.create(bird)

ostrich.canFly = false
console.log("\nOstrich :", ostrich)
console.log("\nOstrich has wings :", ostrich.hasWings)
console.log("Ostrich has feathers :", ostrich.hasFeathers)
console.log("Ostrich Skipper can fly :", ostrich.canFly)

