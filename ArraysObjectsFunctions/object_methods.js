/*
    KEY-VALUE PAIRS THAT CARRY FUNCTIONS AS VALUES
*/

//Declare an Object Literal
var car = {};

//Normal K-P Values
car.name = "Porshe Panamera"
car.color = "Bright Red";
car.mileage = "20 000km";

//Object Method

//Object Method
car.price_details = function() {
    var cost = 45000
    var discount = 0.05
    var discount_values = discount*cost
    var final_price = cost - discount_values
    
    console.log("\tCAR COST : NAD "+cost)
    console.log("\tCAR DISCOUNT : "+discount)
    console.log("\tFINAL CAR COST : NAD "+final_price)
    

}

car.dealer_locations = function(){
    var dealer1 = {
        name : "Spes Bona",
        location : "Windhoek, Namibia",
        contact : 264812345678
    }

    var dealer2 = {
        name : "Walvis Porsche",
        location : "WalvisBay, Namibia",
        contact : 264819876543
    }

    var dealer3 = {
        name : "Porsche North",
        location : "Luderitz, Namibia",
        contact : 264813698527
    }




    console.log("\n--DEALER ONE DETAILS--")
    console.log("\tNAME : "+dealer1.name)
    console.log("\tLOCATION : "+dealer1.location)
    console.log("\tCONTACT "+dealer1.contact+"\n")

    console.log("\n--DEALER TWO DETAILS--")
    console.log("\tNAME : "+dealer2.name)
    console.log("\tLOCATION : "+dealer2.location)
    console.log("\tCONTACT "+dealer2.contact)


    console.log("\n--DEALER THREE DETAILS--")
    console.log("\tNAME : "+dealer3.name)
    console.log("\tLOCATION : "+dealer3.location)
    console.log("\tCONTACT "+dealer3.contact)


}


//console.log("--CAR OBJECT PROPERTIES--\n",car,"\n");

function porsche() {
    console.log("###################################")
    console.log("CAR NAME : ",car.name.toUpperCase())
    console.log("###################################")
    console.log("INFO:\nCAR PRICE DETAILS\n")
    
    car.price_details();
    console.log()  
   
    console.log("INFO:\nCAR DEALERSHIP DETAILS")
    car.dealer_locations()
    console.log("###################################")


}

porsche()







