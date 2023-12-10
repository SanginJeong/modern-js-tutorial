// 재귀를 사용하여 n!을 계산하는 함수, factorial(n)을 만들어보세요.

const factorial = (n) =>{
  if( n === 1){
    return n
  }
  else if ( n > 1) {
    return n * factorial(n-1);
  }
}

console.log(factorial(5));