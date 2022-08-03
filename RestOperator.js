// * Rest Operation and spread operator has same syntax but works differently based on where we use it.Syntax: (...variableName)
// ? RestOperator:It is used to store the remaining(The rest) of some values in objects/Arrays
//? SpredOperator:It is used to store the spread the values of an iterable objects or array into individual elements separated by comma.

// ! Example for RestOperator

const array = [1, 2, 3, 4]
const [first, second, ...remaining] = array

console.log(first, second, remaining);