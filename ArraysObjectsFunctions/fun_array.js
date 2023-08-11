/*

    BASICS TO CREATING AN ARRAY 
    Array Literal Syntax [] 


*/


function listArrayItems(arr){

    for(var i = 0; i < arr.length; i++){
        console.log("Item", i+1 ,"-> ",arr[i])
    }

}

//Array Declarations
console.log("\nLOADING ...\n")
var train1 = ["wheat", " barley", "salt", "potatoes", "rocks"]
listArrayItems(train1);

console.log("\nLOADING ...\n")

var colors = ['red','orange','blue','black', 'purple',"pink"]
listArrayItems(colors);


