/**
 * 
 *      Object.create() //Used to instantiate prototypes that are not classes
 * 
 * 
 */

const car = {
    engine : true,
    steering : true,
    speed : "slow"
}

const sportsCar = Object.create(car)
sportsCar.speed = "fast"
console.log("Sports Car Object :", sportsCar)


