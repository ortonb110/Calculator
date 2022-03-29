let screenView = document.getElementById("view") //Input viewport
const equalSign = document.getElementById("equal")
let resultDisplayed = false

//Adding click event handler to clear screen
const clear = document.getElementById("c").addEventListener("click", function() {
    screenView.textContent = ""
    resultDisplayed = false
})

//Adding event handlers to all numbers
let numbers = document.querySelectorAll(".number-characters button")
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(e) {
        let currentString = screenView.textContent
        let lastCharacter = currentString[currentString.length - 1]

        if (resultDisplayed === false){
            screenView.textContent += e.target.textContent 
        } 
        else if (resultDisplayed ===true & lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "x" || lastCharacter === "/") {
            //If result is displayed and user entered an operator result is set to false and operator is concatenated to result string
            screenView.textContent += e.target.textContent
            resultDisplayed = false
        }
    
        else {
            //If result is currently displayed and user enters a number, we clear screen and add entered number
            screenView.textContent = e.target.textContent
            resultDisplayed = false

        }
    })
}

//Adding event handler to all operators
let operators = document.querySelectorAll(".operators button")
for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(e) {
        let curString = screenView.textContent
        let lastCha = curString[curString.length -1]
     
    //If operator entered is same as the currently display operator, don't add more
        if (lastCha === "+" || lastCha === "-" || lastCha === "x" || lastCha=== "÷"){
            let newString = curString.substring(0, curString.length-1) + e.target.textContent
            screenView.textContent = newString 
         } 
         else if (curString.length === 0) {
             //Don't add any operator
         }
        else {
            screenView.textContent += e.target.textContent 
            
        }
    })
    
}

//Setting up equal sign handler
equalSign.addEventListener("click", function() {
    let screenViewString = screenView.textContent
    //Forming an array of numbers
    let numbers = screenViewString.split(/\+|\-|\x|\÷/g);
    console.log(numbers)
    //Forming an array of operators
    let operators = screenViewString.replace(/[0-9]|\./g, "").split("")
    console.log(operators)

    //looping through array to do calculations at a time

    let divide = operators.indexOf("÷")
    while(divide != -1 ) {
        numbers.splice(divide, 2, numbers[divide]/ numbers[divide +1])
        operators.splice(divide, 1)
        divide = operators.indexOf("÷")
    }

    let multiply = operators.indexOf("x")
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
      }

    

    let subtraction = operators.indexOf("-")
    while(subtraction != -1) {
        numbers.splice(subtraction, 2, numbers[subtraction] - numbers[subtraction +1])
        operators.splice(subtraction, 1)
        subtraction = operators.indexOf("-")
    }
    let addition = operators.indexOf("+")
    while(addition != -1) {
        numbers.splice(addition, 2, parseFloat(numbers[addition]) + parseFloat(numbers[addition +1]) )
        operators.splice(addition, 1)
        addition = operators.indexOf("+")
    }

    screenView.textContent = numbers[0]
    resultDisplayed = true

})



