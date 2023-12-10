// 애너그램(어구전철)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.

// 예시:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// 애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.
// 애너그램 그룹에서 한 단어는 남아있어야 합니다.

const aclean = (arr) =>{
  let map = new Map();
  for(let word of arr){
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word)
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.