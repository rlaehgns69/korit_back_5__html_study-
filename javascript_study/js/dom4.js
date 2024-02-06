const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
  const boxContainers = document.querySelectorAll(".box-container")
  boxContainers[0].innerHTML+=`<div class="box"></div>`;// 태그
  // boxContainer.removeChild(); // 객체
  // boxContainer.appendChild();

  const boxList = document.querySelectorAll(".box");

  // boxList[0].onclick = () => {
  //   boxList[0].classList.add("blue-box");
  //   let isBlueBox = boxList[0].classList.contains("blue-box");
  //   alert(isBlueBox);
  // }
  // boxList[1].onclick = () => {
  //   boxList[1].classList.add("red-box");
  // }
  for (let box of boxList) {
    box.onclick = () => {
      let isBlueBox = box.classList.contains("blue-box");
      let isRedBox = box.classList.contains("red-box");

      if(!isBlueBox && !isRedBox){
        box.classList.add("blue-box");
      }else if(isBlueBox && !isRedBox){
        box.classList.remove("blue-box");
        box.classList.add("red-box");
      }else {
        boxContainers[0].removeChild(box);
        boxContainers[1].appendChild(box);
      }
    }
  }
}

