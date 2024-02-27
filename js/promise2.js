main();

function main() {
  new Promise((resolve, reject) => {
    console.log(1)
    console.log(2)// 비동기라도 실행 setTimeout실행
  }).then(()=>{});
  console.log(3);
}