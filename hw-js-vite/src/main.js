import './style.css'
import studentsJSON from './json/students.json';

let dataArray = [];
let dataJSON = '';

dataArray = studentsJSON;

console.log("dataArray:", dataArray)

localStorage.setItem('students', JSON.stringify(dataArray))

const dataArrayLocalStorage = localStorage.getItem('students', dataArray)

console.log("dataArrayLocalStorage: ", dataArrayLocalStorage)

const studentsList = document.getElementById('students-list')

studentsList.innerHTML = dataArray.map(student => {
  return `
    <li class="studentItem">
      <h3>Ім'я: ${student.firstName}</h3>
      <h3>Прізвище: ${student.lastName}</h3>
      <p>Вік: ${student.age}</p>
      <p>Курс: ${student.course}</p>
      <p>Факльтет: ${student.faculty}</p>
    </li>
    `
}).join('');