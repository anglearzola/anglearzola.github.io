function chessButton() {
	document.getElementById('yearsDone').innerHTML = "Years Done:" + " Freshman Year and Sophomore Year"
	document.getElementById('description').innerHTML = "Description:" + " In chess club we played against each other. I was JV in chess"
	document.getElementById('clubDiv').style.backgroundImage = "url('/assets/chess.jpeg')"
	document.getElementById('clubName').innerHTML = "Chess Club"
}
function computerButton() {
	document.getElementById('yearsDone').innerHTML = "Years Done:" + " Freshman Year + Sophomore Year"
	document.getElementById('description').innerHTML = "Description:" + " In computer club we learned a bit of Python and discussed things like AI and ate snacks"
	document.getElementById('clubDiv').style.backgroundImage = "url(/assets/computer.jpg)"
	document.getElementById('clubName').innerHTML = "Computer Club"
}
function dndButton() {
	document.getElementById('yearsDone').innerHTML = "Years Done:" + " Freshman Year + Sophomore Year"
	document.getElementById('description').innerHTML = "Description:" + " I was one of the people who started Dungeons and Dragons club by approaching teachers to host us. We played games of D&D and formed a D&D community at school by making people interested in it"
	document.getElementById('clubDiv').style.backgroundImage = "url(/assets/dnd1.jpg)"
	document.getElementById('clubName').innerHTML = "Dungeons and Dragons Club"
}
function helpingHandsButton() {
	document.getElementById('yearsDone').innerHTML = "Years Done:" + " Freshman Year"
	document.getElementById('description').innerHTML = "Description:" + " In helping hands club, we planned some school events and collected money at lunch for hurricane relief. I was able to help at Freshman orientation through this club"
	document.getElementById('clubDiv').style.backgroundImage = "url(/assets/hh.jpg)"
	document.getElementById('clubName').innerHTML = "Helping Hands Club"
}
function pingPongButton() {
	document.getElementById('yearsDone').innerHTML = "Years Done:" + " Junior Year"
	document.getElementById('description').innerHTML = "Description:" + " Two friends and I started this club in Junior year. It was already a club, but wasn't continued. We got the original teacher and restarted the club."
	document.getElementById('clubDiv').style.backgroundImage = "url(/assets/pp.jpg)"
	document.getElementById('clubName').innerHTML = "Ping Pong Club"
}
let currentJobIndex = 0
let currentJobItem = document.getElementsByClassName('card')[0]
let lastJobItem = false
const leftArrowFunc1 = () => {
  if (currentJobIndex <= 4) {
    lastJobItem = false
  }
  if (currentJobIndex === 0) {
    currentJobIndex = 4
    document.getElementsByClassName('card')[0].style.display = 'none'
    document.getElementsByClassName('card')[4].style.display = 'inline-block'
    currentJobItem = document.getElementsByClassName('card')[4]
    lastJobItem = true
  }
  if (currentJobIndex > 0 && lastJobItem === false) {
    currentJobItem.style.display = 'none'
    currentJobIndex = currentJobIndex - 1
    currentJobItem = document.getElementsByClassName('card')[currentJobIndex]
    currentJobItem.style.display = 'inline-block'
  }
}
const rightArrowFunc1 = () =>  {
  if (currentJobIndex <= 4) {
    lastJobItem = false
  }
  if (currentJobIndex >= 4) {
    document.getElementsByClassName('card')[4].style.display = 'none'
    document.getElementsByClassName('card')[0].style.display = 'inline-block'
    currentJobIndex = 0
    currentJobItem = document.getElementsByClassName('card')[0]
    lastJobItem = true
  }
  if (currentJobIndex < 4 && lastJobItem === false) {
    currentJobItem.style.display = 'none'
    currentJobIndex = currentJobIndex + 1
    currentJobItem = document.getElementsByClassName('card')[currentJobIndex]
    currentJobItem.style.display = 'inline-block'
  }
}

let currentSkillIndex = 0
let currentSkillItem = document.getElementsByClassName('card2')[0]
let lastSkillItem = false
const leftArrowFunc2 = () => {
  if (currentSkillIndex <= 7) {
    lastSkillItem = false
  }
  if (currentSkillIndex === 0) {
    currentSkillIndex = 7
    document.getElementsByClassName('card2')[0].style.display = 'none'
    document.getElementsByClassName('card2')[7].style.display = 'inline-block'
    currentSkillItem = document.getElementsByClassName('card2')[7]
    lastSkillItem = true
  }
  if (currentSkillIndex > 0 && lastSkillItem === false) {
    currentSkillItem.style.display = 'none'
    currentSkillIndex = currentSkillIndex - 1
    currentSkillItem = document.getElementsByClassName('card2')[currentSkillIndex]
    currentSkillItem.style.display = 'inline-block'
  }
}
const rightArrowFunc2 = () =>  {
  if (currentSkillIndex <= 7) {
    lastSkillItem = false
  }
  if (currentSkillIndex >= 7) {
    document.getElementsByClassName('card2')[7].style.display = 'none'
    document.getElementsByClassName('card2')[0].style.display = 'inline-block'
    currentSkillIndex = 0
    currentSkillItem = document.getElementsByClassName('card2')[0]
    lastSkillItem = true
  }
  if (currentSkillIndex < 7 && lastSkillItem === false) {
    currentSkillItem.style.display = 'none'
    currentSkillIndex = currentSkillIndex + 1
    currentSkillItem = document.getElementsByClassName('card2')[currentSkillIndex]
    currentSkillItem.style.display = 'inline-block'
  }
}
document.getElementById('leftArrowDiv1').addEventListener('click',leftArrowFunc1)
document.getElementById('rightArrowDiv1').addEventListener('click',rightArrowFunc1)
document.getElementById('leftArrowDiv2').addEventListener('click',leftArrowFunc2)
document.getElementById('rightArrowDiv2').addEventListener('click',rightArrowFunc2)
