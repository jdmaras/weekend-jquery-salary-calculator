$(document).ready(onReady);

let initalAmount = 138000;

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
  $(this).parents(`tr`).remove();
}

function annualSalaryAdder() {
  let individualSalaryTotal = $(`#annualSalary`).val();
  let totalMoney = (initalAmount += Number(individualSalaryTotal));
  //Why must I put Number in front and why isn't it green?
  $(`#totalMath`)
    .empty()
    .append((initalAmount / 12).toFixed(2));
  //chaining empty and append so that it empties the value before appending
  if (totalMoney > 20000) {
    $(`#totalMath`).addClass(`overLimitRed`);
  } else {
    $(`#totalMath`).removeClass(`overLimitRed`);
  }
  //.toFixed(2) rounds it to first 2 decimals
}
console.log("Funyons Are Gross");
