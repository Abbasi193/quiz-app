function getResult() {
  var attemptedAnswers = {}
  var radioButtons = document.querySelectorAll("input[type=radio]:checked")
  for (x of radioButtons) {
    attemptedAnswers[parseInt(x.name.substring(1))] = x.value
  }

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert(`Correct:${this.responseText}\nInncorrect:${20-this.responseText}`)
    }
  };
  xhttp.open("POST", "http://localhost:3000/", true)
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhttp.send(`data=${JSON.stringify(attemptedAnswers)}`)
}
var current = -1
function handleNext() {
  current++
  if(current<4) {
    var divs = document.querySelectorAll('div.hidden')
    divs.forEach(function(div) {
      div.style.display = 'none'
    })
    divs[current].style.display = 'block'
  } else {
    getResult()
  }
}
handleNext();
