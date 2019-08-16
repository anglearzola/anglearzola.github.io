/// cards array is so that it does stuff to each card
let cards = [0,1]
///done variable is so that that it doesn't add 6 cards when you tie
let done = 0
const doGame = () => {
	///Initial set up stuff

	document.getElementById('winMessage').innerHTML = ''
	///resets done everytime you click the button
	done = 0
	///Makes the divs empty so that the cards don't stack by 3 every time you tie
	document.getElementById('div0').innerHTML = ''
	document.getElementById('div1').innerHTML = ''
	///testing purposes
	console.log('button pressed')
	///generate two random numbers. One for player one and one for player two
	let number1 = Math.floor(Math.random()*13 + 2)
	let number2 = Math.floor(Math.random()*13 + 2)
	///testing purposes
	console.log(number1)
	console.log(number2)
	///Logic for comparing numbers

	///does this twice since 2 items in array
	cards.map(function(index) {
		///this is to prevent having 6 cards instead of 3 when tied
		if (done === 0) {
			///if statement to add 3 cards when there's a tie
			if (number1 === number2) {
				///this is to add appropriate random numbers to totals
				let turn = 0
				///total for player one's 3 cards
				let total1 = 0
				///total for player two's 3 cards
				let total2 = 0
				///used in for loops
				let i = 0
				///testing purposes
				console.log('doesnt work')
				///does this to each card
				cards.map(function(index) {
					///flips cards
					document.getElementsByClassName('card')[index].style.transform = "rotateY(90deg)"
					setTimeout(flipCards,250)
					///testing purposes
					console.log('doesnt work')
					///3 random numbers for the 3 extra cards during tie
					let random1 = Math.floor(Math.random()*13 + 2)
					let random2 = Math.floor(Math.random() *13 + 2)
					let random3 = Math.floor(Math.random()*13 + 2)
					///Changes images of each random card during the tie (the 3 that appear)
					for (i = 0; i < cards.length + 1; i++) {
						document.getElementById('div' + index).innerHTML += "<img src= ./hearts/" + eval('random' + (i+1)) + ".png>"
					}
					///totals numbers for player one
					if (turn === 0) {
						total1 = random1 + random2 + random3
					}
					///totals numbers for player two
					else if (turn === 1) {
						total2 = random1 + random2 + random3
					}
					///for each total to be done
					turn++
				})
				/// win conditions for each player
				if (total1 > total2) {
					document.getElementById('winMessage').innerHTML = 'Player One Wins!'
				}
				else if (total1 < total2) {
					document.getElementById('winMessage').innerHTML = 'Player Two Wins!'
				}
				else if (total1 === total2) {
					console.log('this is hopeless')
					document.getElementById('winMessage').innerHTML = 'No one won :('
				}
			} /// closes the map for the tie
		} /// closes the tie if statement

		/// the route for if 1 > 2 or 1 < 2
		document.getElementsByClassName('card')[index].style.transform = "rotateY(90deg)"
		setTimeout(flipCards,250)
		function flipCards() {
			///so that the random number is represented by the image
			let number = ('number' + (index+1))
			//flips card and changes it to front
			document.getElementsByClassName('card')[index].src = "./hearts/" + eval(number) + ".png"
			document.getElementsByClassName('card')[index].style.transform = 'rotateY(0deg)'
			///win conditions
			if (number1 > number2) {
				document.getElementById('winMessage').innerHTML = 'Player One Wins!'
			}
			else if (number1 < number2) {
				document.getElementById('winMessage').innerHTML = 'Player Two Wins!'
			}

			//moves it back to 0deg so you can see the card
			setTimeout(function() {
				document.getElementsByClassName('card')[index].style.transform = 'rotateY(90deg)'

			//changes back to the back side
			setTimeout(function(){
				document.getElementsByClassName('card')[index].src = "red_back.png"
				document.getElementsByClassName('card')[index].style.transform = 'rotateY(0deg)'
			},250)

			},3000)
		}
		done++
	})
}
document.getElementById('startButton').addEventListener('click',doGame)
