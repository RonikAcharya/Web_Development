let transactionType = document.querySelector("#transactionType");
let list = document.querySelector(".transcationList ul");
let TotalAmount = document.querySelector(".TotalAmount");
let inputAmount = document.querySelector("#inputAmount");
let inputDescription = document.querySelector("#inputDescription");
let addMoneyBtn = document.querySelector("button");
let emptyAlert = document.querySelector(".emptyAlert")
// Select box color update to Green or Red
function updColor() {
  if (transactionType.value == "income") {
    transactionType.style.color = "#62D61F";
  } else {
    transactionType.style.color = "rgb(255, 35, 35)";
  }
  transactionType.style.textShadow =
    "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";
}

transactionType.addEventListener("click", updColor);
updColor();

// Add money button click handler
addMoneyBtn.addEventListener("click", () => {
  // make sure the feilds arent empty

if (inputAmount.value.trim() === "" || inputDescription.value.trim() === "") {
  emptyAlert.style.display = "block";
  return;
} else {
  emptyAlert.style.display = "none";
}

  let totalNum = parseFloat(TotalAmount.innerText) || 0;
  let inputNum = parseFloat(inputAmount.value) || 0;

  if (transactionType.value == "income") {
   TotalAmount.innerText = `$${totalNum + inputNum}`;

  } else {
    TotalAmount.innerText = `$${totalNum - inputNum}`;

  }

  let li = document.createElement("li");
  let colouredAmount = document.createElement("span");
  let finalDescription = document.createElement("span");

  colouredAmount.innerText = `${transactionType.value == "income" ? "+" : "-"}${inputAmount.value} `;
  colouredAmount.style.color = transactionType.value === "income" ? "#62D61F" : "rgb(255, 35, 35)";
  colouredAmount.style.textShadow = "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black";

  finalDescription.innerText = inputDescription.value;

  li.append(colouredAmount);
  li.append(finalDescription);
  list.append(li);

  inputAmount.value = "";
  inputDescription.value = "";
  inputAmount.focus();
});

// Keyboard navigation
inputAmount.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputDescription.focus();
  }
});
inputDescription.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addMoneyBtn.click();
  }
});
