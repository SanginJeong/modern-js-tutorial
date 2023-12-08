// arr은 배열입니다.

// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.

function unique(arr){
  return [...new Set(arr)];
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// 아래 코드는 한 번만 나타난 요소를 모은 배열을 구하시오.

// function unique(arr) {
//   const a = [...new Set(arr)];
//   const cnt = {};
//   a.forEach(v=> cnt[v] = 0)
  
//   strings.forEach((v)=>cnt[v]++);
  
//   const answer = [];
//   for(let key in cnt){
//     cnt[key] === 1 ? answer.push(key) : 0
//   }
//   return answer
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O