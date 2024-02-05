// const submitButton=document.querySelector(".input-submit");
// submitButton.onclick= () => {

//   const input = document.querySelectorAll("input")
//   alert(input.value);
//   const tableList = document.querySelector(".table-list")

//   tableList.innerHTML +=`<tr>
//   <th>${1++}</th>
//   <th>${input.values[1]}</th>
//   <th>${input.values[2]}</th>
//   <th>${input.values[3]}</th>
//   </tr>`

// }
let index =1;
const appendButton = document.querySelector(".append-button");

appendButton.onclick = () => {
  const textInputs = document.querySelectorAll(".text-inputs")
  const dataTableBody = document.querySelector(".data-table-body")

  dataTableBody.innerHTML += `
    <tr>
        <td>${index}</td>
        <td>${textInputs[0].value}</td>
        <td>${textInputs[1].value}</td>
        <td>${textInputs[2].value}</td>
    </tr>
  `;
  index++;

  for(let input of textInputs) {
    input.value="";
  }
}