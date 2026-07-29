// // window.alert("Hello bader");
// //let x = confirm("Are You Sure??");
// let x = prompt("Enter Your Name:");
// // console.log(x);
// // document.writeln(x);
// document.getElementById("title").innerHTML = x;

const users = [
  { name: "bader", gender: "M" },
  { name: "yazan", gender: "M" },
  { name: "nagham", gender: "F" },
  { name: "raghad", gender: "F" },
];
const root = document.getElementById("main");
for (let i = 0; i < users.length; i++) {
  let user = document.createElement("div");
  user.innerHTML = users[i].name;
  if (users[i].gender == "M") {
    user.style.backgroundColor = "blue";
  } else {
    user.style.backgroundColor = "pink";
  }
  root.appendChild(user);
}
