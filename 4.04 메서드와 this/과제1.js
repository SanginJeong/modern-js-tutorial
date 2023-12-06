// 함수 makeUser는 객체를 반환합니다.

// 이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// console.log( user.ref.name ); // this === undefined

// 수정
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John