console.group('Typy skalarne - proste');


console.group('String - lancuchy znaków');
var name = 'Jan\'sdfds\'';
var pass = "Admin\"123\"";
console.log(name);
console.log(pass);
console.log(typeof name);
console.log(typeof pass);
console.groupEnd();

console.group('Number Liczby');
var age = 18;
var deg = -180;
var footSize = 42.5;

console.log(age);
console.log(typeof age);
console.log(deg);
console.log(typeof deg);
console.log(footSize);
console.log(typeof footSize);
console.groupEnd();

console.group('Boolean - wartości logiczne');
var isLoggedIn = true;
var isAdmin = false;
console.log(isLoggedIn, typeof isLoggedIn);
console.log(isAdmin, typeof isAdmin);
console.groupEnd();

console.groupEnd();