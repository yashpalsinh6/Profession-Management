let employees = [];

const form = document.getElementById('employeeForm');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const employeeList = document.getElementById('employeeList');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (name.trim() === '' || profession.trim() === '' || age.trim() === '') {
    errorMessage.innerText = 'Please fill in all fields.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    const id = employees.length + 1;
    const newEmployee = { id, name, profession, age: parseInt(age) };
    employees.push(newEmployee);
    renderEmployees();
    errorMessage.style.display = 'none';
    successMessage.innerText = 'Employee added successfully.';
    successMessage.style.display = 'block';
    form.reset();
  }
});

function renderEmployees() {
  employeeList.innerHTML = '';
  employees.forEach(employee => {
    const div = document.createElement('div');
    div.innerHTML = `<p>ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}</p>
                     <button onclick="deleteEmployee(${employee.id})">Delete</button>`;
    employeeList.appendChild(div);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
}