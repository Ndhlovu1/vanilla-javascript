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
const fruits = ["kiwi","mango","apple","pear",]

function appendIndex(fruit, index) {
    console.log(`${index}.${fruit}`)
    
}
fruits.forEach(appendIndex)

//Often we pass the array item directly into the call like
const vegies = ['onion','garlic','potato']
vegies.forEach(
    function(vegie, index){
        console.log(`-> ${index}.${vegie}`)
    }
)



