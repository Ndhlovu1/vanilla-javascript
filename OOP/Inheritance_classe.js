/**
 * 
 * This is an exercise on using basic inheritance to alter child class behaviours
 * 
 * CLASSES CAN ALSO HAVE METHODS WHICH CAN BE SHARED BY THE FUTURE INSTANCES OF THE TRAIN CLASS
 * 
 */

// As Always Inheritance is based on the PROTOTYPE OBJECT

class Train{

    //First piece of code must always be the constructor
    constructor(color, lightsOn){
        this.color = color
        this.lightsOn = lightsOn
    }    

    toggleLights (){
        console.log("Switch Light", !this.lightsOn)
        
    }

    lightsStatus(){
        console.log("Lights On?", this.lightsOn)
    }

    getSelf(){
        //Prints out the properties on the objext instance it is called on
        console.log(this)
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
    
}

/**
 * THE ABOVE IS ALL YOU NEED TO ACHIVE :
 *  1. Build new instances of the Train class
 *  2. Each object Instance of Train will have color and lightsOn
 *  
 */

let myFirstTrain = new Train('red', false)
console.log("Train 1 Color :",myFirstTrain.color)
console.log("Train 1 LightsOn :", myFirstTrain.lightsOn)
console.log()
//Train manipulating the methods
var train2 = new Train('green', true)
train2.lightsStatus()
console.log()
train2.toggleLights()
train2.lightsStatus()
train2.getSelf()
train2.getPrototype()


