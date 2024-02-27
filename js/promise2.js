main();

function main() {
  new Promise((resolve, reject) => {
    console.log(1)
    console.log(2)// 비동기라도 실행 setTimeout실행
    setTimeout(() => {
      console.log(4);
      resolve();
    }, 3000); //12 3초후에 4출력해 3.then 비동기 then실행 4
  
  }).then(()=>{
    console.log("then 실행")
  });
  console.log(3);
}