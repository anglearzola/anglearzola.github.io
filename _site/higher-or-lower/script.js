function doStuff (value) {
  document.getElementById('numberCard').src = ""
  document.getElementById('numberCard').style.display = 'inline'
  let currentNumber = Math.floor(Math.random()*13 + 1)
  let nextNumber = Math.floor(Math.random()*13 + 1)
  console.log(currentNumber)
  console.log(nextNumber)
  document.getElementById('numberCard').src = "./hearts/" + currentNumber + ".png"
  if (value === 'higher') {
    if (currentNumber < nextNumber) {
      console.log('correct!')
      console.log(currentNumber)
      console.log(nextNumber)
    }
    else {
      console.log('incorrect!')
      console.log(currentNumber)
      console.log(nextNumber)
    }
  }
  if (value === 'lower') {
    if (currentNumber > nextNumber) {
      console.log('correct!')
      console.log(currentNumber)
      console.log(nextNumber)
    }
    else {
      console.log('incorrect')
      console.log(currentNumber)
      console.log(nextNumber)
    }
  }
  currentNumber = nextNumber

}
