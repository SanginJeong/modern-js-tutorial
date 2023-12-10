// 유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7). ‘유럽’ 기준 숫자를 반환해주는 함수 getLocalDay(date)를 만들어보세요.

const getWeekDay = (date) =>{
  const num = date.getDay();
  if(num === 0){
    num = 7
  }
  return num
}

let date = new Date(2019, 11, 5);  
console.log( getWeekDay(date) );        
