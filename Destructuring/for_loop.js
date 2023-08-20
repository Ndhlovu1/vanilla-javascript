/*
    FOR LOOP
        1. CANT DIRECTLY WORK ON AN OBJECT BECAUSE OBJECTS ARE NOT ITERABLE
        
        HOWEVER ARRAYS ARE ITERABLE AND WE CAN USE THEM TO ITERATE OVER OBJECTS

            NB: 
                1. Object.keys() receives an object(the one we wanna loop over) as a parameter
                2. Object.values() receives an object and returns the Values of the Object

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
