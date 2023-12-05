/*
while 반복문이 순차적으로 실행될 때마다 얼럿 창에 어떤 값이 출력될지 예상해보세요.

아래 두 예시는 같은 값을 출력할까요?
*/

// 1
let i = 0;
while (++i < 5) alert( i );

// 정답 :1,2,3,4

// 2
let j = 0;
while (j++ < 5) alert( j );

// 정답 : 1,2,3,4,5