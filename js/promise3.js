main();

function main() {
  const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
  ];// 출력예상 3 2 1 
  // 누가 먼저끝나든 한번에 처리하고 싶다.
  //promises 배열(묶음) Promise들 3개정의 Promise setTimeOut
  
  Promise.all(promises).then(result => console.log(result));
  // 비동기 실행 결과 담아라.-배열의 순서 지킴(자기 자리)
}