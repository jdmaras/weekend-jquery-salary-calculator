$(document).ready(onReady);

let initalAmount = 0;

function onReady() {
  $(document).on("click", "#submitButton", submitInputField);
  $(document).on(`click`, `.deleteButton`, clickOnDelete);
}
function submitInputField() {
  let firstNameInput = $(`#firstName`).val();
  console.log(`First Name: `, firstNameInput);
  //tests that this submits to the console
  let lastNameInput = $(`#lastName`).val();
  console.log(`Last Name: `, lastNameInput);
  let idInput = $(`#identification`).val();
  console.log(`ID: `, idInput);
  let titleInput = $(`#title`).val();
  console.log(`Title: `, titleInput);
  let annualSalaryInput = $(`#annualSalary`).val();
  console.log(`Annual Salary: `, annualSalaryInput);
  $(`.salaryCalculatorTable`).append(`
        <tr>
            <td>${firstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${idInput}</td>
            <td>${titleInput}</td>
            <td>${annualSalaryInput}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
    `);

  annualSalaryAdder();

  $(`#firstName`).val(``);
  $(`#lastName`).val(``);
  $(`#identification`).val(``);
  $(`#title`).val(``);
  $(`#annualSalary`).val(``);
}
function clickOnDelete() {
  console.log(`Is Delete Button Connected?`);
  //$(this).parents(`tr`).remove();
  $(this).parents(`tr`).remove();
}

function annualSalaryAdder() {
  let individualSalaryTotal = $(`#annualSalary`).val();
  initalAmount += Number(individualSalaryTotal);
  //Why must I put Number in front and why isn't it green?
  console.log("Total Equals: ", initalAmount);
}

//boarder-collapse: collapse; - look into those
// th, td{
//   border: 1px, solid; - look into those
console.log("Funyons Are Gross");
