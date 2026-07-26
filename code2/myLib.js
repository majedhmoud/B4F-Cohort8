// export function isEven(number) {
//   //   if (number % 2 == 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return number % 2 == 0 ? true : false;
// }
export const isEven = (number) => {
  return number % 2 == 0 ? true : false;
};
// export function power(num, x) {
//   let res = 1;
//   for (let i = 1; i <= x; i++) {
//     res *= num;
//   }
//   return res;
// }
// export function power(num, x) {
//   if(x == 0){
//     return 1;
//   }
//   else{
//     return num * power(num, x-1);
//   }
// }
export function power(num, x) {
  if (x == 0) {
    return 1;
  } else {
    if (x % 2 == 0) {
      let z = power(num, x / 2);
      return z * z;
    } else {
      let y = x - 1;
      let z = power(num, y / 2);
      return z * z * num;
    }
  }
}
