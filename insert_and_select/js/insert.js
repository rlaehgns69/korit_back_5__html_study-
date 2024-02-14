async function handleSubmitClick() {
  const dataInputs = document.querySelectorAll(".data-inputs");
  
  const data = {
    name: dataInputs[0].value,
    age: dataInputs[1].value
  };

  // console.log(data);
  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  const dataObj = JSON.parse(jsonData);
  console.log(dataObj);

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonData
  };



//const p
//   fetch("http://localhost:8080/insert_and_select/data/addition", option)
//   .then((response) => {
//     response.json()
//     .then((json) => {
//       console.log(json);
//       console.log("test");
//     })
// }).catch((error) => {
//   console.log("프로미스 예외처리");
//   console.log(error);
// }); 
// 405에러 
// 요청조차되지않으면 프로미스 예외처리
try {

  const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option);
  
  if(!response.ok) {
    throw await response.json();
  } // 요청 실패(400) catch로 
  
  console.log(response);

  const json = await response.json();
  
  console.log(json); 
  
  console.log("test");

} catch(error) {
  console.log(error);
  alert(error.errorMessage);
  // console.log("에러 처리");
  // console.log(error);
}
// 200이든 400이든 정상적으로 요청되면 catch
// await try catch .cath하는 것과 동일

  // console.log("test");
  
    //option 정확하게 모를 때 fetch안에서 사용 가능 method?
  //};
  //fetch 기본get 405오류
}