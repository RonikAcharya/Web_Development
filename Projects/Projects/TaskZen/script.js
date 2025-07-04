let tasks = [];
let addTaskButton = document.getElementById("addTask");
let input = document.getElementById("task");
let taskList = document.getElementById("taskList");
let clearButton = document.querySelector(".clear");
let para = document.getElementById("emptyBox");

addTaskButton.addEventListener("click", function () {
  if (input.value.trim() === "") {
    para.innerText = "Please fill Out This Information";
  } else {
    tasks.push(input.value);
    console.log(input.value);

    let li = document.createElement("li");

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.classList.add("task-radio");

    let text = document.createElement("span");
    text.innerText = input.value;
    text.style.flex = "1";

    // handle strike
    function handleStrikeThrough() {
      if (radio.checked) {
        text.style.textDecoration = "line-through";
        text.style.opacity = "0.5";
      } else {
        text.style.textDecoration = "none";
        text.style.opacity = "1";
      }
    }
    radio.addEventListener("change", function () {
      handleStrikeThrough();
    });
    text.addEventListener("click", function () {
      radio.checked = true;
      handleStrikeThrough();
    });
    //end handle strike
    let delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(radio);
    li.appendChild(text);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";
    para.innerText = "";
    input.focus();
  }
});

clearButton.addEventListener("click", function () {
  taskList.innerHTML = "";
  para.innerText = "";
  tasks = [];
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
});
