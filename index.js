var victory = 0;
var defeat = 0;
var draw = 0;

document.querySelector(".result").style.visibility = "hidden";
changeScore();

document.querySelector(".last-division").addEventListener("click", reset);

document.querySelector(".last-container").addEventListener("click", function() {
  generateResult(0);
});

document
  .querySelector(".last2-container")
  .addEventListener("click", function() {
    generateResult(1);
  });

document
  .querySelector(".last3-container")
  .addEventListener("click", function() {
    generateResult(2);
  });

function generateResult(x) {
  var cv = Math.floor(Math.random() * 3);

  document.querySelector(".result").style.visibility = "visible";

  if (cv == 0) {
    document.querySelector(".computer-choice").innerHTML = "Rock";
  } else if (cv == 1) {
    document.querySelector(".computer-choice").innerHTML = "Paper";
  } else if (cv == 2) {
    document.querySelector(".computer-choice").innerHTML = "Scissor";
  }
  if (cv == x) {
    document.querySelector(".result-output").innerHTML = "Draw!";
    document.querySelector(".result-output").style.backgroundColor = "black";
    draw++;
    changeScore();
  } else if (
    (cv == 1 && x == 0) ||
    (cv == 2 && x == 1) ||
    (cv == 0 && x == 2)
  ) {
    document.querySelector(".result-output").innerHTML = "You lost";
    document.querySelector(".result-output").style.backgroundColor = "red";
    defeat++;
    changeScore();
  } else {
    document.querySelector(".result-output").innerHTML = "You Win";
    document.querySelector(".result-output").style.backgroundColor = "green";
    victory++;
    changeScore();
  }
}

function changeScore() {
  document.querySelector(".victory").innerHTML = victory;
  document.querySelector(".defeat").innerHTML = defeat;
  document.querySelector(".draw").innerHTML = draw;
}

function reset() {
  victory = 0;
  defeat = 0;
  draw = 0;
  document.querySelector(".victory").innerHTML = victory;
  document.querySelector(".defeat").innerHTML = defeat;
  document.querySelector(".draw").innerHTML = draw;

  document.querySelector(".result").style.visibility = "hidden";
}
