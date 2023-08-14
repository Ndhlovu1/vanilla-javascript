/*
 
    Error Types and Handling

*/


try{
    a + b
}
catch(error){
    console.log("Error Identified")
    //console.log("------------------------")
    //console.log(error)
    console.log("------------------------")
    console.log("Error has been saved to the error log")
}


/*
    TYPES OF ERRORS

*/

function syntax_logical_runtime_errors() {


console.log("___________________________________________________________________")


console.log("######### TYPES OF ERRORS ####################\n")
    
    var ref_error = "\nREFERENCE ERROR : USED WHEN AN ATTEMPT TO USE A NON EXISTING VARIABLE IS MADE\ne.g.\n"
    console.log(ref_error)
    //console.log(username)
    console.log()
    var syn_error = "\nSYNTAX ERROR : OCCURS WHEN INVALID JAVASCRIPT IS USED\ne.g\n"
    console.log(syn_error)
    //var a "This is an error"
    console.log("\nTypeError : WHen running the expected data type is different to the provided data type")
    console.log("\nRangeError : Occurs when a value is given to a function but that value is outside the acceptable range\n")
    //Base 2 System converting to binary
    console.log((44).toString(2))
    //Base 8 
    console.log((10).toString(8))

    console.log("########################## ERRORS ##############")

    console.log("1. REFERENCE ERROR\t\t2. SYNTAX ERROR\n3. TYPE ERROR \t\t\t4.RANGE ERROR")

    console.log("5. AGGGREGATE ERROR\t\t6. ERROR\n7. INTERNAL ERROR \t\t8.URI ERROR")

    

    console.log("########################## THE END #############")

}

syntax_logical_runtime_errors()
