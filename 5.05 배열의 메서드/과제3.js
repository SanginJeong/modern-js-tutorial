// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.

const filterRangeInPlace = (arr, min, max) => {
  // i번째 요소가 범위에서 벗어난다면 splice(i,1)
  arr.forEach((v,i)=>{
    if(v<min || v>max){
      arr.splice(i,1);
    }
  })
  return arr
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log( arr ); // [3, 1]