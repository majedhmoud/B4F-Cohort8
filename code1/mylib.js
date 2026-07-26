//function f(){}

export function isEven(x) {
  if (x % 2 == 0) {
    //console.log("the number is even");
    return true;
  } else {
    //console.log("the number is odd");
    return false;
  }
}

export function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

const arr = [5, 7, 9, "Ammar", 9];
arr[2] = 17;
arr[5] = 22;
/* for the future
const [x, y] = arr;
console.log(x);
console.log(y);
*/
const obj = {
  name: "Ammar",
  age: 25,
  location: [3.5, 7.2],
};
obj["lastname"] = "Farha";

console.log(obj);

export const adding = (a, b) => {
  return a + b;
};
