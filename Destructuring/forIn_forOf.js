// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yorgut', 'ice cream']

function logdairy(arr) {
    
    for (item in arr) {
        console.log(arr[item])
    }
}
logdairy(dairy)

// Task 2
const animal = {
    canJump : true
}

const bird = Object.create(animal)
bird.canFly = true
bird.hasFeathers = true

function birdCan(arr2) {
    
    for (feature of Object.keys(arr2)) {
        console.log(feature + ": "+arr2[feature])
    }

}
console.log()
birdCan(bird)

// Task 3
function birdCan2(arr2) {
    
    for (feature in arr2) {
        console.log(feature + ": "+arr2[feature])
    }

}
console.log()
birdCan2(bird)


