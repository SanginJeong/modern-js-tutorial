// 아래 코드의 결과를 예측해 보세요.
alert( alert(1) && alert(2) );

// 정답 : alert창에 1 -> alert창에 undefined
// 풀이 : alert(1) 실행 -> alert(1) === undefined 이므로 평가종료
// alert(1) && alert(2) 에서 alert(1) === undefined === falsy 이므로 평가종료 및 alert(1) && alert(2) === undefined