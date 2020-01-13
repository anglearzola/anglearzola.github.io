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
let currentJobItem = document.getElementsByClassName('jobCard')[0]
let lastJobItem = false
const jobProgress = () =>  {
  if (currentJobIndex <= 4) {
    lastJobItem = false
  }
  if (currentJobIndex >= 4) {
    document.getElementsByClassName('jobCard')[4].style.display = 'none'
    document.getElementsByClassName('jobCard')[0].style.display = 'inline-block'
    currentJobIndex = 0
    currentJobItem = document.getElementsByClassName('jobCard')[0]
    lastJobItem = true
  }
  if (currentJobIndex < 4 && lastJobItem === false) {
    currentJobItem.style.display = 'none'
    currentJobIndex = currentJobIndex + 1
    currentJobItem = document.getElementsByClassName('jobCard')[currentJobIndex]
    currentJobItem.style.display = 'inline-block'
  }
}

let currentSkillIndex = 0
let currentSkillItem = document.getElementsByClassName('skillCard')[0]
let lastSkillItem = false
const skillProgress = () =>  {
  if (currentSkillIndex <= 4) {
    lastSkillItem = false
  }
  if (currentSkillIndex >= 4) {
    document.getElementsByClassName('skillCard')[4].style.display = 'none'
    document.getElementsByClassName('skillCard')[0].style.display = 'inline-block'
    currentSkillIndex = 0
    currentSkillItem = document.getElementsByClassName('skillCard')[0]
    lastSkillItem = true
  }
  if (currentSkillIndex < 4 && lastSkillItem === false) {
    currentSkillItem.style.display = 'none'
    currentSkillIndex = currentSkillIndex + 1
    currentSkillItem = document.getElementsByClassName('skillCard')[currentSkillIndex]
    currentSkillItem.style.display = 'inline-block'
  }
}
let jobArr = document.getElementsByClassName('jobCard')
let skillArr = document.getElementsByClassName('skillCard')
for (let i = 0; i < jobArr.length;i++) {
	document.getElementsByClassName('jobCard')[i].addEventListener('click',jobProgress)
}
for (i = 0; i < skillArr.length;i++) {
		document.getElementsByClassName('skillCard')[i].addEventListener('click',skillProgress)
}
