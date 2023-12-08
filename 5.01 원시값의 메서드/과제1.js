// 아래 코드를 실행하면, 의도한 대로 문자열(str)에 프로퍼티(test)를 추가할 수 있을까요? 만약 가능하다면 얼럿 창엔 무엇이 출력될까요?
let str = 'hello';
str.test = 5;
console.log(str.test); // undefined 원시값은 추가 데이터를 저장할 수 없습니다.