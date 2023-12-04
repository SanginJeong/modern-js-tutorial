// 아래 코드에서 alert는 실행될까요?
if ("0") {
  alert( 'Hello' );
}

// 정답 : yes 
// 풀이 : if문안에서 문자열은 ""만 false이다.