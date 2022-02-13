getDetails = () => {
    let person = prompt("Please enter your name: ");
    if (person != null){
        document.getElementById("details").innerHTML = "Hello " + person
    }
}