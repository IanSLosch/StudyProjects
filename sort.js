// Write a function that accepts an array of integers
// the function should sort the array in ascending order
// and print the sorted array to the console
//
// Example input: [3, 4, 6, 14, 8]
// Example output: "3, 4, 6, 8, 14"
// Can't use Sort

/*
const integers = [19, 43, 15, 71, 8, 29]
function ascendingSort(a, b) {return a - b}
console.log(integers.sort(ascendingSort).join())
*/
const input = [3, 4, 6, 14, 8]
/*
function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  const output = bubbleSort(input)
*/

function bubbleSort(array) {
  let done = false
  while (!done) {
    done = true
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false
        var tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp;
      }
    }
  }

  return array

}
function arrayToString(arr) {
  let str = '';
  arr.forEach(function(i, index) {
    str += i;
    if (index != (arr.length - 1)) {
      str += ', ';
    };
  });
  return str;
}

console.log(`"${arrayToString(bubbleSort(input))}"`)