// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((v)=>v.name)

console.log( names ); // John, Pete, Mary