const evenAndOdd = (num) => {
  const res = [0, 0];
  while (num) {
    res[(num % 10) % 2]++;
    num = Math.floor(num / 10);
  }
  return res;
};

const pascalCase = (str) => {
  characters = str.split(" ");
  for (let i = 0; i < characters.length; i++) {
    characters[i] =
      characters[i].charAt(0).toUpperCase() + characters[i].slice(1);
  }
  return characters.join("");
};

const difference = (color1, color2) => {
  return (
    (color1[0] - color2[0]) * 2 +
    (color1[1] - color2[1]) * 2 +
    (color1[2] - color2[2]) * 2 * (color1[0] - color2[0]) * 2 +
    (color1[1] - color2[1]) * 2 +
    (color1[2] - color2[2]) * 2
  );
};

const duration = (time1, time2) => {
  const t = [time1.split(":"), time2.split(":")];
  t.sort((a, b) => a[0] - b[0]);
  let res = (parseInt(t[1][0], 10) - parseInt(t[0][0], 10)) * 60;
  res += parseInt(t[1][1], 10) - parseInt(t[0][1], 10);
  return res;
};

const union = (arr1, arr2) => {
  let un = new Set();
  for (let i = 0; i < arr1.length; i++) {
    un.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    un.add(arr2[i]);
  }
  un = Array.from(un).sort((a, b) => a - b);
  return un;
};

const intersection = (arr1, arr2) => {
  arr1 = new Set(arr1);
  arr2 = new Set(arr2);
  return arr1.intersection(arr2);
};

const cryptogram = (str, encryptor) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] in encryptor) {
      res += encryptor[str[i]];
    } else {
      res += encryptor[str[i]];
    }
  }
  return res;
};

const vandc = (str) => {
  const vowels = "aoeui",
    constants = "bcdfghjklmnpqrstvwxyz";

  const res = ["", ""];
  for (char of str) {
    if (vowels.includes(char.toLowerCase())) res[0] += char;
    else if (constants.includes(char.toLowerCase())) res[1] += char;
  }
  return res;
};

const isUTF = (nums) => {
  if (nums.length > 4) return false;
  if (nums.length == 1) {
    return nums[0][0] == "0";
  }
  if (nums.length == 2) {
    return nums[0].slice(0, 3) == "110" && nums[1].slice(0, 2) == "10";
  }
};

console.log(evenAndOdd(1234567890));
console.log(pascalCase("hello world"));
console.log(difference([255, 255, 255], [0, 0, 0]));
console.log(duration("14:30", "16:00"));
console.log(union([20, 10, 30, 40], [40, 30, 50, 60]));
console.log(intersection([20, 10, 30, 40], [40, 30, 50, 60]));
console.log(
  cryptogram("world", {
    w: "y",
    o: "q",
    r: "t",
    l: "m",
    d: "g",
  }),
);
console.log(vandc("Hello, World!"));
