// 올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.

// 메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있습니다.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this // 객체를 가져와서 다시 메서드 사용할 수 있도록
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log( this.step );
    return this
  }
};



// up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.
ladder.up().up().down().showStep(); // 1