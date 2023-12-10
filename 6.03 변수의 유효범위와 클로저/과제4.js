// 생성자 함수를 이용해 counter 객체를 만들어보았습니다.

// 아래 예시는 잘 작동할까요? 결과는 어떨까요?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // 1
console.log( counter.up() ); // 2
console.log( counter.down() ); // 1