main();

function main() {
  new Promise((resolve, reject) => {
    console.log(1)
    console.log(2)// 비동기라도 실행 setTimeout실행
    setTimeout(() => {
      console.log(4);
      resolve(1000000); //then의 매개변수 resolve 결과가 있을 때 then(다음 step)
    }, 3000); //12 3초후에 4출력해 3.then 비동기 then실행 4
  
  }).then((num)=>{
    console.log(`${num}-then실행`);
  });
  console.log(3);
}