// 아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?
let arr = ["a", "b"];

arr.push(function() {
  console.log(this);
})
arr[2](); // [ 'a', 'b', [Function (anonymous)] ]