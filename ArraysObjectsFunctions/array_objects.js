
console.log("\n--Arrays are Objects--");

var fruits = []; //new array

fruits.push("apple");
fruits.push("mango");
fruits.push('pineaple');

console.log(fruits);
//Remove Pineapple
fruits.pop('pineaple');
//Load New Fruits
console.log(fruits);

//CREATE AN ARRAY FUNCTION

function arrayBuilder(one, two, three, four){
    var arr = [];

    arr.push(one);
    arr.push(two);
    arr.push(three);
    arr.push(four)

    return "\n--PROVIDED INFO\n",arr
}

var print = arrayBuilder("Associate Degree","iMBA", "Executive Job", "CIO/CTO/CEO")

console.log("\n"+print)

