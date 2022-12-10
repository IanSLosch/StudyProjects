// Write a function that accepts an array of integers
// the function should sort the array in ascending order
// and print the sorted array to the console
//
// Example input: [3, 4, 6, 14, 8]
// Example output: "3, 4, 6, 8, 14"

const integers = [19, 43, 15, 71, 8, 29]
function ascendingSort(a, b) {return a - b}
console.log(integers.sort(ascendingSort))