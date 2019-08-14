let evalInput1 = document.getElementById('evalLog1').value
let evalInput2 = document.getElementById('evalLog2').value
///function to find the base
function base() {
let baseInput1 = document.getElementById('findBase1').value
let baseInput2 = document.getElementById('findBase2').value
let answer1 = Math.pow(baseInput1,1/baseInput2)
document.getElementById('baseAnswer').innerHTML = answer1
}

function evaluate(evalInput1,evalInput2) {
evalInput1 = document.getElementById('evalLog1').value
evalInput2 = document.getElementById('evalLog2').value
let answer2 = (Math.log(evalInput2) / Math.log(evalInput1))
document.getElementById('logAnswer').innerHTML = answer2
}

///function to find the base of x
function number() {
let numberInput1 = document.getElementById('findNumber1').value
let numberInput2 = document.getElementById('findNumber2').value
let answer3 = Math.pow(numberInput1,numberInput2)
document.getElementById('numberAnswer').innerHTML = answer3
}
///Event Listners to replace onclick
document.getElementById('submitBase').addEventListener('click',base)
document.getElementById('submitEvaluate').addEventListener('click',evaluate)
document.getElementById('submitNumber').addEventListener('click',number)