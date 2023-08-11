/*

    BUILT IN MATH OBJECTS

    NUMBER CONSTANTS

        1. Math.PI - 3.14159
        2. Math.E - 2.718
        3. Math.LN2 - 0.693

    ROUNDING METHODS

        1. Math.ceil() - Rounds up to the closest Integer
        2. Math.floor() - Rounds down to the closest Integer
        3. Math.round() - Rounds up to the closest integer if the decimal is .5 or above, else rounds down
        4. Math.trunc() - Trims the decimal, Leaves only the integer

    ARITHMETIC AND CALCULUS METHODS 

        Math.pow(2,3) - Calculates the 2 to the power of 3, the result is 8
        Math.sqrt(16) - Calculates the square root of 16, 4
        Math.cbrt(8)  - Finds the cube root of 8, the result is 2
        Math.abs(-10) - Returns the absolute value, the result is 10
        Math.log(), Math.log2(), Math.log10() - Logarithmic Methods
        Math.min(8,10,23) - Returns the Minimun of all values 8
        Math.max(9, 8, 7) - Returns the Maximum of all values 9

*/


//Math Random
Math.random();

var decimal = Math.random();
console.log(decimal)
console.log(decimal * 10)

//Math.ceil

var rounded1 = Math.ceil(decimal);
console.log(rounded1)

var r = Math.ceil(0.5)
console.log(r)

r = Math.ceil(1.01)
console.log(r)

r = Math.ceil(2.99)
console.log(r)

r = Math.ceil(4.05)
console.log(r)











