/*
아래 코드를 switch문을 사용한 코드로 바꿔보세요. switch문은 하나만 사용해야 합니다.
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

// 정답

let a = +prompt('a?', '');

switch(a){
  case 0 :
    alert(0)
    break;
  case 1 :
    alert(1);
    break;
  case 2 :
  case 3 :
    alert('2,3')
    break;
    
    default:
      alert('제대로 입력')
}