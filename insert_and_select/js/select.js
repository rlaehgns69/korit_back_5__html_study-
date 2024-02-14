async function handleSearchClick() {
  try {
    const response = await fetch("http://localhost:8080/insert_and_select/data/list");
    //option x 보내줄 데이터 x 기본값이 get
    if(!response.ok) {
      throw await response.json();
    }

    const responseData = await response.json();
    // responseData.data 리스트

    const studentList = document.querySelector(".student-list");
    studentList.innerHTML =``;
    for(let student of responseData.data) {
      studentList.innerHTML +=`
        <li>studentId: ${student.studentId} / name: ${student.name} / age: ${student.age}</li>
      `;
    }

  } catch(error) {
    console.log(error);
  }
}