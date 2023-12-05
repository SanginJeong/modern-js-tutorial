// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

// 아래와 같이 동작해야 합니다.

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

const isEmpty = (object) =>{
  for (let key in obejct){ // object에 key를 찾는데 key가 하나라도 있으면 그 즉시 false
    return false
  }
  return true
}