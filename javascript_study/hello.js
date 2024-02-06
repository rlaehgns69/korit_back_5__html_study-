// 자바스크립트

// 베이스 문법 -> 자바
// 타입리스(타입 명시를 하지 않음.)

var num = 10;
num = "안녕"
// 안에 들어있는 값에 따라 타입 바뀜.
console.log(num);

// Object num = 10;
// num = "안녕";
// 자바도 var jdk 8버전부터

// typeof 키워드

console.log(typeof(10));
// 자바스크립트 숫자자료형 number 정수, 실수 구분 없음.
// int double x -> number
console.log(typeof("10"));// string
console.log(typeof(true));// boolean
var n;// 선언만 -> undefined(값도)
// 값이 들어가야만 타입이 지정되는 자바스크립트
// undenfined 선언했지만 타입이 없어서 undefined 
console.log(typeof(n));// undefined
console.log(n);// undefined
n = null;
// null 타입의 객체 object
console.log(typeof(n));
console.log(n);
// 익명함수 이름이없는 함수
// 화살표 함수(람다식)
console.log(() => {})