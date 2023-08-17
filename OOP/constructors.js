/*
    NATIVE OBJECTS : Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON etc

        Special functions that allow us to build the instances of these native objecs are known as CONSTRUCTORS
        All Constructors are CAPITALIZED

    USING A CONSTRUCTOR
        simply prepend it with the NEW KEYWORD 
        e.g new Data()
        
*/

//Calling the Date COnstructor
var today_date = new Date()
console.log(today_date)

//HOWEVER SOME NATIVE OBJECTS DONT COME WITH A CONSTRUCTOR

/*
    I CAN DECLARE CUSTOM CONSTRUCTORS

*/

function Icecream(flavor){
    this.flavor = flavor
    this.meltIt = function (){
        console.log(`The ${this.flavor} icecream has melted`)
    }
}

let kiwiIceCream = new Icecream("Kiwi")
let chocolatIceCream = new Icecream("Chocolate")

console.log(kiwiIceCream)
console.log(chocolatIceCream)

