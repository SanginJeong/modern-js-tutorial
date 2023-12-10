// user를 JSON 형태의 문자열로 바꾼 다음 이를 다시 객체로 바꾼 후 제2의 변수에 저장해보세요.

let user = {
  name: "John Smith",
  age: 35
};

const json = JSON.stringify(user);
console.log(json);
const obj = JSON.parse(json)
console.log(obj);