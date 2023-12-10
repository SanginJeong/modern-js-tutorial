// 날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.

const getWeekDay = (date) =>{
  const arr = ['SU','MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const num = date.getDay();
  return arr[num];
}

let date = new Date(2012, 0, 3);  // 2012년 1월 3일
console.log( getWeekDay(date) );        // "TU"가 출력되어야 합니다.