// 배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.

// shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.

// 피셔-에이츠 알고리즘
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...