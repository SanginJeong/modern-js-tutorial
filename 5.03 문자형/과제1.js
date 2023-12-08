// str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.
const ucFirst = (str) =>{
  const firstStr = str[0].toUpperCase();
  return firstStr+str.slice(1);
}

console.log(ucFirst("john") == "John");
