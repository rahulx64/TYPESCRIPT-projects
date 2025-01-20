"use strict";
let myname = "ranjan";
myname = "another name";
console.log(myname);
let favnumb = 9;
favnumb += 2;
console.log(favnumb);
let ts = false;
console.log(ts);
// ---------2 inference
let tech = "hrjjjnjn";
let favnumber = 9;
console.log(tech, favnumber);
console.log(typeof favnumber);
// tech=67     error will occur
// ----------3--anytype
let color = "crimison";
color = 45;
console.log(color);
// ----------4--function parameters annonations
function add(num1, num2) {
    return num1 + num2;
}
const res = add(12, 13);
console.log(res);
const mul = (x, y) => { return x * y; };
console.log(mul(12, 13));
function gr(p) {
    return p;
}
let y = gr("rahul");
console.log(typeof y);
//---5---annotation of return in ts function
function d1(x) {
    return x * x;
}
const res1 = (x) => x * x;
console.log(res1(9));
//# sourceMappingURL=index2.js.map