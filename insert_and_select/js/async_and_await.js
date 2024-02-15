
async function fx1() {
  console.log("fx1 비동기 호출");
  return 10;
  // resolve(); 무조건 있다. then호출
  // return 10;
  // 리턴 10이 아니라 return resolve
  // throw new Error(); // 예외 강제로 발생
}

async function fx2(num) {
  console.log("fx2 비동기 호출");
  console.log(num + " 출력");
}

async function fx3() {
  let arg = 0;
  let fx1Result = await fx1();
  arg = fx1Result;
  await fx2(arg);
  // 비동기를 동기로 await
  // async안에서만 await 사용 가능

  // fx1().then((result) => {
  //   arg = result;
  //   console.log(arg);
  //   fx2(arg);
  // });  비동기처리 순서에 맞출 수 있게 
  //   fx2(arg);
  
}

function handleSubmitClick2() {
  fx3();
  // console.log(fx1()); Promise {<fulfilled>: undefined} 
  // promise 객체 리턴 Promise(10)
  // fx1();  fx1 비동기 호출
  // fx1().then(() => {
  //   console.log("then의 실행조건 resolve()존재");
  // }).catch(() => {
  //   console.log("오류 생성1");
  // });
  // fx1().then((result)=>{
  //   console.log("then 호출");
  //   console.log(result);
  // }).catch(()=>{
  //   console.log("오류 생성2")
  // });
  // console.log("동기 실행");// 동기처리가 우선되었음.
  // fx1 프로미스호출(비동기) 비동기의 return은(resolve()) then에서 받을 수 있음.
  // then안에서 동기처리 1. then호출 2. result 순서
  
}

function handleSubmitClick() {
  const p1 = new Promise((resolve,reject)=>{
    console.log("p1 프로미스 실행")
    reject();
//  원하는 순서가 아니라 resolve되면 호출 reject되면 호출

  });// p1 = 프로미스(리턴)
  // resolve가 호출되어야지 p1.then()실행
  // resolve호출에 대한 정의가 then
  p1.then(() => {
    console.log("p1 then 실행");
    return 10;
  }).then((num) => {
    console.log(num);
  }).then(()=>{
    console.log("세번째 then")
  }).catch(() => {
    console.log("오류");
  });
  // 빌더패턴 자기자신을 리턴
  // then가 catch는 별개 then 3
  // .then 프로미스(프로미스(프로미스.then).then).then
  // 리턴 다음 then(매개변수)
  // 비동기 비동기 비동기(동기처리)

  // p1.then().catch가능 객체.then(()=>{}).

  // reject호출 catch 동작
  p1.catch(() => {
    console.log("p1 catch 실행(오류)");
  })

  const p2 = new Promise((resolve,reject)=>{
    console.log("p2 프로미스 실행")
  });

  console.log("동기 실행")
}


