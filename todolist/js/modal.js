// window.onload = () => {
//   const day=["일","월","화","수","목","금","토"]
//   let now = new Date();
//   console.log(now.getFullYear());
//   console.log(now.getMonth()+1);// js 0월부터 계산
//   console.log(now.getDate());
//   console.log(day[now.getDay()]);//0일 3-수요일

//   let arr = new Array();
//   let obj = {
//     id: 1,
//     name: "김준일",
//   }
//   let obj2 = {
//     id: 2,
//     name: "김준일",
//   }

//   arr.push(obj);
//   arr.push(obj2);

//   console.log(arr);

//   console.log(JSON.stringify(arr));
//   console.log(JSON.stringify(obj));
//   console.log(JSON.stringify(obj2));
//    자바스크립트 표준객체 JSON

//   let jsonArr = JSON.stringify(arr);

//   console.log(JSON.parse(jsonArr));
// }

window.onkeyup = (e) => {
  if(e.keyCode == 27) {
    handleCancelClick();
  }
}
// window 전체영역
function handleAddTodoModalOpen() {
  const modal = document.querySelector(".root-modal");
  // html 전체 document
  const title = modal.querySelector(".modal-title");
  // root modal안에 태그 셀렉트
  const todoInput = modal.querySelector(".todo-input");
  const submitButton = modal.querySelector(".modal-button");
  title.innerHTML = "추가하기";
  todoInput.value = "";
  submitButton.onclick = handleAddTodoSubmit;

  todoInput.onkeydown = (e) => {
    if(e.ctrlKey && e.keyCode === 13) {
     submitButton.click();
    }
  }

  modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) {
  const modal = document.querySelector(".root-modal");
  // html 전체 document
  const title = modal.querySelector(".modal-title");
  // root modal안에 태그 셀렉트
  const todoInput = modal.querySelector(".todo-input");
  const submitButton = modal.querySelector(".modal-button");
  title.innerHTML = "수정하기";

  let todoListJson = localStorage.getItem("todoList");
  let todoList = todoListJson !==null ? JSON.parse(todoListJson) : new Array();

  let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0];

  todoInput.value = findTodoByTodoId.content;
  submitButton.onclick = () => handleEditTodoSubmit(todoId);// 함수호출x(실행결과) onclick에 함수정의하라(함수정의 대입).
  // 함수를 대입 / 함수의결과x
  // 함수 호출 변수정의 명확
  todoInput.onkeydown = (e) => {
    if(!e.shiftKey && e.keyCode === 13) {
     submitButton.click();
    }
  }

  modal.classList.add("modal-show");
}

function convertDateKor(currentdate) {
  const dayKors=["일","월","화","수","목","금","토"];
  const year=currentdate.getFullYear();
  const month = currentdate.getMonth()+1;
  const date = currentdate.getDate();
  const day = dayKors[currentdate.getDay()];
  return `${year}년 ${month}월 ${date}일 (${day})`;
}

function handleAddTodoSubmit() {
  const modal = document.querySelector(".root-modal");
  const todoInput = document.querySelector(".todo-input");
  modal.classList.remove("modal-show")

  
  let todoListJson = localStorage.getItem("todoList");
  let todoList = todoListJson !==null ? JSON.parse(todoListJson) : new Array();
  
  let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;
  

  let todoObject = {
    todoId: lastTodoId + 1,
    content: todoInput.value,
    date: convertDateKor(new Date())
  }
  
  todoList.push(todoObject);

  localStorage.setItem("todoList", JSON.stringify(todoList));
  getTodoList();
}

function handleEditTodoSubmit(todoId) {
  const modal = document.querySelector(".root-modal");
  modal.classList.remove("modal-show")

  let todoListJson = localStorage.getItem("todoList");
  let todoList = todoListJson !==null ? JSON.parse(todoListJson) : new Array();
  let findIndex = -1;

  for(let i = 0; i < todoList.length; i++){
    if(todoList[i].todoId === todoId) {
      findIndex = i;
      break;

    }
  }
  // filter x [a, b ,c] [b] 값복사 정확하게 배열의 값변경하고자 함.
  if(findIndex === -1) {
    alert("수정오류!");
    return;
  }
  todoList[findIndex].content =document.querySelector(".todo-input").value;
  todoList[findIndex].date = convertDateKor(new Date());

  localStorage.setItem("todoList",JSON.stringify(todoList));
  //덮어쓰기
  getTodoList();
}

function handleCancelClick() {
  const modal = document.querySelector(".root-modal");
  modal.classList.remove("modal-show");
  
}