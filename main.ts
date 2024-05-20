import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {message:"Enter first Number", type: "number", name:"firstNumber"},
    {message:"Enter second Number", type: "number", name:"secondNumber"},
    {
    message:"Select one Operator to perform Operations",
    type: "list", 
    name:"operator",
    choices: ["+","-","*","/"],
},
]);
if (answers.operator === "+"){
console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "-"){
console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "*"){
console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "/"){
console.log(answers.firstNumber / answers.secondNumber)
}
else {
console.log("Please select a valid operator")
}
