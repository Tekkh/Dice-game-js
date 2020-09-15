const play = document.querySelector(".btn-player1");
const winner = document.querySelector(".popup-wrapper");
const popup = document.querySelector(".popup-content > p");
const close = document.querySelector(".popup-close");
var res1 = parseInt(document.querySelector(".player1").innerHTML, 10);
var res2 = parseInt(document.querySelector(".player2").innerHTML, 10);
var round = document.querySelector("h2 > span");

var int = 0;

play.addEventListener("click", (e) => {
  e.preventDefault();
  /*--------------------------- Round Increment && Winner ------------------------*/
  int += 1;
  if (int < 10) {
    document.querySelector("h2 > span").innerHTML = int;
  } else if (int === 10) {
    document.querySelector("h2 > span").innerHTML = int;
    setTimeout(() => {
      if (res1 > res2) {
        popup.innerHTML = "You Win 🏆 Yeeey 🎉";
        winner.style.display = "block";
      } else if (res1 == res2) {
        popup.innerHTML = "Draw ! 🏳️";
        winner.style.display = "block";
      } else {
        popup.innerHTML = "Computer Wins 🥺";
        winner.style.display = "block";
      }
      int = 1;
    }, 500);
  }
  /*--------------------------- Player 1 game ------------------------*/
  //Image1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

  //Image2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  /*--------------------------- Player 2 game ------------------------*/
  //Image3
  var randomNumber3 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource3 = "images/dice" + randomNumber3 + ".png";
  document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

  //Image4
  var randomNumber4 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource4 = "images/dice" + randomNumber4 + ".png";
  document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

  /*--------------------------- Player 1 result ------------------------*/
  var result = randomNumber1 + randomNumber2;
  if (result === 7) {
    document.querySelector(".player1").innerHTML = 0;
    res1 = 0;
  } else {
    res1 += result;
    document.querySelector(".player1").innerHTML = res1;
  }
  /*--------------------------- Player 2 result ------------------------*/
  var result2 = randomNumber3 + randomNumber4;
  if (result2 === 7) {
    document.querySelector(".player2").innerHTML = 0;
    res2 = 0;
  } else {
    res2 += result2;
    document.querySelector(".player2").innerHTML = res2;
  }
});
/*--------------------------- Close && Reset ------------------------*/
close.addEventListener("click", () => {
  winner.style.display = "none";
  document.querySelector(".player2").innerHTML = document.querySelector(
    ".player1"
  ).innerHTML = 0;
  document.querySelector("h2 > span").innerHTML = int;
});
