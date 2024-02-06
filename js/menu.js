const menuButton = document.querySelector(".menu-button")
menuButton.onclick=() => {
  const sideBarLayout = document.querySelector(".side-bar-layout");
  sideBarLayout.classList.add("side-bar-show");
  const sideBarContainer = document.querySelector(".side-bar-container");
  sideBarContainer.classList.add("side-bar-container-show")
}

const closeButton = document.querySelector(".side-bar-close-button");

closeButton.onclick=() => {
  
  const sideBarLayout = document.querySelector(".side-bar-layout");// 쿼리 선택자
  sideBarLayout.classList.remove("side-bar-show");

  const sideBarContainer = document.querySelector(".side-bar-container");
  sideBarContainer.classList.remove("side-bar-container-show");
}