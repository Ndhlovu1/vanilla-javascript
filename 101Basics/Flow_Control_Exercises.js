/*

    EXERCISE 1

*/

var age = 23

if (age >= 65) {
    console.log("Age is : "+age+"years old and "+"You get your income from your pension")
} 

else if(age < 65 && age >= 18){
    console.log("Age is : "+age+"years old and "+"Each month you get your salary")
}

else if(age < 18){
    console.log("Age is : "+age+"years old and "+"You get an allowance")
}

else{
    console.log("The value is not numerical")
}

/*

    EXERCISE 2

*/

var day = "Thursday"

switch (day) {
    case "Monday":
        console.log("Do Something on "+day)
        break;

    case "Tuesday":
        console.log("Do Something on "+day)
        break;

    case "Wednesday":
        console.log("Do Something on "+day)
        break;

    case "Thursday":
        console.log("Do Something on "+day)
        break;   

    case "Friday":
        console.log("Do Something on "+day)
        break; 

    case "Saturday":
        console.log("Do Something on "+day)
        break;

    case "Sunday":
            console.log("Do Something on "+day)
    break;    
    
    default:
        console.log("Sorry Stick to Your Phone Week Days!")
        break;

}
