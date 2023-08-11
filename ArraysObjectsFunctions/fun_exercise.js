/*

    TASK 1

*/


function letterFinder(word, match){
    console.log("GIVEN WORD IS '"+word+"' and GIVEN LETTER IS '"+match+"'\n")
    for(var i = 0; i < word.length; i++){

        if(word[i] == match){
            console.log("Found Match For '" + match+ "' At Position ["+i+"]")
        }
        else{
            console.log("No match found at Position ["+i+"]")
        }

    }

}

var w = "Tinomudaishe Ndhlovu"

letterFinder(w, 'o');

