function calculator() {
    num1 = +prompt("Enter First Number : ")
    num2 = +prompt("Enter Second Number : ")
    operator = prompt("Enter an operator ( + , - , * or /) : ")
    if (isNaN(num1) || isNaN(num2) || !["+", "-", "*", "/"].includes(operator)) {
        alert("Invaid number or operator")
    } else {
        if (operator === "+") {
            document.write(num1 + " + " + num2 + " is equal to " + (num1 + num2))
        } else if (operator === "-") {
            document.write(num1 + " - " + num2 + " is equal to " + (num1 - num2))
        } else if (operator === "*") {
            document.write(num1 + " * " + num2 + " is equal to " + (num1 * num2))
        } else if (operator === "/") {
            document.write(num1 + " / " + num2 + " is equal to " + (num1 / num2))
        }
    }
}
calculator();