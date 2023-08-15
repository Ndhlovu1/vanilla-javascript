/*

    FUNCTIONAL PROGRAMMING
        1. Being able to return custom values is one of the foundations of functional programming
        2. Having multiple calls, returning data alows for manipulating valuess

*/


var currOne = 100
var currTwo = 0
var exchangeRate = 1.2

function convertCurrency(amount, rate){
    return "Ammount : Nad " + amount * rate

}

currTwo = convertCurrency(currOne, exchangeRate)

console.log(currTwo)

// THE CONSOLE LOG GETS AND SETS THE DEFAULT RETURN VALUE SINCE IT'S BUILT TO NOT EXPLICITLY DECLARE IT
// e.g 
function consoleLog(val){
    
    console.log("Result : ",val)
    return val
}

consoleLog("Hi")

// This is useful because it is logged and returned
function doubleIt(num){
    return num * 2
}

function objectMaker(val){
    return {
        prop : val
    }
}


var res = objectMaker(doubleIt(100).toString())

console.log(res)
