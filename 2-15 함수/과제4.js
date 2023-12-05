// x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

function pow(x,n){
  if(n<=0){
    console.log('0보다 큰 수를 입력하세요')
    return
  }
  
  for(let i=0; i<n; i++){
    return x *= n;
  }
}

console.log(pow(2,1));
console.log(pow(2,2));
console.log(pow(2,3));
console.log(pow(1,0));