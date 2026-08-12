// 1. Create a Key-Value Map
const userRoles = new Map();

// 2. Add some values
userRoles.set("alice", "admin");
userRoles.set("bob", "editor");

// 3. Check for keys using .has()
console.log(userRoles.has("alice")); // Output: true
console.log(userRoles.has("editor")); // Output: false
