//CREATING OBJECTS THAT ARE RELATED aka DICTIONARY

/*
    DECLARING A KEY-VALUE PAIR

        1. Declare a new variable and assign an object literal {} to it 
        2. Assign the values to each of the object's keys with an assignment = operator
        e.g. var user = {}
*/

// Dot Notation 
storeManager = {}
console.log("\n--MANAGER OBJECT--")
storeManager.rangeTilesPerTurn = 4
storeManager.socialSkills = 50
storeManager.streetSmarts = 50
storeManager.health = 30
storeManager.specialAbility = "Finding Business Opportunities"
storeManager.greeting = "Let's Make Some Mulaa"
storeManager.nextAchievement = "Open new store"

console.log(storeManager)

//Assistant Manager

console.log("\n--USER OBJECT--")

var user = {} // create an object named user

user = {
    age : 23,
    name : "Ndhlovu",
    location : "Windhoek, Namibia",
    education : "Software Engineering",
    institution : "Namibia University of Science and Technology"
}

console.log(user)
console.log("\n--BRACKETS NOTATION--")

//Using BRACKETS [] NOTATION
var house = {}
house['rooms'] = 4
house['color'] = "Black"
house['priceNAD'] = 325000

console.log(house)

console.log("\n--BRACKETS NOTATION 2--")
house['size'] = 500
console.log(house)

console.log("\n--BRACKETS NOTATION 3--")
house['color'] = "Blue"
house.rooms = 6
console.log(house)


console.log("\n--DECLARING IN NOTATION--")
var arrOfKeys = ['Speed', 'Altitude', 'Color']

var drone = {
    Speed : 100, Altitude : 350, Color : 'Purple'
}

for (var i = 0; i < arrOfKeys.length; i++){
    console.log(arrOfKeys[i] +" : "+drone[arrOfKeys[i]])
   
}

//console.log(drone["Speed"])






