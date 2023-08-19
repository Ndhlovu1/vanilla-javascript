/*

    BASIC STYLING
        NB: THE CONSOLE LOG HAS SEVERAL METHODS THAT CAN BE FINE TUNED WHEN LOGGING
            METHODS OF LOGGING
            1. debug
            2. info
            3. log
            4. warn
            5. error

        NB: APPLYING CSS TO STYLE THE CONSOLE
            1. Use the %c directive

*/

//Single Text Styles
console.log("This is %cmy stylish message.",'color:yellow; background-color:blue;')

function consoleStyler(color, background, fontSize, txt) {
    
    var msg = "%c" + txt

    var style = `color: ${color};`

    style += `background: ${background};`

    style += `font-size: ${fontSize};`

    console.log(msg, style)

}

consoleStyler(`yellow`,`red`,`50px`,"You Rock, Mr Ndhlovu")

// Function with conditional Statements

var name = "Ndhlovu"
//console.log(typeof(name))


function celebrateStyler(reason){

    var fontStyle = `color: tomato;`;
    fontStyle += `font-size: 50px;`

    var birth = "birthday"
    var champ = "champions"
    var bmsg = "%c" + "Happy birthday"
    var cmsg = "%c" + "Congrats on the title!"
    var msg = "%c" + message

    if (typeof(reason)) {
            if (reason == birth) {
                console.log(bmsg, fontStyle)
                
            } else if(reason == champ){
                console.log(`%cCongrats on the title!`, fontStyle)                
            }
            else{
                console.log(reason, fontStyle)
            }        
    }

    else{
        console.log("Sorry please enter a string only")
    }
}

celebrateStyler("birthday");


console.log()
function styleAndCelebrate(){
   
    consoleStyler(`#ef7c8e`,`fae8e0`,`30px`,"You made it!")

    celebrateStyler("champions")
}

styleAndCelebrate()




