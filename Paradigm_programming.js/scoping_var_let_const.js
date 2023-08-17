/*

    SCOPE - CODE ACCESSIBILITY BY DIFFERENT PARTS OF THE PROGRAM

        1. GLOBAL SCOPE : All code outside a function
        2. LOCAL SCOPE  : All code accessible from within the function it is declared
        
    ES5  Js     : Only Functions can build localscope
    ES6  Js     : Block Scope, a var declared in a code is only accessible inside of it
                   
        1. let Keyword : Can't be used before it is declared, It cant be redeclared, it is scoped to the block even within if statements  
        2. const Keyword : Can't be used before it is declared, It cant be redeclared, it is scoped to the block even within if statements 
        3. var keyword : can be used before declared, same variable can be redeclared, can be scoped to a function or globally often used in ES5

    NB : WHEN TO USE THE VAR, LET OR CONST
            1. Use let if the value might change in the future
            2. Use const if the value will never change

*/

/*

    VAR KEYWORD : Can be used before initialization anywhere within the code as long as it is eventually initialized
        MOST LINIENT

*/

//e.g
    //Should print a Reference error if it isnt created
    console.log(user)

    //assign it to var and it will print undefined with no error
    var user;

    //Declare and redeclare
    var user = "Sultan"
    var user = "Ndhlovu"

    console.log(user)


/*

    let KEYWORD : Cant be used before initialization anywhere within the code
        MEDIUM LINIENT

*/

//e.g
    //Cant be accessed before being initialized
    //e.g Will give an error
    //console.log(user1)
    //let user1;

    
    //e.g. 2 will print undefined with no error
    let user1;
    console.log(user1)

    //we cant redeclare a let variable
    //let user1 = "Phoenix"

    //e.g 3 We can re-assign it
    user1 = "Phoenix"
    console.log(user1)

    user1 = "Sultan Ndhlovu"
    console.log(user1)

/*

    Const KEYWORD : Strict var
        MOST STRICT OF ALL 3

*/

//e.g error if attempt to use before declaring
//    console.log(user3)
//    const user3;

//e.g 2 cant be used before initialization
//    console.log(user3)
    const user3 = "Phx"

//e.g. 3 cant be redeclared
    //const user3 = "Ndhlovu"

    console.log(user3)


function name() {
    var localVar = 88
}

//console.log(localVar)

function meal(animal){
    animal.food = animal.food + 10
}

var dog = {
    food : 10
}


meal(dog)
meal(dog)

console.log(dog.food, dog)

function two() {
    return 2
}

function one() {
    return 1
}

function calculate(initial, increment) {
    return initial() + increment() + increment()
}

console.log(calculate(two, one))
