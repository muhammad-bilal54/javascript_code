// ✅ 1. Primitive Data Types
// Primitive types are immutable (value cannot be changed/modified once it's created).

let name = "Ali";
name[0] = "B"; // ❌ This won't change the string
console.log(name); // Output: "Ali"

name = "Bilal"; // ✅ You can REASSIGN, but not MODIFY the original string


let username = "m bilal";
let age = 21 ;
let checkStatus = true ;
let values ; // undefined
let x = null;  // typeof object

// ✅ 2. Non-Primitive (Reference) Data Types
// Non-primitive types are mutable( The value can be changed/modified after it's created)and stored by reference.

let users = {
    name : "bilal",
    age : 20,
    status : true ,
    city : "islamabad"
}    // Collection of key-value pairs

let arr = [ 23,34,545,56] 

console.log(typeof(checkStatus));

const user = { name: "Ali" };
user.name = "Bilal"; // ✅ Changed!
console.log(user); // { name: "Bilal" }

let arr1 = [1, 2, 3];
arr1[0] = 99; // ✅ Changed!
console.log(arr1); // [99, 2, 3]


/*
typeof "Hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" ← (this is a JS quirk)
typeof { a: 1 }      // "object"
typeof [1, 2, 3]     // "object"
typeof function(){}  // "function"

*/