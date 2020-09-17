

const showBudget = () => {
   
    const resultBudget = document.querySelector('#addBudget').value

    if(!resultBudget){
      alert('Please fill some budget')
    } else {
      document.querySelector('#displayBudget').textContent = `$${resultBudget}`
    }
}


const showExpense = () =>{
    const resultBudget = document.querySelector('#addBudget').value
    const resultExpense = document.querySelector('#expenseAmount').value
    const resultBalance = resultBudget - resultExpense

    if(resultExpense > resultBudget){
        alert('please spend less money than your Budget')
    } else {
        document.querySelector('#displayExpense').textContent = `$${resultExpense}`
        document.querySelector('#displayBalance').textContent = `$${resultBalance}`
    }
}


var row = 1
var entry = document.getElementById("entry")
entry.addEventListener("click", displayDetails)

function displayDetails(){
  var expenseDescription = document.getElementById("expenseDescription").value;
  var expenseAmount = document.getElementById("expenseAmount").value;


  if(!expenseDescription || !expenseAmount){
    alert("Please fill all the boxes")
    return
  }

var display = document.getElementById("display")
var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0)
cell1.innerHTML = num+1

var cell2 = newRow.insertCell(1)
cell2.innerHTML = expenseDescription;

var cell3 = newRow.insertCell(2)
cell3.innerHTML = expenseAmount;

var cell4 = newRow.insertCell(3)
cell4.innerHTML = `<a>Edit</a> <a>Delete</a>`

row++;
}

