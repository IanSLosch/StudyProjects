// Write a function that accepts a number
// If the number is evenly divisible by 3, console log "Fizz"
// If the number is even divisible by 5, console log "Buzz"

/*

let input = ()
const fizz = Number.isInteger(input/3) ? 'fizz' : ''
const buzz = Number.isInteger(input/5) ? 'buzz' : ''
console.log(`${fizz}${buzz}`)

*/

let fb = (i) => {
  console.log((i % 3 ? 'fizz' : '') + (i % 5 ? 'buzz' : ''))
}
fb(15)