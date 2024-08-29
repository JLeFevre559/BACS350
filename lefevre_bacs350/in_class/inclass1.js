const prompt = require("prompt-sync")();

function bmi_calculator(bmi) {
    if (bmi < 18.5){
        return "Underweight";
    }
    else if (bmi < 25){
        return "Normal weight"
    }
    else if (bmi < 30){
        return "Overweight"
    }
    else{
        return "Obese"
    }
}



let x = true;
let input_history = [];
while(x){
    console.log("BMI Calculator");
    var input = prompt("Enter your BMI or QUIT to exit: ");
    if(input.toUpperCase() == "QUIT"){
        console.log("Exiting program");
        console.log("Input history: ", input_history);
        x = false;
    }
    else if(isNaN(input) || input < 0){
        console.log("Invalid input. Input must be a number or QUIT to exit.");
    }
    else{
        let bmi = parseFloat(input);
        input_history.push(bmi + " --- " + bmi_calculator(bmi));
        console.log(input, "is", bmi_calculator(bmi));
    }
}