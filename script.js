// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

// Added array to store the employee information, declared globally 
const employeesArray = []; 

//  Declared employee objects globally
let employee = {
  firstName: '',
  lastName: '',
  salary: '',

};
const collectEmployees = function () {
  let addEmployee = true; 

  // Started while loop
 while (addEmployee === true) {
  
  employee = {
    firstName: '',
    lastName: '',
    salary: '',
  
  };
  
  // Added prompts for objects 
  employee.firstName = prompt("Enter employee first name");

  employee.lastName = prompt("Enter employee last name");
  
  employee.salary = parseInt(prompt("Enter employee's salary"));

  //created isNaN function for salary
  if (isNaN(employee.salary)) {
    employee.salary = 0;
  };
  //Added OK/cancel prompt using confirm for adding another employee
  if (!confirm("Add another employee?")) 
    { addEmployee = false; };

  //Pushed employee objects into the array and console logged employees array
employeesArray.push(employee);
console.log(employeesArray);
    }

    //VERY IMPORTANT: must return everything from array or entire function will not work
return employeesArray;

  }

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let sum = 0;
  
  employeesArray.forEach(employee => {
    sum += employee.salary
  });
let averageSalary = (sum / employeesArray.length) ;

console.log(`The average salary between our ${employeesArray.length} employees is ${averageSalary}.`);

};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

