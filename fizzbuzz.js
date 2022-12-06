// Write a function that accepts a number
// If the number is evenly divisible by 3, console log "Fizz"
// If the number is even divisible by 5, console log "Buzz"


Note:

var fizz = (input) => 
  Number.isInteger(input / 3) ? console.log('Fizz!') : null
const buzz = (input) => 
  Number.isInteger(input / 5) ? console.log('Buzz!') : null
let fibu = (tryMe) => {
    fizz(tryMe)
    buzz(tryMe)
} 
fibu(15)

