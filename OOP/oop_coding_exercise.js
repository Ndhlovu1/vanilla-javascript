// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy        
    }

    sleep() {
        this.energy += 10
        return this.energy
    }

    doSomethingFun() {
        this.energy -= 10
        return this.energy
    }


}


// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name,age,energy,xp = 0, hourlyWage = 10) {
        super(name,age,energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
        
    }

    goToWork() {
        this.xp += 10
        return this.xp
    }


}

// Task 3: Code an intern object, run methods
function intern() {
    var intern1 = new Worker("Bob", 21, 110,0,10)
    
    intern1.goToWork()
    console.log(intern1,"\n")
    
    return intern1
}

intern()


// Task 4: Code a manager object, methods
function manager(){
    var man = new Worker("Alice",30,120,100,30)
    
   
    man.doSomethingFun()
    console.log(man)

    return man   
}


manager()