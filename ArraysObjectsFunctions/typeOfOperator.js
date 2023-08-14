/*
    AN OPERATOR USED TO DISCOVER THE TYPE OF THE VALUE RECEIVED
*/

console.log("TYPE OF CHECKS AND OUTPUTS")
console.log("-------------------------\n")

var sentence = "I am a sentence."
var int_num = 44
var amount = 44.10
var yes_or_no = true
var comparison = 1 > 4
var arr = [1,2,'name',9]
var dict_object_literal = {names : 'Tinomudaishe Ndhlovu'}
var func_test = function abc(){
    console.log('abc')
}

console.log(sentence, " : ", typeof(sentence))
console.log(int_num, " : ", typeof(int_num))
console.log(amount, " : ", typeof(amount))
console.log(yes_or_no, " : ", typeof(yes_or_no))
console.log(comparison, " : ", typeof(comparison))
console.log(arr, " : ", typeof(arr))
console.log(dict_object_literal, " : ", typeof(dict_object_literal))
console.log(func_test, " : ", typeof(func_test))
