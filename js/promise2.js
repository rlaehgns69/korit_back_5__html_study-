main();

function main() {
  setTimeout(() => {
    console.log(1),
    console.log(2);
  }, 3000);//비동기 (함수정의, 시간) setTimeout. 사용 불가
   //1먼저 실행하고 싶다. (3)-1-2 setTimeout안에 넣기
  console.log(3);
}