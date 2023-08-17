/** 
 * 
 *  e.g

        1. There is a class called Bird
        2. There is a class inheriting from Bird and this class is called Eagle
        3.  There is a class inheriting from Bird and this class is called Penguin
*/


class Bird{
    useWings() {
        console.log("Bird is Flying")
    }

}


class Eagle extends Bird{
    useWings(){
        //super.useWings()
        console.log("Eagle's Soar")
    }
}


class Penguin extends Bird{
    useWings(){
        //super.useWings()
        console.log("Penguins Swim")
    }
}

class Parrot extends Bird{
    useWings(){
        super.useWings() // Inherit the direct usage of the useWings()
    }
}

var baldEagle = new Eagle()
var kingPenguin = new Penguin()
var pirat = new Parrot()

pirat.useWings()
baldEagle.useWings()
kingPenguin.useWings()


