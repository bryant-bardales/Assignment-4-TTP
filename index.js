var button1 = getElementById.querySelector('.first-button')
var button2 = getElementById.querySelector('.second-button')
var text = getElementById.querySelector('.text')

button1.onclick = function() {
  text.innerText = "I'm right";
}

button2.onclick = function() {
  text.innerText = "No, I'm right!";
}

