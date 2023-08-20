// Task 1

function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream','milkshake']
    
    for (item of Object.keys(dairy)) {
        return dairy[item]
    }
}

logDairy()

// Task 2

function birdCan() {

    const animal = {
        canJump : true
    }

    const bird = Object.create(animal)
    bird.canFly = true
    bird.hasFeathers = true

    
    for (feature of Object.keys(bird)) {
        console.log(feature + ": "+bird[feature])
    }

}

birdCan()

// Task 3
function animalCan() {

    const animal = {
        canJump : true
    }

    const bird = Object.create(animal)
    bird.canFly = true
    bird.hasFeathers = true

    
    for (feature in bird) {
        console.log(feature + ": "+bird[feature])
    }

}
animalCan()


