main();

function main() {

  gugudan(4,"김준일");
  gugudan(1,"김준이");
  gugudan(3,"김준삼");
  gugudan(2,"김준사");
  //console.log("구구단 외워와1");
  //console.log("구구단 외워와2");
  //console.log("구구단 외워와3");

}

function gugudan(time, name) {
  const p = new Promise((resolve) => {
    console.log(`${name}: 구구단 외워와!!`);
    resolve(() => {
      setTimeout(() => {
        console.log(`${name}: 다외웠어요!!!`);
      }, time * 1000); //setTimeout 별도로 동작 
    });
  });//Promise객체 생성 p대입 안해도됨. 생성되는 순간 실행
  //1

  // function resolve(result) {
  //   result();
  // }

  //p.then(() => {});
  // p.then(resolve);
  p.then((result)=>{
    result();//resolve의 함수
    return "완료";//비동기라서 다음 then
  }).then((result) =>{
   console.log(result); 
  });
  // promise -> reolve then->then
  // resolve->then->함수 실행(함수자체가 resolve)

  
}