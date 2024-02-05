// 함수 자료형x 리턴 자료형x
function add(num1, num2) {
  console.log("num1: " + num1);
  console.log(`num2: ${num2}`);// EL표현식 문자열 안에 변수
  return num1 + num2;
  // 리턴 o/x 선택
}

console.log(add(10,20));

let addFunction = add;// 자바 x

console.log(add) // 자바스크립트 함수 자체 값(주소값) 함수를 변수에 담을 수 있다.
console.log(addFunction);// 변수명으로 함수 담을 수 있다.(함수이름 변경 가능)
console.log(addFunction(30, 40));

let user = {
  username: "junil",
  password: "1234",
  //addFunction: add
  addFunction: function add(a,b) {
    return a + b;
  }
}
// 함수를 넣을 수 있다.

console.log(user.addFunction(10, 20));

// 익명함수
let sub = function sub(a, b) {
  return a - b;
} // 함수를 변수에 넣고 변수명으로 함수를 사용 가능
// 함수의 이름 없어도 된다. 변수에 대입가능 하기 때문에 익명함수

let result1 = sub(10, 5);
console.log(result1);
// 변수명으로 함수를 사용
console.log(sub);

// 화살표함수(람다식)
// 람다식 벗어나자(자바)
// let div = function(a, b) {
//   return a / b;
// }
// 매개변수 => 함수본체
let div = (a, b) =>  {
  return a / b;
}

console.log(div(10, 5));

// 함수
div = (a, b) => a / b; // 리턴 없애기
console.log(div(20, 5));
console.log(div);