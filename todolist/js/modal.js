
function handleAddTodoModalOpen() {
  const modal = document.querySelector(".root-modal");
  // html 전체 document
  const title = modal.querySelector(".modal-title");
  // root modal안에 태그 셀렉트
  const todoInput = modal.querySelector(".todo-input");
  const submitButton = modal.querySelector(".modal-button");
  title.innerHTML = "추가하기";
  todoInput.value = "";
  submitButton.onclick = handleAddtodoSubmit;

  modal.classList.add("modal-show");
}

function handleAddtodoSubmit() {
  const modal = document.querySelector(".root-modal");
  modal.classList.remove("modal-show")
}

function handleCancelClick() {
  const modal = document.querySelector(".root-modal");
  modal.classList.remove("modal-show");
}