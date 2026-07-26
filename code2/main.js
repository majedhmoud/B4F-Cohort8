// import { sort, gt, lt } from "./arrayes.js";
import { sort } from "./arrayes.js";
import { isEven, power } from "./myLib.js";
import { arr, users } from "./data.js";
// console.log(isEven(8));
// console.log(power(2, 64));

console.log(users);
sort(users, (a, b) => {
  return a.name.length < b.name.length;
});
console.log(users);
