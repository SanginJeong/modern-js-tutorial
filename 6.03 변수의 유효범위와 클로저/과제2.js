function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();
// 정답 : Pete
// return function에서 name을 찾을 수 없으므로 한 단계 외부 렉시컬로 간다 (찾을 때 까지) makeWorker에서찾았으니까 Pete