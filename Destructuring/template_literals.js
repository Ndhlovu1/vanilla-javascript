/**
 * 
 *      A 3rd Way to deal/create with Strings
 * 
 */

//DIFFERENCE BETWEEN A TEMPLATE LITERAL AND A REGULAR STRING
let greet = "Hello"
let place = "World"

//Both values can be displayed using template literals
console.log(`${greet} ${place}!`)

//Template literals can span multiple lines which cant be done by the prior two string creation methods
let test = `
    Hello
    Mr
    Ndhlovu
`

console.log(test)

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 


