// 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.

let user = {
  name: 'John',
  age: 30
};

const count = (obj) =>{
  return Object.keys(obj).length
}
console.log( count(user) ); // 2
