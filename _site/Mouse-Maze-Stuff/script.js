///Starting level variable
let level = 1
/// Variable tracks if player has the key so it unlocks the stairs
let haveKey = false
/// Buffer variable makes sure to put player in "buffer zone"
let buffer = false
/// Lose function tells player they lost
const lose = () => {
  alert('you lost')
}
/// If statement to make sure everything is clear except the stuff needed for the first level
if (level === 1) {
  document.getElementById('level2').style.display = 'none'
  document.getElementById('level3').style.display = 'none'
  document.getElementById('circle').style.display = 'none'
  document.getElementById('level4').style.display = 'none'
}
/// Buffer function that makes "buffer zone" by clearing everything that isn't needed. Just the red circle
const bufferFunction = () => {
  buffer = true
  if (buffer === true) {
    document.getElementById('level1').style.display = 'none'
    document.getElementById('level2').style.display = 'none'
    document.getElementById('level3').style.display = 'none'
    document.getElementById('level4').style.display = 'none'
    document.getElementById('circle').style.display = 'inline'
    document.getElementById('boundaries').style.display = 'none'
  }
}
/// Function that progresses player to next level. Makes level variable inrease by 1, and does if statements to make sure the right assets are being used. Also, buffer is set to false so that when you go over the red circle it makes the next level load.
const progress = () => {
  level++
  console.log(level)
  buffer = false
  if (level === 1 && buffer === false) {
    document.getElementById('level2').style.display = 'none'
    document.getElementById('circle').style.display = 'none'
  }
  if (level === 2 && buffer === false) {
    document.getElementById('level1').style.display = 'none'
    document.getElementById('level2').style.display = 'inline'
    document.getElementById('circle').style.display = 'none'
    document.getElementById('boundaries').style.display = 'inline'
  }
  if (level === 3 && buffer === false) {
    document.getElementById('level2').style.display = 'none'
    document.getElementById('level3').style.display = 'inline'
    document.getElementById('circle').style.display = 'none'
  }
  if (level === 4 && buffer === false && haveKey === true) {
    document.getElementById('circle').style.display = 'none'
    document.getElementById('level3').style.display = 'none'
    document.getElementById('level4').style.display = 'inline'
    document.getElementById('boundaries').style.display = 'inline'
  }
  //make level go to next question
}
/// function to run when you hover over the key
const getKey = () => {
  haveKey = true
  if (haveKey === true) {
  document.getElementById('lock').style.display = 'none'
  /// adds function to stairs once you get the key
  document.getElementById('stairs3').addEventListener('mouseover',bufferFunction)
  }
}
//randomizes position of key
let topKeyPosition = Math.floor(Math.random()*501) + 'px'
let leftKeyPosition = Math.floor(Math.random()*501) + 'px'
document.getElementById('key').style.top = topKeyPosition
document.getElementById('key').style.left = leftKeyPosition
/// adds getKey function to key
document.getElementById('key').addEventListener('mouseover',getKey)
/// This selects all the boundaries (divs with class set to boundary) and adds the mouseover event listener so that it gives an alert when you hover over them
let boundaryArray = document.getElementsByClassName('boundary')
for (i=0; i < boundaryArray.length; i++) {
  document.getElementsByClassName('boundary')[i].addEventListener('mouseover',lose)
}
/// Adds event listener to stairs (images with class as stairs) to run bufferFunction
let stairsArray = document.getElementsByClassName('stairs')
for (i=0; i < stairsArray.length; i++) {
  document.getElementsByClassName('stairs')[i].addEventListener('mouseover',bufferFunction)
}
/// Back function to make player go to next level. Makes buffer false, and runs progress function.
let redCircleFunction = () => {
  buffer = false
  progress()
  console.log(buffer)
}
/// Adds event listener to red circle to run red circle function
document.getElementById('circle').addEventListener('mouseover',redCircleFunction)
/// Special function for special goomba (goomba5)
const specialGoombaFunc = () => {
  alert('You lost... just kidding! You were never going to outspeed that thing!')
}
/// Adds lose functions to goombas but different one to Goomba5
document.getElementById('goomba1').addEventListener('mouseover', lose)
document.getElementById('goomba2').addEventListener('mouseover', lose)
document.getElementById('goomba3').addEventListener('mouseover', lose)
document.getElementById('goomba4').addEventListener('mouseover', lose)
document.getElementById('goomba5').addEventListener('mouseover', specialGoombaFunc)
