let submitForm = () => {
    let name = document.getElementById("name").value 
    let mood = document.getElementById("mood").value 

    if (name != "" && mood != "") {
        document.getElementById("details").innerHTML = `Nero Dev welcomes you, ${name} We're glad you are doing ${mood}!`
    }
}

let getQoute = () => {
    let qoute
    let package = prompt("What package would you like to get? \nStarter: $10\nAdvanced: $50\nProfessional: $100 ")
    if (package === "Starter") {
        qoute = 10
    } else if (package === "Advanced") {
        qoute = 50
    } else if (package === "Professional"){
        qoute = 100
    } else {
        qoute = "Please enter a category."
    }
    document.getElementById("qoute").innerHTML = `Your total cost is: $${qoute}`
}

let submitQuestion = () => {
    question = prompt("Please enter a question.")
    alert(`Your question: ${question}, has been sent!`)
}

let submitInterest = () => {
    interest = prompt("Which of our services most interest you? We will remember this for next time!")
    alert(`You answered: ${interest}, thanks!`)
}

let submitFeedback = () => {
    feedback = prompt("How well did we service you? Any feedback is appreciated.")
    alert(`You said: ${feedback}, thanks for answering!`)
}

let submitTicket = () => {
    let ticketTitle = document.getElementById("ticket").value
    let body = document.getElementById("body").value 
    if (ticketTitle != "" && body != "") {
        alert("Ticket submited!")
    } else {
        alert("Please enter a valid entry.")
    }
}