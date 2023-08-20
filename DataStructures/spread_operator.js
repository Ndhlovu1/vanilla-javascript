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


