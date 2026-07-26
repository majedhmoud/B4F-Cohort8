// export const gt = (a, b) => {
//   return a > b;
// };
// export const lt = (a, b) => {
//   return a < b;
// };

export const sort = (arr, xxx) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (xxx(arr[j], arr[j + 1])) {
        let x = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = x;
      }
    }
  }
};
