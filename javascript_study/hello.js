// 자바스크립트

// 베이스 문법 -> 자바
// 타입리스

var num = 10;
num = "안녕"

console.log(num);

// Object num = 10;
// num = "안녕";
// 자바도 var jdk 8버전부터

// typeof 키워드

console.log(typeof(10));
// 자바스크립트 숫자자료형 number 정수, 실수 구분 없음.
console.log(typeof("10"));
console.log(typeof(true));
var n;
// undenfined 선언했지만 타입이 없어서 undefined 
console.log(typeof(n));
console.log(n);
n = null;
// 타입의 객체 null object
console.log(typeof(n));
console.log(n);
// 익명함수 이름이없는 함수
console.log(() => {})