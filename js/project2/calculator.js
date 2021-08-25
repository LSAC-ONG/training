function applyOperation(operator, numbers) {
    switch (operator) {
        case "+":
            /**
             * numbers = array of strings initially
             * For all the other operations the conversion (string -> float) is made implicitly since strings
             * can't be divided or something else.
             *
             * But here + can also be used for strings to concatenate them ("1" + "2")
             * To make the addition we have to convert them into floats first
             */
            return parseFloat(numbers[0]) + parseFloat(numbers[1]);
        case "-":
            return numbers[0] - numbers[1];
        case "×":
            return numbers[0] * numbers[1];
        case "÷":
            return numbers[0] / numbers[1];
        default:
            return -1;
    }
}

document.querySelectorAll(".digit").forEach((digitElement) => {
    digitElement.addEventListener("click", () => {
        document.querySelector(".result").innerHTML += digitElement.innerHTML;
    });
});

document.querySelectorAll(".operator").forEach((operatorElement) => {
    operatorElement.addEventListener("click", () => {
        document.querySelector(".result").innerHTML += operatorElement.innerHTML;
    });
});

document.querySelector(".clear").addEventListener("click", () => {
    document.querySelector(".result").innerHTML = "";
});

document.querySelector(".point").addEventListener("click", () => {
   document.querySelector(".result").innerHTML += ".";
});

document.querySelector(".equal").addEventListener("click", () => {
    const result = document.querySelector(".result");
    const numbers = result.innerHTML.split(/[+\-×÷]/g);
    const operator = result.innerHTML.charAt(result.innerHTML.indexOf(numbers[1]) - 1);
    console.log(operator + numbers);
    result.innerHTML = applyOperation(operator, numbers);
});
