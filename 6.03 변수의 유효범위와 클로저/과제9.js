// 객체가 담긴 배열을 정렬해야 한다고 가정해봅시다.
// 필드를 기준으로 정렬을 도와주는 함수 byField를 만들어봅시다.

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = (key) => {
  return function (a, b) {
    return a[key] > b[key] ? 1 : -1
  }
}

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);


