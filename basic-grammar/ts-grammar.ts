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

// // Discriminated union
// type Message = { kind: "a", a: string } | { kind: "b", b: number }
// function handleMessages(x: Message) {
//     switch (x.kind) {
//         case "a":
//             console.log(x.a.toUpperCase())
//             break;

//         case "b":
//             console.log(x.b.toFixed(2))
//             break;
//     }
// }
// handleMessages({ kind: "a", a: "hello" })
// handleMessages({ kind: "b", b: 124 })

// type User = [name: string, age: number, active: boolean];

// const user: User = ['Ray', 23, false];
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);

// type UserLength = User["length"];
// // console.log(typeof UserLength);

// interface User {
//     id: number;
//     name: string;
//     email?: string;
//     readonly createdAt: Date;

//     greet(): void
// }

// type User = {
//     id: number;
//     name: string;
//     email?: string;
//     readonly createdAt: Date;

//     greet(): void
// }

// const user: User = {
//     id: 1,
//     name: "Tom",
//     createdAt: new Date(),

//     greet() {
//         console.log(`Hello, ${this.name}`);
//     },
// }

// user.greet();

// interface User {
//     id: number;
//     name: string;
// }

// type Admin = User & {
//     persissons: string[];
// }

// const admin: Admin = {
//     id: 1,
//     name: "Tom",
//     persissons: ["read", "write"]
// }

// type Brand<B, T extends string> = B & {
//   readonly __type: T;
// };

// interface Car {
//   name: string;
//   price: number;
// }

// interface Phone {
//   name: string;
//   price: number;
// }
// const car: Brand<Car, 'car'> = {
//   name: 'Toyoto',
//   price: 300000,
//   __type: 'car',
// };

// const iphone: Brand<Phone, 'iphone'> = {
//   name: 'iphone',
//   price: 8000,
//   __type: 'iphone',
// };

// type A = string & number; // never

// type B = { name: string } & { price: number };

// const b: B = {
//     name: "Tom",
//     price: 123,
// }

// console.log(b.name);
// console.log(b.price);

// type RouteConfig = {
//     path: string;
//     method: "GET" | "POST";
// };

// const config = {
//   path: 'users',
//   method: 'GET',
// } as const satisfies RouteConfig;

// console.log(typeof config.path);
// console.log(typeof config.method);

// // TypeScript typeof
// type Path = typeof config.path;     // "users"
// type Method = typeof config.method; // "GET"

// const routes = {
//     users: {
//         path: "/users",
//         method: "GET",
//     },
//     createUser: {
//         path: "/users",
//         method: "POST",
//     }
// } as const satisfies Record<string, RouteConfig>;
// console.log()

// let value: any = 100;
// value = "hello";
// value = false;
// value = null;
// value = {}

// // custom type guard
// interface Admin {
//   role: 'admin';
//   permissions: string[];
// }

// interface Customer {
//   role: 'customer';
//   purchaseCount: number;
// }

// type User = Admin | Customer;

// function isAdmin(user: User): user is Admin {
//   return user.role === 'admin';
// }

// function isCustomer(user: User): user is Customer {
//   return user.role === 'customer';
// }

// function handleUser(user: User) {
//   if (isAdmin(user)) {
//     console.log(user.role);
//   } else {
//     console.log(user.role);
//   }
// }

// handleUser({ role: 'admin', permissions: ['r', 'w'] });

// let value: unknown = "hello";
// let str = value as string;

// let value = "hello";
// let num = value as number; // error

// let value = "hello";
// let num = value as unknown as string; // allowed, double assertion

// // generics
// function functionName<T>(value: T) {
//   return value;
// }

// let a = functionName(100);
// const b = functionName<string>('hello');
// const c = functionName<{ name: string; age: number }>({
//   name: 'Alice',
//   age: 20,
// });

// function combine<T>(a: T, b: T): T[] {
//   return [a, b];
// }

// let result = combine<number | string>(100, 'hello');

// // generic constraints
// function getLength<T extends { length: number }>(value: T): number {
//   return value.length;
// }

// const len_str = getLength('hello');
// // const len_num = getLength(100); // error
// const len_object = getLength({ name: 'Alice', length: 10 });

// function getPropery<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// // keyof
// const value = getPropery({ name: 'Alice', age: 20 }, 'age');

// // api request
// interface User {
//   id: number;
//   name: string;
// }

// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// async function request<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error('request failed');
//   }
//   return response.json() as Promise<T>;
// }

// async function print() {
//   const user = await request<User>('/api/user/1');
//   const product = await request<Product>('/api/products/1');
// }

// type HttpMethod = 'GET' | 'Post' | 'PUT' | 'DELETE';

// async function request<TResponse, TBody = undefined>(
//   url: string,
//   method: HttpMethod,
//   body?: TBody,
// ): Promise<TResponse> {
//   const requestInfo: RequestInit = {
//     method: method,
//     headers: { 'Content-Type': 'application/json' },
//   };
//   if (body !== undefined) {
//     requestInfo.body = JSON.stringify(body);
//   }

//   const response = await fetch(url, requestInfo);
//   if (!response.ok) {
//     throw new Error('request failed');
//   }
//   return response.json() as Promise<TResponse>;
// }

// interface MyBody {
//   name: string;
//   age: number;
// }

// async function print() {
//   const body: MyBody = { name: 'Alice', age: 20 };
//   const user = await request<User, MyBody>('/api/user/1', 'Post', body);
//   const product = await request<Product>('/api/products/1', 'GET');
// }

// // generic class
// class Box<T> {
//   value: T;

//   constructor(value: T) {
//     this.value = value;
//   }

//   getValue(): T {
//     return this.value;
//   }
// }

// const box_num = new Box(100);
// console.log(box_num.getValue());
// const box_str = new Box('Hello');
// console.log(box_str.getValue());

// class DataContainer<T> {
//   private items: T[] = [];

//   add(item: T) {
//     this.items.push(item);
//   }

//   remove(index: number): void {
//     this.items.splice(index, 1);
//   }

//   get(index: number): T | undefined {
//     return this.items[index];
//   }

//   getAll(): T[] {
//     return [...this.items];
//   }

//   get length(): number { // used by obj.length
//     return this.items.length;
//   }
//   //  class's getter and setter usage

// }

// const userContainer = new DataContainer<User>();
// userContainer.add({ id: 1, name: 'Alice' });
// userContainer.add({ id: 2, name: 'Tom' });

// const users = userContainer.getAll()
// console.log(users);
// console.log(userContainer.length);

// // Repository
// interface Entity {
//   id: number;
// }

// interface User extends Entity {
//   name: string;
//   email: string;
// }

// interface Product extends Entity {
//   name: string;
//   price: number;
// }

// class Repository<T extends Entity> {
//   protected items: T[] = [];

//   create(item: T): void {
//     this.items.push(item);
//   }

//   findById(id: number): T | undefined {
//     return this.items.find((item) => item.id === id);
//   }

//   findAll(): T[] {
//     return [...this.items];
//   }

//   update(id: number, data: Partial<T>): boolean {
//     const obj = this.findById(id);
//     if (!obj) {
//       return false;
//     }
//     Object.assign(obj, data);
//     return true;
//   }

//   delete(id: number): boolean {
//     const index = this.items.findIndex((item) => item.id === id);
//     if (index === -1) {
//       return false;
//     }
//     this.items.splice(index, 1);
//     return true;
//   }
// }

// const userRepository = new Repository<User>();
// userRepository.create({ id: 1, name: 'Alice', email: 'alice@gmail.com' });

// const productRepository = new Repository<Product>();
// productRepository.create({ id: 2, name: 'xiaomi', price: 4600 });

// // API Client
// interface ApiResponse<T> {
//   success: boolean;
//   message: string;
//   data: T;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// interface RequestOptions<TBody = unknown> {
//   method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
//   body?: TBody;
//   headers?: Record<string, string>;
// }

// interface CreateUserInput {
//   name: string;
//   email: string;
// }

// async function request<TResponse, TBody = unknown>(
//   url: string,
//   options: RequestOptions<TBody>,
// ): Promise<TResponse> {
//   const response = await fetch(url, {
//     method: options.method ?? 'GET',
//     body: options.body === undefined ? undefined : JSON.stringify(options.body),
//   });
//   if (!response.ok) {
//     throw new Error('request failed');
//   }
//   return response.json() as Promise<TResponse>;
// }

// interface ApiClient {
//   get<TResponse>(url: string): Promise<TResponse>;

//   post<TResponse, TBody>(
//     url: string,
//     body: RequestOptions<TBody>,
//   ): Promise<TResponse>;
// }

// const apiClient: ApiClient = {
//   get<TResponse>(url: string): Promise<TResponse> {
//     return request<TResponse>(url, {});
//   },

//   post<TResponse, TBody = unknown>(
//     url: string,
//     options: RequestOptions<TBody>,
//   ): Promise<TResponse> {
//     return request<TResponse, TBody>(url, options);
//   },
// };

// const options: RequestOptions<CreateUserInput> = {
//   method: 'POST',
//   body: {
//     name: 'Alice',
//     email: 'alice@gmail.com',
//   },
//   headers: { 'Content-Type': 'applicaiton/json' },
// };

// async function print() {
//   const user_response = await request<ApiResponse<User>>('/api/user/1', {});
//   const product_response = await request<ApiResponse<Product>>(
//     '/api/product/1',
//     options,
//   );

//   const user_response_apiclient =
//     apiClient.get<ApiResponse<User>>('/api/user/1');
//   const product_response_apiclent = apiClient.post<
//     ApiResponse<Product>,
//     CreateUserInput
//   >('/api/product/1', options);
// }

// type IsString<T> = T extends string ? true : false;
// type A = IsString<string>; // true
// type B = IsString<number>; // false
// type C = IsString<"Hello">; // true

// type GetType<T extends string | number> = T extends string ? "text" : "numeric";
// type A = GetType<string>; // text
// type B = GetType<number>; // numeric

// // generic default parameters
// interface ApiResponse<T = string> {
//   data: T;
// }

// // type UserResponse = ApiResponse<string>;

// // const user_response: UserResponse = {
// //   data: 'hello',
// // };

// const user_response: ApiResponse<number> = {
//   data: 100,
// };

// // function createLight<T extends string>(colors: T[], defaultColor: NoInfer<T>) {
// //   return defaultColor;
// // }

// // const defaultColor = createLight(["red", "blue"], "yellow") // error
// type Color = 'red' | 'blue';

// function createLight<T extends Color>(colors: T[], defaultColor: T) {
//   return defaultColor;
// }
// // const defaultColor = createLight(['red', 'blue'], 'blue');
// // const defaultColor = createLight(['red', 'blue'], 'yellow'); // error

// // variance
// class Animal {
//   name = 'animal';
// }

// class Dog extends Animal {
//   bark() {
//     console.log('Woof!');
//   }
// }

// // invariance
// interface Producer<T> {
//   get(): T;
// }

// const dogProducer: Producer<Dog> = {
//   get() {
//     return new Dog();
//   },
// };

// const animalProducer: Producer<Animal> = {
//   get() {
//     return new Animal();
//   },
// };

// const animalProducer1: Producer<Animal> = dogProducer; // ✅
// // const dogProducer1: Producer<Dog> = animalProducer; // error

// // contravariance
// interface Consumer<T> {
//   consume: (obj: T) => void;
// }

// const dogConsumer: Consumer<Dog> = {
//   consume(dog) {
//     // console.log(dog.name);
//     dog.bark();
//   },
// };

// const animalConsumer: Consumer<Animal> = {
//   consume(animal) {
//     console.log(animal.name);
//   },
// };

// // // const animalConsumer1: Consumer<Animal> = dogConsumer; // error
// // const dogConsumer1: Consumer<Dog> = animalConsumer;

// type ArrayKeys = keyof string[];
// type A = keyof any;

// function getPropery<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// const user = {
//   id: 111,
//   name: 'Alice',
//   age: 20,
//   married: false,
// };
// console.log(getPropery(user, 'id'));
// console.log(getPropery(user, 'name'));
// // console.log(getPropery(user, 'nationality'));

// type User = {
//   id: number;
//   name: string;
//   age: number;
// };

// type NewType<T> = {
//   [K in keyof T]: T[K];
// }; // copy type

// type NewType1<T> = {
//   [K in keyof T]?: T[K];
// }; // optional property

// type NewType2<T> = {
//   readonly [K in keyof T]: T[K];
// }; // readonly property

// type NewType3<T> = {
//   readonly [K in keyof T]: string;
// }; //

// type NewType4<T> = {
//   readonly [K in keyof T]: Promise<T[K]>;
// }; //

// type UserType = NewType<User>;

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   active: boolean;
// };

// type PickProperty<T> = {
//   [K in keyof T]: T[K] extends string ? K : never;
// }[keyof T]; // never will dispear

// type newUser = PickProperty<User>;

// type RemoveAllNonStringProperty<T> = {
//   [K in keyof T as T[K] extends string ? K : never]: T[K];
// };
// type newUser1 = RemoveAllNonStringProperty<User>;

// type PickNumberProperty<T> = {
//   [K in keyof T]: T[K] extends number ? K : never;
// }[keyof T];

// type newUser2 = PickNumberProperty<User>;

// type User1 = {
//   id: number;
//   name: string;
//   getName: () => string;
//   updateAge: (age: number) => void;
//   deleteUser: () => boolean;
// };

// type PickFunctionProperty<T> = {
//   [K in keyof T]: T[K] extends (...args: [any]) => any ? K : never;
// }[keyof T];

// type newUser3 = PickFunctionProperty<User1>;

// infer
type MyArray = string[];
// element type
type GetElementType<T> = T extends (infer U)[] ? U : never;
type ElementType = GetElementType<MyArray>;
// function's return type
type MyFunction = (name: string, age: number) => boolean;
type GetFunctionReturnType<T> = T extends (...args: any[]) => infer U
  ? U
  : never;
type FunctionReturnType = GetFunctionReturnType<MyFunction>;
// function's parameters type
type GetFunctionParametersType<T> = T extends (...args: infer U) => any
  ? U
  : never;
type FunctionParametersType = GetFunctionParametersType<MyFunction>;

type GetFunctionParametersType2<T> = T extends (...args: (infer U)[]) => any
  ? U
  : never;
type FunctionParametersType2 = GetFunctionParametersType2<MyFunction>; // never

type GetFunctionParametersType3<T> = T extends (
  first: infer U,
  ...args: any[]
) => any
  ? U
  : never;
type FunctionParametersType3 = GetFunctionParametersType3<MyFunction>;

