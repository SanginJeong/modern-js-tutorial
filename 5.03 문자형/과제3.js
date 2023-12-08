// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다. 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.

// 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 합니다.

const truncate = (str, maxlength) =>{
  let newStr = '';
  if(str.length > maxlength){
    newStr = str.slice(0,maxlength-1)+'...'
  }
  else newStr = str
  console.log(newStr);
}
truncate("What I'd like to tell on this topic is:", 20)
truncate("Hi everyone!", 20)