// 아래 표현식들의 결과를 예측해보세요.
console.log(
  5 > 4, // true
  "apple" > "pineapple", //false
  "2" > "12", // true
  undefined == null, // true
  undefined === null, // false
  null == "\n0\n", // false (null은 오직 undefined와 같다.)
  null === +"\n0\n", // fasel (===는 형까지 같아야하는데 다름)
);