/**
 *  POLYMORPHISM : SOMETHING THAT CAN TAKE MANY SHAPES/FACES
 *  
 *      e.g
 *          1. A Bicyle has a bell that is rung to warn people they are coming
 *          2. A house door has a bell to get someone to come to the door
 * 
 * 
 */

//Coded examples

const bicycle = {
    bell: function() {
        return "Ring, Ring! Please look out!"
    }

}

const door = {
    bell : function () {
        return "Ring, ring! Please come to the door."
    }

}

// POLYMORPIC IMPLEMENTATION - PRODUCING DIFFERENT RESULTS BASED ON THE CONTEXT IT IS USED

function ringTheBell(thing){
    //Expect the parameter to be an object
    console.log(thing.bell())
}

//Run the single method and pass on the object
ringTheBell(bicycle)
ringTheBell(door)

