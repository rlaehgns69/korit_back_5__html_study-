main();

const [a, b, c] = [1, 2, 3];

console.log(a);
console.log(b);
console.log(c);
function main() {
  

    new Promise((resolve, reject) => {
        let result = []; // Promise 안에 넣으면 첫번째 result then안으로 매개변수로 넣기 위해서
        setTimeout(() => {
          //resolve(1);// resolve라는 녀석 매개변수 1개
          resolve([result, 1]);//비구조 할당
        }, 3000);//정의 3초뒤에 resolve호출 num에 대입 밑에 있는 then 3초뒤에 실행
    })
    
    .then(([ result, num ]) => {
        //console.log(result);
        result = [...result, num]; // 3초뒤에 result에 1이 들어간다. then이 result에 값을 넣고 Promise 실행 result.push(num)
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([result, 2]);
        }, 2000);//정의 2초뒤에 resolve호출 then실행
      })
    
      .then(([ result, num ]) => {
          result = [...result, num]; // 3초뒤에 result에 1이 들어간다.
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve([result, 3]);
            }, 1000);//정의 1초뒤에 resolve호출 then실행
          })
      
          .then(([ result, num ]) => {
            result = [...result, num]; 
            return result;
         })
      
        .then(r => console.log(r)); //result r로 받아서 Promise.all().then()과 같다. then then매개변수 r
      });
    });  
  }
 