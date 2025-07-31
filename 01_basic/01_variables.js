const userId = 2134 ;
let userEmail = "hb234@gmail.com ";
var userName = "ali raza" ;
userAddress = "ghori town islamabad" ;
let userState ;

// userId = 1234 ; not allowed
// console.log(userId) ;

// Object with const
const user = { name: "Ali" };
user.name = "Bilal"; // ✅ Allowed

//user = { name: "Ahmed" }; // ❌ Error



console.log(userId , userEmail , userName , userAddress , userState);

console.table([userId , userEmail , userName , userAddress , userState]) ;

/*
   
let (Modern – block-scoped) local scope
let score = 10;
if (true) {
  let score = 20;
  console.log("Inside block:", score); // 20
}
console.log("Outside block:", score); // 10

var (Old way – function-scoped) global scope
var count = 1;
{
  var count = 2;
  console.log("Inside block:", count); // 2
}
console.log("Outside block:", count); // 2 (same!)


*/
