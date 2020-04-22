let oppChoice = ''
let victory = ''
function test(yourChoice) {
  let randomNumber = Math.floor(Math.random()*3)
  if (yourChoice === 'Charmander') {
    document.getElementById('uChoice').style.color = 'red'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'darkred'
  }
  else if (yourChoice === 'Squirtle') {
    document.getElementById('uChoice').style.color = 'blue'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'darkblue'
  }
  else if (yourChoice === 'Bulbasaur') {
    document.getElementById('uChoice').style.color = 'green'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'darkgreen'
  }
  document.getElementById('playerPoke').innerHTML = "<img src='" + "/Pokemon-RPS/assets/" + yourChoice + ".gif' class='model'>"
  document.getElementById('uChoice').innerHTML = "Your Choice: " + yourChoice
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
  document.getElementById('oppPoke').innerHTML = "<img src='" + "/Pokemon-RPS/assets/" + oppChoice + ".gif' class='model'>"
  document.getElementById("vChoice").innerHTML = "A.I's Choice: " + oppChoice
  if (yourChoice === 'Charmander' && oppChoice === 'Squirtle') {
    victory = false
  }
  else if (yourChoice === 'Charmander' && oppChoice === 'Bulbasaur') {
    victory = true
  }
  else if (yourChoice === 'Squirtle' && oppChoice === 'Charmander') {
    victory = true
  }
  else if (yourChoice === 'Squirtle' && oppChoice === 'Bulbasaur') {
    victory = false
  }
  else if (yourChoice === 'Bulbasaur' && oppChoice === 'Charmander') {
    victory = false
  }
  else if (yourChoice === 'Bulbasaur' && oppChoice === 'Squirtle') {
    victory = true
  }
  else if (yourChoice === oppChoice) {
    victory = 'tie'
  }
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
