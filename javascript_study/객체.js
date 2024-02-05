// 자바스크립트 객체 형태 = { key: value, key: value }
let student = {
  name:"김준일",
  age: 31
} //클래스 x

console.log(student);
console.log(typeof(student));
console.log(student.name);// 객체 참조

class Student {
  name;
  age;
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let s = new Student(); //클래스
s.name = "김준이";
s.age = 32;
console.log(s);

let s2= new Student("김준삼",33);
console.log(s2);

// 자료형이 없기 때문에 오버로딩 하지 않음.

class User {
  #username;
  password;
  // private getter setter

  set setUsername(username) {
    this.#username = username;
  }

  get username() {
    return this.#username;
  }
}

let user = new User();
user.setUsername="dhoon"; // 대입->호출
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "junil");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("password"));
