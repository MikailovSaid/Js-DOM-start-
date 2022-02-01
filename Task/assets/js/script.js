function sum(){
    let firstNum = parseFloat(document.getElementById("first-num").value)
    let secondNum = parseFloat(document.getElementById("second-num").value) 
    document.getElementById("result").value = firstNum + secondNum;
}
function minus(){
    let firstNum = parseFloat(document.getElementById("first-num").value)
    let secondNum = parseFloat(document.getElementById("second-num").value) 
    document.getElementById("result").value = firstNum - secondNum;
}
function multiply(){
    let firstNum = parseFloat(document.getElementById("first-num").value)
    let secondNum = parseFloat(document.getElementById("second-num").value) 
    document.getElementById("result").value = firstNum * secondNum;
}
function divide(){
    let firstNum = parseFloat(document.getElementById("first-num").value)
    let secondNum = parseFloat(document.getElementById("second-num").value) 
    document.getElementById("result").value = firstNum / secondNum;
}