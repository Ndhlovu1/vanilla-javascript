/*
    DEFENSIVE PROGRAMMING :
        PROGRAMMIN UNDER THE ASSUMPTION THAT ALL THE ARGUMENTS TO BE RECEIVED WILL BE OF THE WRONG TYPE, WRONG VALUE OR BOTH

        THIS MANNAER OF CODING WILL PREVENT ERRORS AS YOU WILL BE CODING WITH THIS MANNER OF THINKING
        "ALL THINGS THAT CAN GO WRONG WILL GO WRONG"

*/

// TASK 1 : ENSURE ALL ARGUMENTS SATISFY THE FOLLOWING
/*
    1. THE LENGTH OF THE WORD PARAMETER CAN'T BE LESS THAN 2
    2. THE LENGTH OF THE MATCH WORD MUST BE 1
    3. THE TYPE OF OF BOTH THE WORD AND THE MATH MUST BE STRING

*/

function letterFinder(word, match){

    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1

    if(condition1 == true && condition2 == true){

        for(i = 0; i<word.length; i++){
            if(word[i] == match){
                console.log("Found the Match for [",match,"] Position ",i)
            }
    
            else{
                console.log("-- No Match Found at : ",i)
            }
    
        }
    }

    else{
        console.log("Please pass the correct arguments to the function")
    }

    
}

//Passing Test
letterFinder("Ndhlovu",'u')
console.log()
//Failing Test
letterFinder((1,3))
var res;
console.log()
console.log(res)
console.log()
var str = "Hello"
str.match("jello")

console.log()
try {
    Number(5).toPrecision(300)
    
} catch (error) {
    console.log("Error")
    
}
