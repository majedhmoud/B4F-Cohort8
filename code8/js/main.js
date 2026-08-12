const majed = (arr, fun = (x) => x) => {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) temp.push(arr[i]);
  }
  return temp;
};

const arr = [1, 3, 5, 7];
console.log(majed(arr));
console.log(
  majed(arr, (a) => {
    return a < 5;
  }),
);
console.log(arr);

