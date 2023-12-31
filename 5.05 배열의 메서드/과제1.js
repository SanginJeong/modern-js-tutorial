// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

const camelize = (str) =>{
  const arr = str.split('-');
  return arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
}
console.log(camelize("background-color")) 
camelize("list-style-image")
camelize("--webkit-transition")