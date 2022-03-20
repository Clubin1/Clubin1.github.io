let person = []
let salaries = []

function addSalary(){
    let name = document.getElementById("name").value
    let salary = document.getElementById("salary").value
    
    if (name == ""){
        alert("Enter Name")
    }
    if (salary == ""){
        alert("Enter Salary")
    }
    if (name != "" && salary!= ""){
        person.push(name)
        salaries.push(salary)
        alert("Added")
    }     
}
function displayResults(){
    let highest = 0
    let average = 0
    for (let j = 0; j < salaries.length; j++){
        average += salaries[j]
        if (salaries[j] > highest){
            highest = salaries[j]
        }
    }
    if (salaries.length != 0){
        average = average/salaries.length
    }
    let result = document.getElementById("results")
    result.innerHTML = "<h2>Highest Salary</h2>" + "<p>" + highest + "</p>" + "<h2>Average Salary</h2>" + "<p>" + average + "</p>"
}
function displaySalary(){
    let table = document.getElementById("result_table")
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>"
    for (let j = 0; j < person.length; j++){
        table.innerHTML += "<tr><td>" + person[j] + "</td><td>" + salaries[j] + "</td></tr>"
    }
}
function displayEmployees(){
    let employees = document.getElementById("employees")
    employees.innerHTML = ""
    for (let j = 0; j < person.length; j++){
        employees.innerHTML += "<option>" + person[j] + "</option>"
    }      
}