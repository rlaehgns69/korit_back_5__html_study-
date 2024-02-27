main();
function main() {
  p1(3, "data1").then(result => console.log(result));// 리턴값 Promise
  setTimeout(() => p2("data2").then(result => console.log(result)), 4000); // setTimeout에 await 달 수 없다.
  p2("data3").then(result => p3(result, 100).then(result => console.log(result)));// 객체 리턴
  p4("data4");// async 달려있으면 리턴이 프로미스
  // 프로미스 호출 then 때 실행해라.
  console.log("출력");
}

function p1(time, data) {
  return new Promise((resolve, reject) => { //resolve 컨트롤
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
}// 자체로 하나의 비동기

async function p3(data, value) {
  return {
    [data]: value
  }
}

async function p4(data) {
  // const r1 = await p2(data); // await 안달면 프로미스  await p2 리턴값, 순서대로 동작 result와 같다
  // const r2 = await p3(r1, 200);// await async function 안에서 main function은 async가 없다.
  // p2("data3").then() p2실행되고나서 p3실행되라 then에 result
  const r2 = await p3(await p2(data), 200); // .then .then 우리가 동기사용하듯이 async await사용
  console.log(r2);
}