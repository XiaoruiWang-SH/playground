"use strict";

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

// // filter
// function isBigEnough(value) {
//     return value >= 10
// }
// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered) // [ 12, 130, 44 ]

// const fruits = ["apple", "banaba", "grapes", "mango", "orange"]
// function filterItems(arr, query) {
//     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
// }
// console.log(filterItems(fruits, "BA")) // [ 'banaba' ]
// console.log(filterItems(fruits, "ap")) // [ 'apple', 'grapes' ]

// // slice
// const animals = ["ant", "bison", "camel", "duck", "elephant"]
// console.log(animals.slice(2)) // [ 'camel', 'duck', 'elephant' ]
// console.log(animals.slice(2, 4)) // [ 'camel', 'duck' ]
// console.log(animals.slice(1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
// console.log(animals.slice(-2)) // [ 'duck', 'elephant' ]
// console.log(animals.slice(2, -1)) // [ 'camel', 'duck' ]
// console.log(animals.slice()) // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

// // concat
// const array1 = ["a", "b", "c"]
// const array2 = ["d", "e", "f"]
// const array3 = array1.concat(array2)
// console.log(array3)

// const str1 = "abc"
// const str2 = "def"
// const str3 = str1.concat(str2)
// console.log(str3)

// const num1 = [1, 2, 3]
// const num2 = [4, 5, 6]
// const num3 = [7, 8, 9]
// const numbers = num1.concat(num2, num3)
// console.log(numbers)

// // flat
// // flat(depth)
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat())

// const arr2 = [0, 1, [2, [3, [4, 5]]]]
// console.log(arr2.flat())
// console.log(arr2.flat(2))
// console.log(arr2.flat(Infinity))

// // flatMap
// // flat(1)
// const arr = [1, 2, 1]
// const result = arr.flatMap((number) => number % 2 === 0 ? [number, number] : number)
// console.log(result)

// // toSorted
// const months = ["Mar", "Jan", "Feb", "Dec"]
// const sortedMonths = months.toSorted()
// console.log(sortedMonths)
// console.log(months)

// const values = [1, 10, 21, 2]
// const sortedValues = values.toSorted((a, b) => a - b)
// console.log(sortedValues) // [ 1, 2, 10, 21 ]
// const sortedValues2 = values.toSorted((a, b) => b - a);
// console.log(sortedValues2); // [ 21, 10, 2, 1 ]

// // toReversed
// const items = [1, 2, 3]
// console.log(items.toReversed())

// // find
// // return the first element that satifies the providing test function, otherwise return 'undefined'.
// const array = [5, 12, 8, 130, 44];
// const found = array.find((number) => number > 10);
// console.log(found); // 12

// const found2 = array.find((number) => number > 1000);
// console.log(found2); // undefined

// // findIndex
// const foundIndex = array.findIndex((number) => number > 10)
// console.log(foundIndex) // 1
// const foundIndex2 = array.findIndex((number) => number > 1000);
// console.log(foundIndex2); // -1

// // some
// const foundElement = array.some((element) => element % 2 === 0)
// console.log(foundElement) // true

// // every
// const satifiesAll = array.every((element) => element > 10)
// console.log(satifiesAll) // false

// // includes
// console.log(array.includes(12)) // true
// console.log(array.includes(10)) // false

// // indexOf
// console.log(array.indexOf(8)) // 2
// console.log(array.indexOf(8, 3)) //  -1

// // at
// console.log(array.at(2)) // 8
// console.log(array.at(-2)) // 130

// // reduce
// const array = [1, 2, 3, 4, 5]
// const initialValue = 0
// const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
// console.log(sumWithInitial) // 15

// console.log([1, 100].reduce((a, b) => Math.max(a, b), 50)) // 100

// // push
// // push a new element return length of new array
// const animals = ["pigs", "goats", "sheep"]
// const count = animals.push("cows")
// console.log(count) // 4
// console.log(animals) // [ 'pigs', 'goats', 'sheep', 'cows' ]

// animals.push("chickens", "cats", "dogs")
// console.log(animals)
// // [
// //   'pigs',     'goats',
// //   'sheep',    'cows',
// //   'chickens', 'cats',
// //   'dogs'
// // ]

// // pop
// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"]
// console.log(plants.pop()) // tomato
// console.log(plants) // [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]

// // shift
// const array = [1, 2, 3]
// const firstElement = array.shift()
// console.log(array)
// console.log(firstElement)

// // unshift
// const array = [1, 2, 3]
// console.log(array.unshift(4, 5)) // 5
// console.log(array) // [ 4, 5, 1, 2, 3 ]

// // splice
// // splice(start, deleteCount, item1, item2, ..., itemN)
// // return an array that contains all deleted elements
// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months.splice(1, 0, 'Feb')); // []
// console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

// console.log(months.splice(1, 2, 'May')); // [ 'Feb', 'March' ]
// console.log(months); // [ 'Jan', 'May', 'April', 'June' ]

// // sort
// // change the order in palce, return the reference to the same array, now sorted.
// const months = ["March", "Jan", "Feb", "Dec"]
// months.sort()
// console.log(months)

// // reverse
// // change in place, return the reference to the same array, now reversed.
// const array = ["one", "two", "three"]
// console.log("array", array)
// const reversed = array.reverse()
// console.log(reversed)  // [ 'three', 'two', 'one' ]
// console.log(array) //[ 'three', 'two', 'one' ]

// // Object.keys(o)
// const obj = {
//     name: "Ray",
//     ege: "35",
//     gender: "male",
//     nationality: "Chinese",
//     role: "software engineer"
// }
// console.log(Object.keys(obj)) // [ 'name', 'ege', 'gender', 'nationality', 'role' ]
// console.log(Object.values(obj)) // [ 'Ray', '35', 'male', 'Chinese', 'software engineer' ]
// console.log(Object.entries(obj))
// // [
// //   [ 'name', 'Ray' ],
// //   [ 'ege', '35' ],
// //   [ 'gender', 'male' ],
// //   [ 'nationality', 'Chinese' ],
// //   [ 'role', 'software engineer' ]
// // ]
// const entries = Object.entries(obj)
// console.log(Object.fromEntries(entries))


// // Object.assign()
// const target = { a: 1, b: 2 }
// const source = { b: 4, c: 5 }
// // const returnedTarget = Object.assign(target, source)
// // console.log(target) //  { a: 1, b: 4, c: 5 }
// // console.log(returnedTarget === target) // true
// const returnedTarget2 = { ...target, ...source }
// console.log(returnedTarget2)

// // Object.freeze()
// const obj = {
//     prop: 42
// }
// Object.freeze(obj)

// // obj.prop = 43 // error
// console.log(obj.prop)

// // Object.hasOwn()
// // return ture if the property is its own, not inherited
// const object = {
//     prop: "exists"
// }
// console.log(Object.hasOwn(object, "prop")) // true
// console.log(Object.hasOwn(object, "toString")) // false
// console.log(Object.hasOwn(object, "undeclaredPropertyValue")) // false

// // JSON.parse()
// // parse a string to an object
// const json = '{"result":true,"count":42}'
// const obj = JSON.parse(json)
// console.log(typeof obj)
// console.log(obj)

// // JSON.stringify()
// console.log(JSON.stringify({x: 5, y: 6}))

// // map
// const map = new Map()
// map.set("a", 1)
// map.set("b", 2)
// map.set("c", 3)
// console.log(map.get("a")) // 1
// console.log(map.has("b")) // true
// console.log(map.size) // 3
// map.delete("c")
// console.log(map.size) // 2

// set
const set = new Set([1, 1, 2, 3])
console.log(set) // Set(3) { 1, 2, 3 }