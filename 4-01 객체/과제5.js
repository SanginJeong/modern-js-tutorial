// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// 정답
const multiplyNumeric = (obj) =>{
  for(let key in obj){
    ~~(obj[key]/1) === obj[key] ? obj[key]*=2 : obj[key]
  }
  console.log(obj);
}

multiplyNumeric(menu);