// 급여 정보가 저장되어있는 객체 salaries가 있습니다.

// Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.

// salaries가 빈 객체라면, 0이 반환되어야 합니다.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// const sumSalaries = (obj) =>{
//   let sum =0;
//   for(let value of Object.values(obj)){
//     sum += value;
//     console.log(Object.values(obj)); // Object.values(obj) 는 obj의 value들을 배열에 담음 -> 그래서 반복문이 가능해짐
//   }
//   return sum
// }

// console.log( sumSalaries(salaries) ); // 650

for(let obj of Object.values(salaries)){
  console.log(obj);
}