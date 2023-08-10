/*

FLOW CONTROL STATEMENTS
    1. IF - ELSE STATEMENTS
    2. SWITCH STATEMENTS

*/

// IF - ELSE STATEMENTS

/* 
    BEST SUITED WHEN THERE IS A BINARY CHOICE IN THE CONDITION
    e.g. if it's sunny wear sunglasses

    NB: USE THEM WHEN THERE ARE SMALLER NUMBERS OF POSSIBLE OUTCOMES OF TRUTH CHECKS. THEN WE USE AN IF ELSE

*/

var light = "red"

console.log("--THE IF-ELSE STATEMENT--")
if (light == "green") {
    console.log("Drive\n")
} 
else if(light == "orange") {
    console.log("Get Ready\n")    
}
else if(light == "red"){
    console.log("Don't Drive\n")
}
else{
    console.log("Robot is damaged\n")
}

/*
    HOWEVER IF THERE ARE A LOT OF POSSIBLE OUTCOMES, BETTER USE A SWITCH STATEMENT:
    1. It is less verbose
    2. Easier to read
    3. Easier to follow logic
    4. Reduces cognitive load or reading multiple lines

    However this is only a stylistic choice

*/

// RECREATE THE ABOVE CODE
console.log("--THE SWITCH STATEMENT--")

switch (light) {
    case "green":
        console.log("Drive Through\n")
        break;
    case "orange":
        console.log("Prepare to Wait\n")
        break;
    case "red":
        console.log("Do not Drive\n")
        break;
    default:
        console.log("The Robot is Broken, Report for repairs\n")
        break;
}

