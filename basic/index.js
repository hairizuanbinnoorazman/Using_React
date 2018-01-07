/*
Trying out javascript functions and arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Useful methods:

Accessor methods
- concat
- includes
- indexOf

Iteration methods
- filter
- find
- findIndex
- map
- reduce

*/


var fruits = ['Apple', 'Banana']
console.log(fruits.length)
console.log(fruits[0])

fruits.forEach(function(item, index, array){
  console.log(item, index)
});

fruits.forEach((item, index, array) => {
  console.log(item, index)
});


// Splice

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
pos=1
n=2
var removedItems = vegetables.splice(pos, n)


// Filter

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'anime']
var result = words.filter((word) => {return word.charAt(0)==='e'})
console.log(result)

// Find
var words = ['anime', 'dog', 'cat']
var result = words.findIndex((element) => {return element === 'anime'})
console.log(result)

// Map
// Run a function on every single element
var words = ['anime', 'dog', 'cat']
var result = words.map((word) => {return word.concat("_miaoza")})
console.log(result)

// Reduce
// Combine values of array into by a function
var words = ['anime', 'dog', 'cat']
var result = words.reduce((accumulator, currentValue) => {return accumulator.concat(currentValue)})
console.log(result)

// Sort
// Sorting by providing a value
var words = [
  {id: 1, name: 'Test'},
  {id: 10, name: 'Edward'},
  {id: 3, name: 'Test1'},
  {id: 2, name: 'Test2'}
]
var result = words.sort((a, b) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0
})
console.log(result)
result = result.reverse()
console.log(result)
