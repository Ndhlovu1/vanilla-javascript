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


