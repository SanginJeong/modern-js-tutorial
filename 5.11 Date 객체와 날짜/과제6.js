// 오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 만들어보세요.

// 현재 시각이 10:00 am이고, 서머타임이 적용되지 않은 경우라면 아래와 같은 결과가 나와야 합니다.

// 주의: 어떤 날이든 함수를 호출했을 때, 원하는 결과가 반환되어야 합니다. '오늘’을 나타내는 값을 하드 코딩하지 마세요.

const getSecondsToday = () => {
  let current = new Date();
  let today = new Date(current.getFullYear(), current.getMonth(), current.getDate());
  let diff = current-today
  return Math.round(diff / 1000)
}


console.log(getSecondsToday());