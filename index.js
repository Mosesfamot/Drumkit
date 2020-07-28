//Code to detect BUTTON PRESS
for (i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clicked);

  function clicked() {
    var buttonInnerHTML = this.innerHTML;
    keyboardPress(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

//Code to detect KEYBOARD PRESS
document.addEventListener("keypress", function(event) {
  keyboardPress(event.key);
  buttonAnimation(event.key);
});

function keyboardPress(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(this.innerHTML);

  }
}

//Code to Animate the BUTTON PRESSED
function buttonAnimation(currentKey) {
    var animatedKeypress = document.querySelector("." + currentKey);
    animatedKeypress.classList.add("pressed");
    setTimeout(function() {
    animatedKeypress.classList.remove("pressed");}, 50);
}



// Can Also Be Written As
// document.querySelector(".set").addEventListener("click", clicked);
//
// function clicked() {
//   alert("I got clicked");
// }

//OR

// document.querySelector(".set").addEventListener("click", function () {
//   alert("I got clicked");
// });
