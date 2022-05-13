$(document).ready(onReady);
function onReady() {
  $(document).on("click", "#submitButton", submitInputField);
}
function submitInputField() {
  let firstNameInput = $(`#firstName`).val();
  console.log("First Name: ", firstNameInput);
  //tests that this submits to the console
  let lastNameInput = $(`#lastName`).val();
  console.log("Last Name: ", lastNameInput);
  let idInput = $(`#identification`).val();
  console.log("ID: ", idInput);
  let titleInput = $(`#title`).val();
  console.log("Title: ", titleInput);
  let annualSalaryInput = $(`#annualSalary`).val();
  console.log("Annual Salary: ", annualSalaryInput);
  $("#salaryCalculatorTable").append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${identification}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
        </tr>
    `);
  $(`#firstName`).val(``);
  $(`#lastName`).val(``);
  $(`#identification`).val(``);
  $(`#title`).val(``);
  $(`#annualSalary`).val(``);
}

//boarder-collapse: collapse; - look into those
// th, td{
//   border: 1px, solid; - look into those
console.log("Funyons Are Gross");
