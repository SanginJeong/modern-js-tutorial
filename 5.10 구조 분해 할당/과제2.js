// 급여 관련 정보가 저장된 객체 salaries가 있다고 가정해 봅시다.
// 가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들어봅시다. 조건은 아래와 같습니다.

// salaries가 비어있으면 함수는 null을 반환해야 합니다.
// 최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 됩니다.
// 힌트: Object.entries와 구조 분해를 사용해 키-값 쌍을 순회하는 방식을 사용해보세요.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (salaries) =>{
  let max= 0;
  let maxName = null;
  for(let arr of Object.entries(salaries)){ // [['john',100] , ['Pete',300], ["Mary",250]]
    let [key, value] = arr;
    if(value > max) {
      max = value;
      maxName = key;
    } 
    console.log(max,maxName);
  }
  return maxName
}

console.log(topSalary(salaries));