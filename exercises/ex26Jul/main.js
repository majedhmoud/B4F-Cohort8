import {
  insert,
  findDuplicates,
  coloring,
  watering,
  fib,
  dp,
  jump,
  cutting,
  isAutomorphic,
  seeds,
  sumOfDigits,
  sumOfDigitsSquared,
  flipper,
} from "./myLib.js";
import { arr1, arr2, img, bars, jumps, rodList } from "./data.js";

// 1) insert Elements at a Give Position:
// console.log(insert(arr1, 3, 6));

// 2) Find Duplicate Elements in an Array:
// console.log(findDuplicates(arr2));

// Problem 1:
// let sr = 1,
//   sc = 2,
//   newColor = 2;
// let mainColor = img[sr][sc];
// coloring(sr, sc, newColor, img, mainColor);
// console.log(img);

// Problem 2:
// 3 0 1 0 4 0 2
// 3 3 3 3 4 4 4
// 4 4 4 4 4 2 2
// console.log(watering(bars));

// Problem 3:
// 1 1
// 2 2
// 3 3
// 4 5
// console.log(fib(4));
// console.log(dp(4));

// Problem 4:
// console.log(jump(jumps));

// Problem 5:
console.log(cutting(rodList));

// Automorphic Number
// for (let i = 1; i <= 25; i++)
//     console.log(i, isAutomorphic(i));

// Seeds of a number
// console.log(seeds(138));
// console.log(seeds(4977));
// console.log(seeds(11));

// Neon Number
// console.log (9 == sumOfDigits(9 * 9));

// Deserium Number
// console.log(sumOfDigitsSquared(135));

// Flipping a number
// console.log(flipper(123));

// Symmetric number
// console.log(5332335 == flipper(5332335));
// console.log(123 == flipper(123));
