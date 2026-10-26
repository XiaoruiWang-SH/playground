strict: true;
// block scope
// { 
//     let x = 1
// }
// console.log(x)

// function declaration vs. function express vs. arrow function

// function f() {
//     return 'f'
// }

// let f1 = function () {
//     return 'f1'
// }

// let f2 = () => 'f2'

// console.log(f())
// console.log(f1())
// console.log(f2())

// rest parameters
// function f(a, ...args) {
//     let total = a
//     for (const e of args) {
//         total += e
//     }
//     return total
// }

// console.log(f(1, 2, 3, 4, 5))

// Optional chain
// const obj = {
//     name: 'obj',
//     dog: {
//         name: 'yolo',
//         ege: 5
//     }
// }

// console.log(obj.cat?.name) // undefined
// // console.log(obj.cat.name); // error

// console.log(obj.getName?.()); // undefined
// // console.log(obj.getName()); // error

// console.log(obj["cat"]?.["gender"]) // undefined
// // console.log(obj["cat"]["gender"]) // error

// // nullish operator (only left-hand side is `null` or `undefined` return right-hand side value)
// const a = 1
// const b = 2
// console.log(a ?? b) // 1

// const a1 = ''
// const b1 = 2
// console.log(a1 ?? b1) // ''

// const a2 = null
// const b2 = 2
// console.log(a2 ?? b2) // 2

// const a3 = undefined
// const b3 = 2
// console.log(a3 ?? b3) // 2

// const a4 = false
// const b4 = 2
// console.log(a4 ?? b4) // false

// template string
// const myName = 'Ray'
// console.log(`hello, my name is ${myName}.`);

// function getName() {
//     return 'Ray'
// }
// console.log(`Hello, my name is ${getName()}.`)

// destructuring
// destructure array according to position, destructure object according to name
// const obj = { a: 1, b: { c: 2 } };
// const {
//     a,
//     b: {c: d},
// } = obj
// console.log(a)
// // console.log(b) // error
// // console.log(c) // error
// console.log(d)

// const { a } = obj
// console.log(a)
// const { b: {d} } = obj
// console.log(d)
// const { c } = obj
// console.log(c)

// const array = [1, 2, 3, 4, 5, 6, 7]
// const [a, b, ...{ pop, push }] = array
// console.log(a) // 1
// console.log(b) // 2
// console.log(pop) // [Function: pop]
// console.log(push) // [Function: push]


// spread
// function myFunction(a, b, c, d) {
//     return a + b + c + d
// }

// const iterableObj = [11, 22]

// console.log(myFunction(1, ...iterableObj, 2))

// const aa = [1, ...iterableObj, '4', 'five', 6]
// console.log(aa)

// const obj = {
//     a: 1,
//     b: 2
// }
// console.log({...obj, key:'value'})

// typeof
// return a string that the elavated item belongs to
// console.log(typeof 100)  // number
// console.log(typeof 'aaa') // string 
// let u;
// console.log(typeof u) // undefined
// const aaa = null
// console.log(typeof aaa) // object

// function f() {
//     console.log('hello world.')
// }
// console.log(typeof f) // function

// const obj = {
//     a: 1,
//     b: 2
// }
// console.log(typeof obj) // object

// const s = Symbol.for('symbol')
// console.log(typeof s) // symbol

// instance of 
// object instanceof constructor
// test if constructor.prototype is present in object's prototype chain

// Array.isArray
// console.log(Array.isArray([]))
// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray({}));

// // map
// const numbers = [1, 2, 3, 4, 5]
// const mapped = numbers.map((x) => x * 2)
// console.log(mapped)

// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
// ]
// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value })) // the "key" is a computed property, should be wrriten in "[key]"
// console.log(reformattedArray)

// console.log(["1", "2", "3"].map(parseInt)) // [ 1, NaN, NaN ]
// console.log(['1', '2', '3'].map((x) => parseInt(x, 10))); // [ 1, 2, 3 ]
// console.log(["1", "2", "3"].map(Number)) // [ 1, 2, 3 ]

// const filteredNumbers = numbers.map((value, index) => {
//     if (index < 3) {
//         return String(value)
//     }
// })
// console.log(filteredNumbers) // [ '1', '2', '3', undefined, undefined ]

// // Calling map() on non-array objects
// const arrayLike = {
//     length: 3,
//     0: 10,
//     1: 20,
//     2: 30
// }
// console.log(Array.prototype.map.call(arrayLike, String));