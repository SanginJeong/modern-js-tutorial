// 아래 코드는 shooters가 요소인 배열을 만들어줍니다.

// 모든 함수는 몇 번째 shooter인지 출력해줘야 하는데 뭔가 잘못되었습니다.

// 왜 모든 shooter가 동일한 숫자를 출력하는 걸까요? 제대로 된 번호가 출력될 수 있게 코드를 수정해 보세요.

function makeArmy() {
  let shooters = [];

  for(let i=0; i<10; i++){
    let shooter = function() { // shooter 함수
      console.log( i ); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
  }
  

  return shooters;
}

let army = makeArmy(); // [ function { log (i) }]

army[0](); army[5](); 

// 이유 : i는 while 밖 변수이므로 i가 계속 최신화되는것이 아닌, 같은 i를 참조해서 shooters에 push 된다.
// i를 다 push 하면 i는 모두 같으므로 마지막 i값인 10이 된다.
// 참조를 같이한다 -> 같이 바뀐다.