console.log(1);
console.log(2);
console.log(3);

// setTimeout(() =>{
//    console.log(4);
//    setTimeout(() => {
//     console.log(5);
//     setTimeout(() => {
//       console.log(6);
//       setTimeout(()=>{
//         console.log(7);
//       }, 2000);
//     }, 2000);
//    }, 2000);
//   }, 3000);

// setInterval, fetch 비동기처리
// console.log(5);

// new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("1번");
//   }, 2000);
//   resolve("3번");
//   // then안에 있는 함수 호출 result="3번"
// }).then(result => {
//   console.log(result);
// });

// console.log("2번");

console.log("프로그램 시작");

const p = new Promise((resolve, reject) => {
  
  console.log("여기서");
  console.log("여기까지");
  if(0 == 0) {
    resolve("?");
  }else {
    reject(new Error("오류입니다."));
  }
  
});
// promise fetch(promise) console.log먼저
p.then(()=>{
  console.log("3초 뒤에 출력");
}).catch((error) => {
  console.log(error);
}).finally(()=>{

});

console.log("여기가 먼저");