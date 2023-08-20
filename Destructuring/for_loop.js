/*
    FOR ( var color OF colors ) LOOP
        1. CANT DIRECTLY WORK ON AN OBJECT BECAUSE OBJECTS ARE NOT ITERABLE
        
        HOWEVER ARRAYS ARE ITERABLE AND WE CAN USE THEM TO ITERATE OVER OBJECTS

            NB: 
                1. Object.keys() receives an object(the one we wanna loop over) as a parameter and returns the Keys of the object
                2. Object.values() receives an object and returns the Values of the Object
                3. Object.entries() receives an object and returns the Key-Values of the object

*/

//e.g Object.keys
const car = {
    speed: 200,
    color : "red"
}
//Passing the objext returns an array of the keys and not the values
console.log(Object.keys(car))

const car2 = {
    speed : 400,
    color : "yellow"
}

console.log(Object.values(car2))

//Passing into Object.entries() - Returns an Array of Arrays
const car3 = {
    speed : 600,
    color: "maroon"
}

console.log(Object.entries(car3))

//Looping over an object's Keys and Values
var clothes = {
    price: 50,
    color: 'beige',
    material : 'cotton',
    season : 'autom'
}

//Looping over an entire object
for(key of Object.keys(clothes)){
    console.log(key, ":", clothes[key])
}

//Dynamically Accessing either the Key or Value
function dynamicTest() {
    var dynamicKey;

    if(Math.random() > 0.5){
        dynamicKey = "speed"
    }
    else{
        dynamicKey = "color"
    }

    var drone = {
        speed : 15,
        color: "red"
    }
    console.log(drone[dynamicKey])
    
}

dynamicTest()
