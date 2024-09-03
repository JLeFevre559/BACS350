const prompt = require("prompt-sync")();

function bmi_checker(bmi) {
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

function bmi_calculator(height, weight){
    let bmi = (weight / (height * height));
    return bmi;
}

let x = true;
let input_history = [];
while(x){
    console.log("BMI Calculator");
    var input = prompt("Enter anything to continue or QUIT to exit: ");
    if(input.toUpperCase() == "QUIT"){
        console.log("Exiting program");
        console.log("Input history: ", input_history);
        x = false;
    }
    else{
        let height = prompt("Enter your height in inches: ");
        let weight = prompt("Enter your weight in pounds: ");
        if(isNaN(height) || isNaN(weight) || height < 0 || weight < 0){
            console.log("Invalid input. Height and weight must be numbers.");
            continue;
        }
        height = parseFloat(height)/39.3701;
        weight = parseFloat(weight)/2.20462;
        let bmi = bmi_calculator(height, weight);
        input_history.push(height, "meters ---", weight, "kg ---",bmi + " --- " + bmi_checker(bmi));
        console.log(height, "meters ---", weight, "kg ---",bmi + " --- " + bmi_checker(bmi));
    }
}