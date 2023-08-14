/*

    TASK 1

*/

function addTwoNums(a, b){
 
     
   try {

        if(typeof(a) != 'number'){
            throw new ReferenceError("Error : The first value isn't a number")
        }
        else if(typeof(a) != 'number'){
            throw new ReferenceError("Error : The second value isn't a number")
        }
        else{
            console.log(a+" + "+ b+" = ",a+b)
        }

   } catch (error) {
        console.log("Erro!",error)
   }

 


}

addTwoNums(5,5)
addTwoNums("5",5)
addTwoNums(8,9)

console.log("It still works")
