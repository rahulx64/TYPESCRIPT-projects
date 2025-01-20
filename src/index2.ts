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
// let colo="red"|"blue"|"green"|"yellow";
// colo="blue";

