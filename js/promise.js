main();

let complet = [false, false, false, false]

function main() {

  gugudan(0, 4,"김준일");
  gugudan(1, 1,"김준이");
  gugudan(2, 3,"김준삼");
  gugudan(3, 2,"김준사");
  //console.log("구구단 외워와1");
  //console.log("구구단 외워와2");
  //console.log("구구단 외워와3");

}

function gugudan(index, time, name) {
  const p = new Promise((resolve) => {
    console.log(`${name}: 구구단 외워와!!`);

    setTimeout(() => {
      console.log(`${name}: 다외웠어요!!!`);
      complet = complet.map((value, cIndex) => cIndex !== index ? value : true) //변수 넣는 게 동기 상태 
      // useState set동작 상태의 값이 바뀌면 렌더링이 일어나면서 값이 들어감.
      // 값이 들어가기전에 set a set =0 b set10 a를 사용하기도 전에 b 사용 상태 사용 x 일반변수
      resolve(complet);// 4초뒤에 실행 // 누가 완료했는지 배열에 담는다
    }, time * 1000); //김준이(1초)의 값이 배열에 매번확인 배열

  });
  
  p.then((result)=>{
    console.log(result);
  });
  
}