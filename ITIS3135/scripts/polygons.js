let getShape = () => {
    let input = "";
    while (input === "") {
        input = prompt("Enter a number for JTT to convert to a polygon.");
        validateEntry(input);
    }
    
}

let validateEntry = (input) => {
    input = Math.ceil(Math.abs(input))
    if (input >= 0 && input <= 10) {
        if (input === 1){
            input = "henagon";
        }
        else if (input === 2){
            input = "digon";
        }
        else if (input === 3){
            input = "trigon";
        }
        else if (input === 4){
            input = "tetragon";
        }
        else if (input === 5){
            input = "pentagon";
        }
        else if (input === 6){
            input = "hexagon";
        }
        else if (input === 7){
            input = "heptagon";
        }
        else if (input === 8){
            input = "octagon";
        }
        else if (input === 9) { 
            input = "enneagon";
        }
        else if (input === 10){
            input = "decagon";
        }
        else {
            input = "error";
        }
        document.getElementById("output").innerHTML = "Your polygon is a "
        + input + ".";
    } else {
        document.getElementById("output").innerHTML = "Enter a valid range of 1-10";
    }
}