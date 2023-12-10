// 위 문제(단일 연결 리스트 출력하기)에 있는 단일 연결 리스트의 항목을 역순으로 출력해주는 함수를 만들어봅시다.

// 반복문과 재귀를 사용한 답안을 각각 만들어보세요

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 1 : 반복문
// const printReverseList = (list) => {
//   const arr = [];
//   let tmp = list;
//   while(tmp){
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//   arr.reverse();
//   return arr.forEach(v=>console.log(v))
// }

// printReverseList(list)

// 2 : 재귀
/*
위로 쌓임
value : 4 , (4)
value : 3 , (3)
value : 2 , (2)
value : 1 , (1)
next가 없으니까 value 출력 -> 쌓여있던 실행 컨텍스트들을 순서대로 실행 -> 4 , 3 , 2 ,1
*/
const printReverseList = (list) =>{
  if(list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}
printReverseList(list)