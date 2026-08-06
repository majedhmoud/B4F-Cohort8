const a = [2, 7, 11, 15];
const freq = [];
for (let i = 0; i < 100; i++) freq[i] = 0;
let ans = 0, target = 9;
for (let i = 0; i < a.length; i++) {
    freq [a[i]]++;
}
for (let i = 0; i < a.length; i++) {
    if ((target - a[i] > 0) && (freq[target - a[i]] - ((target - a[i]) == a[i])) > 0) ans ++;
}
console.log(ans);

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] + a[j] == target) console.log([i, j]);
    }
}
a.sort()