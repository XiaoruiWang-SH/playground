// const n: number = 1

// function f(a: string, b?: number): boolean {
//     if (!b) {
//         return true;
//     }
//     return a.length > b
// }

// // arrow function
// const f = (a: string, b?: number) => {
//     if (!b) {
//         return true;
//     }
//     return a.length > b
// }

// console.log(f("aaa"));
// console.log(f("aaa", 2))
// console.log(f('aaa', 4));

// // interface
// interface User {
//     id: string;
//     name: string;
// }

// const user: User = {
//   id: '123456',
//   name: 'Ray',
// };
// console.log(user)

// // type
// type ID = string | number

// const id1: ID = 123;
// const id2: ID = "456"
// console.log(`id1: ${id1}, id2: ${id2}`)

// // Insection type
// // the insection type of two primative type is `Never`
// type Person = {
//     name: string
// }
// type Employee = {
//     employeeId: number
// }

// const staff: Person & Employee = {
//     name: "Ray Wang",
//     employeeId: 123456
// }
// console.log(staff)

// // as const
// const response = {
//     status: "success"
// } as const;
// console.log(typeof response.status)
// // response.status = "failure" // error, response.status is readonly

// const colors = ["red", "green", "blue"] as const;
// colors.push("white") // error, colors is readonly tuple
// console.log(colors)

// // optional type and readonly type
// interface Person {
//     readonly id: string;
//     gender: "Male" | "Female";
//     name?: string;
// }

// const aPerson: Person = {
//     id: "1349828394",
//     gender: "Male"
// }

// console.log(aPerson)
// aPerson.id = "78975098" // cannot rewrite it
// aPerson.name = "Ray"
// console.log(aPerson)

// // Array type
// const array1: number[] = [1, 2, 3]
// const array2: Array<string> = ["1", "2", "3"]

// array1.push(4)
// array2.push("4")
// console.log(array1)
// console.log(array2)

// // tuple type
// const aTuple: [number, string, boolean] = [1, "hello", false]
// aTuple[2] = true
// console.log(aTuple)

// // any
// let a: any = 1
// a.toUpperCase();
// a = "hello"
// a = false

// // unknown
// let b: unknown = "hello"
// // b.toUpperCase() // error
// if (typeof b === "string") {
//     b.toUpperCase();
// }
// console.log(b)

// // // void
// function logmessage(message: string): void {
//     console.log(message)
// }
// logmessage("hello ts.")

// // never
// function throwError(message: string): never {
//     throw new Error(message)
// }

// // x!
// const x: string | undefined = "hello";
// x!.toUpperCase()

// interface Employee {
//     id: string;
//     name?: string
// }

// const aEmployee: Employee = {
//     id: "ddddddddd",
//     name: "wang"
// }
// aEmployee.name?.toUpperCase()

// const aName: unknown = "wang" 
// const aAntherName = aName as string
// aAntherName.toUpperCase();
// console.log(aName)

// // satisfies
// type Config = {
//     theme: "light" | "dark";
//     retryCount: number;
// };
// const cfg = {
//     theme: "dark",
//     retryCount: 3,
// } satisfies Config

// console.log(cfg.theme)

// // index signature
// type User = {
//     [key: string]: string
// }

// const user: User = {
//     name: "rang",
//     gender: "male",
//     age: "20",
//     date: "2000-06-05"
// }

// console.log(user)

// type Car = Record<string, string>
// const car: Car = {
//     brand: "toyota",
//     model: "CHR",
//     color: "gray",
//     date: "2019-10-01"
// }
// console.log(car)

// // Generic contraints
// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
//     console.log(arg.length);
//     return arg;
// }

// const lengthwise: Lengthwise = {
//     length: 10
// }

// console.log(loggingIdentity(lengthwise))

// Discriminated union
type Message = { kind: "a", a: string } | { kind: "b", b: number }
function handleMessages(x: Message) {
    switch (x.kind) {
        case "a":
            console.log(x.a.toUpperCase())
            break;
    
        case "b":
            console.log(x.b.toFixed(2))
            break;
    }
}
handleMessages({ kind: "a", a: "hello" })
handleMessages({ kind: "b", b: 124 })
