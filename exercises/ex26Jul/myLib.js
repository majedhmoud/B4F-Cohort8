export const insert = (arr, num, i) => {
  if (i > arr.length) {
    arr[arr.length] = num;
  } else {
    for (let ind = arr.length; ind > i; ind--) {
      arr[ind] = arr[ind - 1];
    }
    arr[i] = num;
  }
  return arr;
};

export const findDuplicates = (arr) => {
  const freq = [];
  const ret = [];
  for (let i = 0; i < 1e5; i++) {
    freq[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] == 1) {
      ret.push(arr[i]);
    }
    freq[arr[i]]++;
  }
  return ret;
};
const validNeighbor = (i, j, img, mainColor) => {
  return (
    i >= 0 &&
    j >= 0 &&
    i < img.length &&
    j < img[0].length &&
    img[i][j] == mainColor
  );
};
export const coloring = (sr, sc, newColor, img, mainColor) => {
  if (!validNeighbor(sr, sc, img, mainColor)) return;
  img[sr][sc] = newColor;
  coloring(sr - 1, sc, newColor, img, mainColor);
  coloring(sr + 1, sc, newColor, img, mainColor);
  coloring(sr, sc - 1, newColor, img, mainColor);
  coloring(sr, sc + 1, newColor, img, mainColor);
};

export const watering = (bars) => {
  let ans = 0;
  const prefix = [],
    suffix = [];
  for (let i = 0; i < bars.length; i++) {
    prefix[i] = 0;
    suffix[i] = 0;
  }
  prefix[0] = bars[0];
  suffix[bars.length - 1] = bars[bars.length - 1];
  for (let i = 1; i < bars.length; i++) {
    prefix[i] = Math.max(prefix[i - 1], bars[i]);
  }
  for (let i = bars.length - 2; i >= 0; i--) {
    suffix[i] = Math.max(suffix[i + 1], bars[i]);
  }
  for (let i = 0; i < bars.length; i++) {
    ans += Math.min(prefix[i], suffix[i]) - bars[i];
  }
  return ans;
};

export const fib = (n) => {
  if (n == 0 || n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

export const dp = (n) => {
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};
export const jump = (arr) => {
  let final = arr[arr.length - 1],
    mx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > final) return false;
    mx = Math.max(mx, arr[i] + i);
    if (mx >= arr.length) return true;
  }
};

export const cutting = (rodList) => {
  let ans = 0,
    n = rodList.length;
  const mx = [];
  mx[0] = 0;
  for (let i = 1; i < rodList.length; i++) {
    mx[i] = Math.max(rodList[i] / i, mx[i - 1]);
  }
  let ind = rodList.length - 1;
  let flag = false;
  while (ind > 0) {
    if (mx[ind] == mx[ind - 1] || ind > n) {
      ind--;
      continue;
    }
    let numOfPeices = Math.floor(n / ind);
    ans += numOfPeices * rodList[ind];
    n = n % ind;
    if (ind == 1) flag = true;
    ind = n - 1;
  }
  ans = ans - (flag == true ? rodList[1] : 0);
  return ans;
};

export const isAutomorphic = (num) => {
  if (num == 1 || num == 0) return true;
  let greater = 1;
  while (num > greater) greater *= 10;
  return (num * num) % greater == num;
};

const products = (num) => {
  let ans = num;
  while (num) {
    let digit = num % 10;
    ans *= digit;
    num = Math.floor(num / 10);
  }
  return ans;
};

export const seeds = (num) => {
  let ans = [];
  for (let i = 1; i <= num / 2; i++) {
    if (products(i) == num) ans.push(i);
  }
  return ans.length == 0 ? -1 : ans;
};

export const sumOfDigits = (num) => {
  let ans = 0;
  while (num) {
    ans += num % 10;
    num = Math.floor(num / 10);
  }
  return ans;
};
export const sumOfDigitsSquared = (num) => {
  let ans = 0,
    power = 0,
    greater = 1;
  while (num > greater) {
    greater *= 10;
    power++;
  }
  while (num) {
    ans += Math.pow(num % 10, power);
    power--;
    num = Math.floor(num / 10);
  }
  return ans;
};

export const flipper = (num) => {
  let reversed = 0,
    i = 1;
  while (num > i) i *= 10;
  i /= 10;
  while (num) {
    reversed += (num % 10) * i;
    i /= 10;
    num = Math.floor(num / 10);
  }
  return reversed;
};
