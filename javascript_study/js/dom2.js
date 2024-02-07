const submitButton = document.querySelector(".input-submit");

submitButton.onclick= () => {
  //alert("알림창");
  const input = document.querySelector(".inputs");
  //alert(input.value);
  const dataList = document.querySelector(".data-list");

  dataList.innerHTML += `<li>${input.value}</li>` // 태그 안에 자식태그 추가 =대입 +=추가
}
/*
  let submitButton = {
    onclick: null
    키:밸류 객체
  }
  submitButton.onclick = function() {}
  submitButton.onclick = () => {}
  onclick 모든 객체 이벤트 속성 드래그 keyDown keyUp Mouse
*/