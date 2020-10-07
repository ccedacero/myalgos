let submit = document.getElementById("submit");
let name = document.querySelector("#name");
let mobile = document.querySelector("#mobile");
let email = document.querySelector("#email");
let table = document.querySelector("#summaryTable").children[1];

submit.addEventListener("click", (e) => {
  if (checkValidations(email, mobile, name)) {
    let newRow = table.insertRow();
    newName = newRow.insertCell(0);
    newMobile = newRow.insertCell(1);
    newEmail = newRow.insertCell(2);
    tempName = document.createTextNode(name.value);
    tempMobile = document.createTextNode(mobile.value);
    tempEmail = document.createTextNode(email.value);
    newName.appendChild(tempName);
    newMobile.appendChild(tempMobile);
    newEmail.appendChild(tempEmail);
  } else {
    let div = document.createElement("div");
    div.id = "error";
    div.style.color = "red";
    div.innerHTML = "error";
    document.querySelector(".inputContent").appendChild(div);
    // document.body.appendChild(div);
  }
  name.value = "";
  email.value = "";
  mobile.value = "";
});

function checkEmail(email) {
  if (email.value.length <= 40 && email.value.length !== null) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  } else {
    return false;
  }
}

function checkPhoneNumber(number) {
  return number.value.match(/\d/g).length === 10;
}

function checkName(name) {
  if (name.value.length < 20 && name.value.length !== null) {
    return /^[a-z][a-z\s]*$/.test(name.value.toLowerCase());
  } else {
    return false;
  }
}

function checkValidations(email, number, name) {
  console.log(checkEmail(email));
  if (checkEmail(email) && checkPhoneNumber(number) && checkName(name)) {
    return true;
  }
  return false;
}
let myTable = document.querySelector("#summaryTable");
let tableColumn = document.querySelector("#nameColumn");
tableColumn.addEventListener("click", sortTable);
function sortTable(table) {
  let values = myTable.children[1].children;
  for (let row of values) {
    row.cells[0].innerText;
    // myTable.appendChild()
  }
  // My plan here was to sort the values based on the inner text and just append to the end
  // will continue if I have time
}
