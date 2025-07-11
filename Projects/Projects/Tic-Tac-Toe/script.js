let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let turn = document.querySelector(".turn");
let turnx = true;
let click = new Audio("click1.mp3");
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
let gameOver = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "" || gameOver) return;
    click.play();
    if (turnx) {
      box.innerText = "x";
      box.style.color = "Red";
      turnx = false;
      turn.innerText = "Player O turn";
    } else {
      box.innerText = "o";
      box.style.color = "green";
      turnx = true;
      turn.innerText = "Player X turn";
    }
    box.disabled = true;
    count++;
    if (checkwinner()) {
      gameOver = true;
    } else if (count === 9) {
      draw();
    }
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pattern1 = boxes[pattern[0]].innerText;
    let pattern2 = boxes[pattern[1]].innerText;
    let pattern3 = boxes[pattern[2]].innerText;

    if (pattern1 !== "" && pattern1 === pattern2 && pattern2 === pattern3) {
      disableAllBoxes();
      showwinner(pattern1);
      return true;
    }
  }
  return false;
};

const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const resetgame = () => {
  turnx = true;
  enableAllBoxes();
  msgcontainer.classList.add("hide");
  count = 0;
  gameOver = false;
  turn.innerText = "Player X turn";
};

const enableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "";
  });
};

resetbtn.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);

let draw = () => {
  msg.innerText = "It is a draw";
  msgcontainer.classList.remove("hide");
};

const showwinner = (winner) => {
  setTimeout(() => {
    msg.innerText = `Congratulations, winner is player ${winner}`;
    msgcontainer.classList.remove("hide");
  }, 500);
};
//end of script.js
