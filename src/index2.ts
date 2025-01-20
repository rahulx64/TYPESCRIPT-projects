let myname: string = "ranjan";
myname = "another name";
console.log(myname);

let favnumb: number = 9;
favnumb += 2;
console.log(favnumb);

let ts: boolean = false;
console.log(ts);

// ---------2 inference

let tech = "hrjjjnjn";
let favnumber = 9;
console.log(tech, favnumber);
console.log(typeof favnumber);
// tech=67     error will occur

// ----------3--anytype

let color: any = "crimison";
color = 45;
console.log(color);

// ----------4--function parameters annonations
function add(num1: number, num2: number) {
  return num1 + num2;
}
const res = add(12, 13);
console.log(res);

const mul = (x: number, y: number) => {
  return x * y;
};

console.log(mul(12, 13));

function gr(p: string) {
  return p;
}

let y = gr("rahul");
console.log(typeof y);

//---5---annotation of return in ts function
function d1(x: number): number {
  return x * x;
}

const res1 = (x: number): number => x * x;

console.log(res1(9));

// 6---void annonation return
function print(m: string): void {
  console.log(`hello world ${m}`);
}

print("hello jjiiii");

//----7--never keyword
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
    console.log("hello");
  }
}

//----8--array

// old way
const names: Array<string> = ["rahul", "rahul", "rahul"];
// new way
const numb: number[] = [1, 2, 3, 4, 5];
const str: string[] = ["rahul", "rahul", "rahul"];

console.log(typeof numb);

str.push("ranjan");

// multidimensional array
const matrix: number[][][] = [
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
  ],
];

//---9----- objects in typesccript using type alliases

const person: {
  firstname: string;
  lastname: string;
  age: number;
} = {
  firstname: "rahul",
  lastname: "x64",
  age: 21,
};

const student: {
  name: string;
  age: number;
  address: {
    city: string;
    state: string;
    pincode: number;
  };
} = {
  name: "Rahul",
  age: 21,
  address: {
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: 226001,
  },
};
console.log(student.address.city); // Output: Lucknow

type stu = {
  name: string;
  age: number;
  address: add;
};
type add = {
  city: string;
  state: string;
};

const obj2: stu = {
  name: "Rahul",
  age: 21,
  address: {
    city: "Lucknow",
    state: "Uttar Pradesh",
  },
};
console.log(obj2);

// optional property in object
const persn: {
  firstname: string;
  lastname: string;
  age?: number;
} = {
  firstname: "rahul",
  lastname: "x64",

};

console.log(persn.age);

// readonly property in object
const pers: {
  firstname: string;
  readonly lastname: string;
  age?: number;
} = {
  firstname: "rahul",
  lastname: "x64",
};

console.log(persn.age);
// ---------10-----intersecion type
type person1={
     name: string;
     age:number;
}

type employee={
     id:number;
     job:string;
}

type corporate=person1&employee;

const alice:corporate={
     name:"rahul",
     age:21,
     id:1,
     job:"developer"
}

// ------11----union type
let myvar:number|string;


type person2 = {
  name: string;
  age: number;
};

type employee2 = {
  id: number;
  job: string;
};

type corporate2 = person1 & employee;

// --------12----literals type
let colo:"red"|"blue"|"green"|"yellow";
// colo="pink"; we can not do that


// -------13----tuples
let mytuple:[string,number]=["hello",45];

// destructring tuple
let [xx,yy]=mytuple;
console.log(mytuple[0]);
console.log(xx);


// ----14-------enum
enum weather{
     sunny="sunny",
     rainy="rainy",
     cloudy="cloudy",
     windy="windy"
}


// ---15---oops----typescript
class person3{
     name:string;
     age:number;
     constructor(name:string,age:number){
          this.name=name;
          this.age=age;
     }
}

const p4=new person3("john",89);
console.log(p4);



// ----16----interface
// In TypeScript, an interface is a way to define a structure for an object, class, or function. It defines the shape of an object by specifying the properties and methods it should have without providing the implementation.

// interface for object 
interface person5 {
     firstname:string;
     lastname:string;
     age:number;
}

const ee:person5={
     firstname:"rahul",
     lastname:"x64",
     age:21
}


interface Car {
    brand: string;
    model: string;
    year?: number; // Optional
}

const car: Car = {
    brand: "Toyota",
    model: "Camry",
};
console.log(car.year); // Output: undefined


interface Book {
    readonly title: string;
    author: string;
}

const book: Book = {
    title: "TypeScript Guide",
    author: "John Doe",
};
console.log(book.title); // Output: TypeScript Guide
// book.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
};
console.log(myDog.breed); // Output: Golden Retriever

// interface for a function
interface math{
     (x:number,y:number):number;
}
const addd:math=(a,b)=>a+b;
const adddd: math = (a, b) => a - b;


// interface for classes
interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483


// nested interface   
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Person {
    name: string;
    age: number;
    address: Address; // Nested interface
}

const personnn: Person = {
    name: "Rahul",
    age: 21,
    address: {
        street: "123 Main St",
        city: "Lucknow",
        zipCode: "226001",
    },
};

// console.log(person.address.city); // Output: Lucknow

interface Company {
    name: string;
    location: string;
    employee: {
        name: string;
        age: number;
        address: {
            city: string;
            state: string;
        };
    };
}

const company: Company = {
    name: "TechCorp",
    location: "New York",
    employee: {
        name: "Rahul",
        age: 21,
        address: {
            city: "Lucknow",
            state: "Uttar Pradesh",
        },
    },
};

console.log(company.employee.address.city); // Output: Lucknow

// -------------generics-----17
// it is advanced version of interface     In TypeScript, generics allow you to define flexible and reusable functions, classes, and interfaces that work with any data type. Instead of specifying concrete types, you use a placeholder to represent the type, and it will be determined when the function or class is used.

// generic function
function identity<T>(value:T):T{
 return value;
}

console.log(identity(9));
console.log(identity("rahul"));


function combine<T, U>(a: T, b: U): string {
    return ` ${a} and ${b}`;
  }

console.log(combine(10, "apples"));  // Output: 10 and apples


// generic interface
interface box<t> {
     value:t;
}

const numb7:box<number>={value:12};
const str7:box<string>={value:"rahul"}

interface bx<T,U,V> {
  value: T;
  name: U;
  age: V;
}



// generic class
class Container<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue());  // Output: 42

const stringContainer = new Container<string>("TypeScript");
console.log(stringContainer.getValue());  // Output: TypeScript


function name56<T,U,V>(var1: T, var2: U, var3: V):string{
   return` ${var1} and ${var2} and ${var3}`;
}

const res3=name56<number,number,string>(1,2,"ra");
console.log(res3);
