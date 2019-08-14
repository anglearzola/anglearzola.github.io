let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
for (i = 0; i < numbers.length; i++) {
  let bvalue = (numbers[i]).toLocaleString()
  let numsquared = (numbers[i] ** 2).toLocaleString()
  let numcubed = (numbers[i] ** 3).toLocaleString()
  let num4 = (numbers[i] ** 4).toLocaleString()
  let num5 = (numbers[i] ** 5).toLocaleString()
  let num6 = (numbers[i] ** 6).toLocaleString()
  let num7 = (numbers[i] ** 7).toLocaleString()
  let num8 = (numbers[i] ** 8).toLocaleString()
  document.getElementById("bvalue").innerHTML += '<th>' + bvalue + '</th>'
  document.getElementById("sqr").innerHTML += '<th>' + numsquared + '</th>'
  document.getElementById("cube").innerHTML += '<th>' + numcubed + '</th>'
  document.getElementById("quad").innerHTML += '<th>' + num4 + '</th>'
  document.getElementById("quin").innerHTML += '<th>' + num5 + '</th>'
  document.getElementById("sext").innerHTML += '<th>' + num6 + '</th>'
  document.getElementById("septa").innerHTML += '<th>' + num7 + '</th>'
  document.getElementById("octa").innerHTML += '<th>' + num8 + '</th>'
}

