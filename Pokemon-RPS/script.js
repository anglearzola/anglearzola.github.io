///make sure you change it so that it changes yourChoice to new pokemon
let oppChoice = ''
let victory = ''
let fireLevel = 1
let nextFireLevel = 0
let waterLevel = 1
let nextWaterLevel = 0
let grassLevel = 1
let nextGrassLevel = 0
document.getElementsByClassName('experience')[0].style.width = '0%'
document.getElementsByClassName('experience')[1].style.width = '0%'
document.getElementsByClassName('experience')[2].style.width = '0%'
function runGame(yourChoice,yourElement) {
  //This logic is for deciding winner or loser

  //This generates random number to be used for CPU choice
  let randomNumber = Math.floor(Math.random()*3)
  //Changes body text color and the background color correspond to type
  if (yourElement === 'fire') {
    document.getElementById('uChoice').style.color = 'red'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'darkred'
    nextFireLevel++
    document.getElementsByClassName('experience')[0].style.width = (nextFireLevel/fireLevel * 100) + '%'
    if (nextFireLevel === fireLevel) {
      fireLevel++
      nextFireLevel = 0
    }
    if (fireLevel >= 16) {
      document.getElementsByClassName('icon')[0].src = '/Pokemon-RPS/assets/Charmeleon.png'
      yourChoice = 'Charmeleon'
    }
    if (fireLevel >= 36) {
      document.getElementsByClassName('icon')[0].src = '/Pokemon-RPS/assets/Charizard.png'
      yourChoice = 'Charizard'
    }
  }
  else if (yourElement === 'water') {
    document.getElementById('uChoice').style.color = 'blue'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'darkblue'
    nextWaterLevel++
    document.getElementsByClassName('experience')[1].style.width = (nextWaterLevel/waterLevel * 100) + '%'
    if (nextWaterLevel === waterLevel) {
      waterLevel++
      nextWaterLevel = 0
    }
    if (waterLevel >= 16) {
      document.getElementsByClassName('icon')[1].src = '/Pokemon-RPS/assets/Wartortle.png'
      yourChoice = 'Wartortle'
    }
    if (waterLevel >= 36) {
      document.getElementsByClassName('icon')[1].src = '/Pokemon-RPS/assets/Blastoise.png'
      yourChoice = 'Blastoise'
    }
  }
  else if (yourElement === 'grass') {
    document.getElementById('uChoice').style.color = 'green'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'darkgreen'
    nextGrassLevel++
    document.getElementsByClassName('experience')[2].style.width = (nextGrassLevel/grassLevel * 100) + '%'
    if (nextGrassLevel === grassLevel) {
      grassLevel++
      nextGrassLevel = 0
    }
    if (waterLevel >= 16) {
      document.getElementsByClassName('icon')[2].src = '/Pokemon-RPS/assets/Ivysaur.png'
      yourChoice = 'Ivysaur'
    }
    if (fireLevel >= 32) {
      document.getElementsByClassName('icon')[2].src = '/Pokemon-RPS/assets/Venusaur.png'
      yourChoice = 'Venusaur'
    }
  }
  //sets your Pokemon gif + icon
  document.getElementById('playerPoke').innerHTML = "<img src='" + "/Pokemon-RPS/assets/" + yourChoice + ".gif' class='model'>"
  document.getElementById('uChoice').innerHTML = "Your Choice: " + yourChoice
  //Makes CPU choose Pokemon
  switch (randomNumber) {
    case 0:
      oppChoice = 'Charmander'
      document.getElementById('vChoice').style.color = 'red'
      break;
    case 1:
      oppChoice = 'Squirtle'
      document.getElementById('vChoice').style.color = 'blue'
      break;
    case 2:
      oppChoice = 'Bulbasaur'
      document.getElementById('vChoice').style.color = 'green'
  }
  //sets CPU Pokemon gif + ai choice
  document.getElementById('oppPoke').innerHTML = "<img src='" + "/Pokemon-RPS/assets/" + oppChoice + ".gif' class='model'>"
  document.getElementById("vChoice").innerHTML = "A.I's Choice: " + oppChoice
  //Logic for win or lose or tie
  if (yourElement === 'fire' && oppChoice === 'Squirtle') {
    victory = false
  }
  else if (yourElement === 'fire' && oppChoice === 'Bulbasaur') {
    victory = true
  }
  else if (yourElement === 'water' && oppChoice === 'Charmander') {
    victory = true
  }
  else if (yourElement === 'water' && oppChoice === 'Bulbasaur') {
    victory = false
  }
  else if (yourElement === 'grass' && oppChoice === 'Charmander') {
    victory = false
  }
  else if (yourElement === 'grass' && oppChoice === 'Squirtle') {
    victory = true
  }
  else if (yourElement === oppChoice) {
    victory = 'tie'
  }
  //Does win message
  if (victory === true) {
    document.getElementById('winMessage').innerHTML = 'Player One wins!'
  }
  else if (victory === 'tie'){
    document.getElementById('winMessage').innerHTML = 'You tied!'
  }
  else {
    document.getElementById('winMessage').innerHTML = 'Player Two wins!'
  }
}
