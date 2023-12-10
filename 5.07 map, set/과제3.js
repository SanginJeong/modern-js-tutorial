// map.keys()를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

// 작동하지 않네요.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);
// Error: keys.push is not a function
keys.push("more");
console.log(keys);
