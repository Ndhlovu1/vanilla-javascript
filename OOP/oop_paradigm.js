/*
    BENEFITS OF OOP
        1. MAKES CODE MORE FLEXIBLE
        2. ALLOWS MODULAR CODE
        3. MAKES CODE REUSABLE

*/

//e.g. Class Creation
class Animal{

}
// INSTANTIATION OF Class ANIMAL Uses the Object.create() method
var myDog = Object.create(Animal)

console.log(Animal)

// A more common method of creating a class is to simply use the new className() method 
// When the new keyword is used Js implicitly calls the Object.create()

var myDog = new Animal()

 


