// 변수 var, let
// var 1.호이스팅문제 2.재선언이 가능함.(오류)
// 자바스크립트 변수를 사용할 때 let을 사용할거임.
// 상수 const

var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

// 호이스팅: 메모리 참조 이전에 선언이 무조건 먼저 일어나는 현상
// 선언 먼저 var num3; 10 + * = NaN 대입 나중에
console.log(num1 + num3);
var num3 = 40;
console.log(num3);

var num3 ="안녕";
console.log(num3);

// let은 호이스팅 x 재선언x(var는 호이스팅 o 재선언 o)
// console.log(num4);
let num4 = 10;
num4 = 20;

// 상수
const num5 = 30;
//num5 = 40;
console.log(num5);

// 변수는 let 상수는 const 타입 상관x