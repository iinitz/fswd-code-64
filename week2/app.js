// console.log(1 === '1')

// const hello = (name = 'World') => {
//   console.log(`Hello, ${name}`)
// }
// hello(null)
// console.log(typeof undefined)
// console.log(typeof null)

// const sum = (type, ...numbers) => {
//   console.log(numbers)
// }
// const array = [1, 2, 3, 4, 5, 6]
// sum('', ...array)

// const func = (a, b, c = 5, d = 2) => {

// }
// func(1, 2, 3, 4)
// const func2 = ({ a, b, c = 5, d = 2, ...rest }) = {

// }
// func2({ a: 1, b: 2, c: 3, d: 4 })

// loop => array
const numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
// }
// const forEachFn = (value, index, array) => {
//   console.log(value, index, array)
// }
// numbers.forEach(forEachFn)
// const result = numbers.map((value) => {
//   if (value % 2 === 0) {
//     return 'Even'
//   }
//   return 'Odd'
// })
const isEven = (value) => {
  return value % 2 === 0
}
// const everyResult = numbers.every(isEven)
// console.log(everyResult)
// const someResult = numbers.some(isEven)
// console.log(someResult)

// let result = true
// for (let i = 0; i < numbers.length; i++) {
//   const value = numbers[i]
//   result = result && value % 2 === 0
// }
// console.log(result)
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

numbers.reduce
numbers.slice
numbers.findIndex
numbers.join
numbers.sort
