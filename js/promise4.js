main();
function main() {
  let result = [];

    new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(1);
        },3000);//정의 3초뒤에 resolve호출 num에 대입 밑에 있는 then 3초뒤에 실행
    }).then(num => {
        result = [...result, num]; // 3초뒤에 result에 1이 들어간다. then이 result에 값을 넣고 Promise 실행
        new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(2);
        },2000);//정의 2초뒤에 resolve호출 then실행
    }).then(num => {
        result = [...result, num]; // 3초뒤에 result에 1이 들어간다.
        new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(3);
        },1000);//정의 1초뒤에 resolve호출 then실행
      }).then(num => {
        result = [...result, num]; // 3초뒤에 result에 1이 들어간다.
        return result;
      }).then(r => console.log(r)); //result r로 받아서 Promise.all().then()과 같다.
    });
  });  
}
 