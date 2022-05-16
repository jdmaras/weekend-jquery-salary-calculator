USING AN ARRAAAAAAAAY

roster = []

function handleClick(){
  let firstNameInput = $(`#firstName`).val();
  let lastNameInput = $(`#lastName`).val();
  let idInput = $(`#identification`).val();
  let titleInput = $(`#title`).val();
  let annualSalaryInput = $(`#annualSalary`).val();

  const newEmployee = {
    firstName: firstNameInput,
    lastName: lastNameInput,
    ID: idInput,
    titleInput: titleInput,
    annualSalaryInput: annualSalaryInput

    roster.push(newEmployee);

    $(`.field`).val(``);
    //clear all inputs - .field is a ID of field wrapped around
    renderEmployees()
    //calling the function within the start
  }
}
let runningTotal = 0

function renderEmployees(){
    $(`#target`).empty(``);
    // #target is 
    //empty that input so it doesn't loop infinitely
    for(let employee of roster){
        console.log(employee)
        runningTotal += employee.annualSalaryInput

        $(`#target`).append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.titleInput}</td>
            <td>${employee.annualSalaryInput}</td>
        </tr>
        `)
    } 
    console.log(runningTotal);
    let monthlyTotal = runningTotal / 12;
    $(`#monthly`).text(monthlyTotal);
}

