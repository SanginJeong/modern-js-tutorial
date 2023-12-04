// 문자형으로 변환
let value = false;
value = String(value)
console.log(typeof(value));

// 숫자형으로 변환
let str = '123';
Number(str)
console.log(typeof(Number(str)), typeof(Number(+str)), typeof(parseInt(str)));

// 불린형으로 변환
let num = 123;
num =Boolean(num);
console.log(num);