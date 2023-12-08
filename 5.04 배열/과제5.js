// 입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열이라고 가정해봅시다.

// 우리가 해야 할 일은 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것입니다.

// 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)를 작성해 봅시다.


//카데인 알고리즘
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) {
      partialSum = 0;
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]))  //6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))  //11
console.log(getMaxSubSum([-2, -1, 1, 2]))  //3
console.log(getMaxSubSum([100, -9, 2, -3, 5]))  //100
console.log(getMaxSubSum([1, 2, 3]))  // 6 (모든 요소)
