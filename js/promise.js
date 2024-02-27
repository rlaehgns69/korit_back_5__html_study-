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
    console.log(`${name}: 구구단 외워와!!`);// 1번

    setTimeout(() => {
      console.log(`${name}: 다외웠어요!!!`);
      resolve("완료!!!"); //비동기로 실행하면됨.
    }, time * 1000); //4초 1초

  });
  //resolve호출 then
  p.then((result)=>{
    console.log(result);
  });
  
}