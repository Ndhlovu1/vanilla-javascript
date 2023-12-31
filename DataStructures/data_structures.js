/**
 * 
 *      LEARNING HOW TO USE OBECTS, ARRAYS, MAPS, SETS
 *  
 *      METHODS THAT WORK ON ARRAYS
 *          1. forEach
 *          2. filter
 *          3. map
 * 
 */


//ForEach() Allows you to loop over each of it's members
const fruits = ["kiwi","mango","apple","pear"]

function appendIndex(fruit, index) {
    console.log(`${index}.${fruit}`);
    
}
fruits.forEach(appendIndex)

//Often we pass the array item directly into the call like
const vegies = ['onion','garlic','potato'];
vegies.forEach(
    function(vegie, index){
        console.log(`-> ${index}.${vegie}`)
    }
)

//filter() filters array based on a specific test
const nums = [0,10,20,30,40,50,60];

nums.filter(function(num){
    return num > 30;
})

//MAPS - MAP EACH ARRAY ITEM OVER TO ANOTHER ARRAY'S ITEM BASED ON WHATEVER WORK IS PERFORMED INSIDE THE FUNCTION THAT IS PASSED-IN TO THE MAP AS A PARAMETER
//e.g.
//RUN IN THE BROWSER
// [0,10,20,30,40,50].map(
//     function(num){
//         return num / 10
// })
//Return Value will be an array of the answers

//USING OBJECTS WITH THE ForEach
// const result = []
// const drone = {
//     speed:100,
//     color:'yellow'
// }
// //RUN IN THE BROWSER
// drone.forEach(function(key){
//     console.log(key, ":",drone[key])
// })



//Maps - No Prototype and No Inheritance
new Map()

let bestBoxers = new Map()
bestBoxers.set(1,"The Champion")
bestBoxers.set(2, "The Runner-up")
bestBoxers.set(3, "The Third place")

console.log(bestBoxers)

//Getting a single item
bestBoxers.get(1);

//SETS - Unique Data Values
new Set()

const repFruit = ['apple','pear','apple','banana', 'apple','pear']

const uniqueFruit = new Set(repFruit)
console.log(uniqueFruit)