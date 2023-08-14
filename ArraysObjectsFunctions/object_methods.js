/*
    KEY-VALUE PAIRS THAT CARRY FUNCTIONS AS VALUES
*/

//Declare an Object Literal
var car = {};

//Normal K-P Values
car.color = "Bright Red";
car.mileage = "20 000km";


//Object Method

//Object Method
car.price_details = function() {
    var cost = 45000
    var discount = 0.05
    var discount_values = discount*cost
    var final_price = cost - discount_values
    car.name = "Porshe Panamera"

    console.log("CAR NAME : ",car.name)
    console.log("CAR COST : NAD "+cost)
    console.log("CAR DISCOUNT : "+discount)
    console.log("FINAL CAR COST : NAD "+final_price)
    

}


console.log("--CAR OBJECT LITERAL--\n",car,"\n");

car.price_details();


