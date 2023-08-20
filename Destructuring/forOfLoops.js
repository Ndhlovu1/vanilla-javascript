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


//Using a For in methodnot reliable as it shows whats on the Prototype
console.log("--For in Loop--")
for(prop in sportsCar){
    console.log(prop)
}

//Loops only over values in the Object not the prototype
console.log("\n--For of Loop--")
for(item of Object.keys(sportsCar)){
    console.log(prop+ " : "+ sportsCar[item])
}

 