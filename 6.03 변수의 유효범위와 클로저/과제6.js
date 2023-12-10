// sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum을 만들어보세요.

// 두 개의 괄호를 사용해서 말이죠.

const sum = (a) =>{
  return function (b) {
    return a+b
  }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));