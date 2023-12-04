// 아래 코드의 결과를 예측해 보세요.
alert( alert(1) || 2 || alert(3) );

// 정답 : alert창에 1 뜨고 다음 2뜸
// 풀이 : alert값은 undefined === false이므로 alert(1) 실행 -> undefined므로 다음으로 넘어감
// alert(1) || 2 || alert(3) === 2 이므로 alert(2) 실행 -> truthy 이므로 함수종료