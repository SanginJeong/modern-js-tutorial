// calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

// read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
// sum()은 저장된 두 값의 합을 반환합니다.
// mul()은 저장된 두 값의 곱을 반환합니다.


let calculator = {
  read(a,b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul(){
    return this.a*this.b;
  }
};

calculator.read(2,3);
console.log( calculator.sum() );
console.log( calculator.mul() );