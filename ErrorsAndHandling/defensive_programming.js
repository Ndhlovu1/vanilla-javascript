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
    for(i = 0; i<word.length; i++){
        if(word[i] == match){
            console.log("Found the Match for [",match,"] at '",i,"'")
        }

        else{
            console.log("-- No Match Found at : ",i)
        }

    }


}

