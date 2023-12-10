let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();

// Pete 가 출력됨
// 함수 선언문은 렉시컬 환경이 만들어지는 즉시 사용가능해진다. 코드의 맨위로 간다고 생각하면 됨