let x = 1;

function func() {
  console.log(x); // ?
  
  let x = 2;
}

func(); // x에 접근 불가능