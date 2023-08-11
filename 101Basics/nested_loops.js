/*

    NESTED LOOPS ARE USED TO PROCESS DATASET A WHILE PROCESSING DATASET B
    Use the ForLoop

    PRINT OUT THE FOLLOWING :
        WEEK 1 - MON
        WEEK 1 - TUE
        WEEK 1 - WED
        WEEK 1 - THU
        WEEK 1 - FRI

        WEEK 2 - MON
        WEEK 2 - TUE
        WEEK 2 - WED
        WEEK 2 - THU
        WEEK 2 - FRI

*/


console.log("--TWO WEEK PLAN--")
for(var i = 1; i <= 2; i++){ //This will run the the first time
    console.log()
    for(var j = 1; j <= 5; j++){ //This will run until the condition is false then set return to the outer loop
        console.log("Week "+i+" day "+ j)
    }

} 

console.log("\n--CALENDER--")

for(var year = 2023; year <= 2025; year++){
    console.log()
    for(var month = 6; month<= 12; month++){
        console.log("Year : "+year+" - Month : "+month)
    }

}

console.log("\n--MULTIPLICATION TABLE--\n")

for(var i = 1; i <= 4; i++){
    console.log("MULTIPLES OF "+i+"\n")
    for(var j = 1; j <= 10; j++){
        console.log(i + " * "+ j +" =",i*j)
    }

}


console.log("\n--DIVISION TABLE--\n")

for(var i = 100; i > 10; i = i -10){
    console.log("DIVIDING : "+i)
    for(var j = 10; j > 4; j = j-5){
        console.log(i+" / "+j+" =", i/j)
    }
}

//Run in a browser
var cubes = 'ABCDEF'

for(var i = 0; i < cubes.length; i++){

    var styles = "font-size:40px; border-radius:10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c"+cubes[i], styles)

}