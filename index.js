let screenView = document.getElementById("view")
const seven = document.getElementById("7")
seven.addEventListener("click", function() {
    screenView.textContent +="7"
})
const eight = document.getElementById("8").addEventListener("click", function() {
    screenView.textContent +="8"
})
const nine = document.getElementById("9").addEventListener("click", function() {
    screenView.textContent += "9"
})
const four = document.getElementById("4").addEventListener("click", function() {
    screenView.textContent += "4"
})
const five = document.getElementById("5").addEventListener("click", function() {
    screenView.textContent += "5"
})
const six = document.getElementById("6").addEventListener("click", function() {
    screenView.textContent += "6"
})
const one = document.getElementById("1").addEventListener("click", function() {
    screenView.textContent += "1"
})
const two = document.getElementById("2").addEventListener("click", function() {
    screenView.textContent += "2"
})
const three = document.getElementById("3").addEventListener("click", function() {
    screenView.textContent += "3"
})
const zero = document.getElementById("0").addEventListener("click", function() {
    screenView.textContent += "0"
})

const clear = document.getElementById("c").addEventListener("click", function() {
    screenView.textContent = ""
})



