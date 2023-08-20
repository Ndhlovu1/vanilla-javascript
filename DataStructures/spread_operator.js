/**
 * 
 *      SPREAD OPERATOR
 *          NB: Used with ...array_name to expand your options
 * 
 *      REST OPERATOR - DESTRUCTURING
 *          NB: Used to limit the options at your disposal aka boxing by creating a subarray
 *             
 * 
 */

// USING SPREAD AND REST
/*
    TASKS
        1. Add new members to array without using push() method
        2. Convert string to an array
        3. Copy either an object or an array into a seperate object
 
*/

const fruits = ['apple','pear','plum']
const berries = ['blueberry','strawberry']
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries)

//Joining Objects
const flying = {wings : 2}
const car = {wheels: 4}
const flyingCar = {...flying, ...car}
console.log(flyingCar)

//Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


//Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

