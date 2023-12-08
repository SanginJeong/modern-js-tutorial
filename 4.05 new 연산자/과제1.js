// new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?
const obj = {};
function A() {
  return obj
}
function B() {
  return obj
}

let a = new A; 
let b = new B; 

console.log( a == b ); // true