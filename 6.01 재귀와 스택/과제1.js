// 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.

// 아래 방법을 사용해 세 가지 답안을 만들어보세요.

// for 반복문 사용하기
// 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1))
// 등차수열 공식 사용하기

// 더 생각해보기 1: 세 가지 방법 중 어떤 방법이 가장 빠른가요? 어떤 방법이 가장 느린가요? 이유도 함께 제시해주세요.

// 더 생각해보기 2: 재귀를 사용해 sumTo (100000)를 계산할 수 있을까요?

// 1 : for문
// function sumTo(n) {
//   let sum = 0;
//   for(let i=1; i<=n; i++){
//     sum += i;
//   }
//   return sum
// }

// 2 : 재귀
/*
n=1 , sumTo(1) 실행 하고 sumTo(1) 결과를 저장함.
n=2 , sumTo(2)
n=3 , sumTo(3)
*/
// function sumTo(n) {
//   if( n === 1){
//     return n
//   }
//   else if ( n > 1) {
//     return n + sumTo(n-1)
//   }
// }

// console.log( sumTo(100) ); // 5050

// 3 : 등차수열 공식
function sumTo(n) {
  return n * (n+1) / 2
}
console.log(sumTo(100));