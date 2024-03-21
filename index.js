import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation ",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Divion"],
    },
]);
// conditional Statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Divion") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}
else {
    console.log("please select Valid operator");
}
