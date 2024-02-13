
// spread 연산
// 배열, 객체
// let array = [1, 2, 3 , 4];
// array.push(5);
// array = [...array, 5, ...array]; // ...array 배열전체요소 복사, 뒤에 추가 5,6... ...array
// // 배열 새로운 배열을 만들겠다.
// console.log(array);

// let obj3 = {
//   name: "김준일",
//   age: 31
// }
// // 객체에서도 사용가능 객체요소 복사
// let obj2 = {
//   ...obj3,
//   name: "김준이",
//   name: "김준삼" // 키값 중복 x 재설정 
// }
// // 새로운 객체를 만들겠다.
// console.log(obj);
// console.log(obj2);

// 비구조 할당
// let obj = {
//   id: 1,
//   name: "김준일",
//   age: 31
// }
// let {id, name, age} = obj;
// console.log(id);

let dataList = new Array();// let dataList = []; 태그 열리면 실행

window.onload = () => {
  getDataList();

  const addInput = document.querySelector(".add-input");
  addInput.onkeyup = (e) => {
    if(e.keyCode === 13) {
        const inputValue = addInput.value;
        
        const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;// 마지막인덱스의 id값 길이가 0이면 첫번째 
        //[dataObj1={id: 1, content: inputValue}, dataObj2]

        const dataObj = {
          id: lastId + 1, //빈배열일 때 index 0 -> id는 1
          content: inputValue
        }
        fetch("http://localhost:8080/data_array/data/addition", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(dataObj)
        });

        dataList = [...dataList, dataObj]; // 기존의 리스트(빈) dataObj추가
        //dataList.push
        addInput.value="";

        getDataList();
    }
  }
}
function ContentData({id, content}) {
  return`
  <li>
    <span>${id}번</span>
    <span>${content}</span>
    <input type ="text" class="edit-input" value="${content}" />
    <button onclick="editData(${id})">수정</button>
    <button onclick="removeData(${id})">삭제</button>
  </li>
  `;
}


// 온로드되기전 생성
function getDataList() {
  const contentList = document.querySelector(".content-list");

  contentList.innerHTML="";// ul 안에 li(html)지운다. 지우고 list안에 들어있는 li만큼 복사

  for(let dataObj of dataList) {
    contentList.innerHTML += ContentData(dataObj);
  }
}
// function findId(dataObj) {
//    return dataObj.id === 1;
// }

function removeData(id) {
  // id 접근 가능
  const findId = (dataObj) => dataObj.id !== id;

  // const findId = () =>{} 
  // function() {}
  // 함수 매개변수함수
  // [{id: 1, content: "test1"},{id: 2, content: "test2"},{id: 3, content: "test3"}매개변수로 전달(객체),..}]
  // [{id: 1, content: "test1"}] 필터 배열 
  dataList = dataList.filter(findId);
  // dataList.filter((dataObj) => dataObj.id !== id); map이랑 똑같다.
  // [{id:1, contetns:"test1"}, {id: 2, content: "test2"}]

  getDataList();
}

function editData(id) {
  let findIndex = -1;

  // for(let i=1; i <dataList.length; i++) {
  //   if(dataList[i].id === id) {
  //     findIndex = i;
  //     break;
  //   }
  // }

  let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];

  findIndex = dataList.indexOf(findObj);

  const editInputs = document.querySelectorAll(".edit-input");

  dataList[findIndex].content = editInputs[findIndex].value;

  getDataList();
}