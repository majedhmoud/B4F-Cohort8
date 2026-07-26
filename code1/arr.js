export const greaterThan = (a, b) => {
  return a > b;
};
export const smallThan = (a, b) => {
  return a < b;
};
export const sort = (arr, fun) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
    //   if (arr[j] > arr[j + 1]) {
      if (fun(arr[j], arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
