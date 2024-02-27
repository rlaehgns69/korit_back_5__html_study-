main();
function main() {
  p1(3, "data1").then(result => console.log(result));// 리턴값 Promise
  setTimeout(() => p2("data2").then(result => console.log(result)), 4000);
}

function p1(time, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time * 1000);
  });//async로
}
// async function p2(time, data) {
//   let temp = null
//   setTimeout(() => {
//     temp = data;
//   }, time * 1000);//원하는 동작 x async는 resolve 없음 return ()) => {return data;}
//   return data; // 안에 함수 return 이라서 밖에 return 했는데 3초뒤에 실행 불가
// }
async function p2(data) {
  return data; // 거꾸로 실행
}