/*
    FOR LOOP
        1. CANT DIRECTLY WORK ON AN OBJECT BECAUSE OBJECTS ARE NOT ITERABLE
        
        HOWEVER ARRAYS ARE ITERABLE AND WE CAN USE THEM TO ITERATE OVER OBJECTS

            NB: 
                1. Object.keys() receives an object(the one we wanna loop over) as a parameter
                2. 

*/

//e.g Object.keys
const car = {
    speed: 200,
    color : "red"
}
console.log(Object.keys(car))
