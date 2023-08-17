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

