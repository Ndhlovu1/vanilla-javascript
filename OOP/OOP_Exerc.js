//OOP

var purchase1 = {
    tot_shoes :100,
    tot_shoeTax : 1.2,
    totalPrice: function(){
        var cal = this.tot_shoes * this.tot_shoeTax
        console.log("Final Price :", cal )
    }
}

purchase1.totalPrice()

