// 특정 달의 마지막 일을 반환하는 함수 getLastDayOfMonth(year, month)를 작성해보세요. 반환 값은 30이나 31, 29(2월), 28(2월)이 될 겁니다.

// 매개변수:

// year – 숫자 4개로 구성된 연(예: 2012)
// month – 월(0부터 11)
// 윤년인 2012년의 2월은 29가 반환되어야 합니다. getLastDayOfMonth(2012, 1) = 29

const getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month+1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));