// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const clearAllButton = document.querySelector(".clearAllStudents");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const markInput = studentForm["mark"];

const students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(name, age, mark) {
  students.push({
    name,
    age,
    mark,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, mark };
}


function createStudentsUI({ name, age, mark }) {
  studentsContainer.innerHTML += `
    <div>
    <h2>Student Name: ${name}</h2>
    <p>Student Age: ${age}</p>
    <p>Student Mark: ${mark}</p>
    <p class="closeItem">X</p>
    </div>
  `;
 
}
var closeItem =document.querySelector(".closeItem");
console.log(closeItem)

students.forEach(createStudentsUI);

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    markInput.value
  );

  createStudentsUI(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  markInput.value = "";
});

clearAllButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
  // studentsContainer.innerHTML = "";
});

document.addEventListener("click", function(e){
  if(e.target.classList.contains("closeItem")){
    e.target.parentElement.remove();
    let parent =  e.target.parentElement
    

  }
})