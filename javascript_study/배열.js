// 자바스크립트 배열은 자바의 ArrayList와 유사

// 자바스크립트 선언(빈 배열)
let numbers1 = [];
let numbers2 = new Array();

// add x push(값추가), 배열[index]
numbers1.push(10);
console.log(numbers1);// [10]
numbers1.push(20);
console.log(numbers1);// [10, 20]
console.log(numbers1[0]);// 10
numbers1[0]=30;
console.log(numbers1);
numbers1[2]=50;
console.log(numbers1);
console.log("===============================");
numbers1[5]= 100;
console.log(numbers1);
console.log("===============================");
console.log(numbers1[3]);
console.log("===============================");
// 자바스크립트의 배열은 자바의 ArrayList와 유사
for(let i = 0; i < 10; i++) {
  console.log(numbers1[i]);
}
// 반복문 그대로
console.log("===============================");

// 향상된 for 문
// : 대신 for
// 마지막에 들어있는 값까지
for(let num of numbers1) {
  console.log(num);
}
console.log("===============================");
// forEach
// undefined 무시
// -> x =>
numbers1.forEach(n => console.log(n));

// 배열 함수 numbers1.