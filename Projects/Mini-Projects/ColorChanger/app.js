const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
  orange: "#FFA500",
  purple: "#800080",
  pink: "#FFC0CB",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  lime: "#BFFF00",
  teal: "#008080",
  indigo: "#4B0082",
  violet: "#EE82EE",
  brown: "#A52A2A",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#808080",
  gold: "#FFD700",
  silver: "#C0C0C0",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  coral: "#FF7F50",
  turquoise: "#40E0D0",
  beige: "#F5F5DC",
};
let button = document.querySelector("#colorButton");
let body = document.querySelector("body");

let colorKeys = Object.keys(colors);

button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 25);
  body.style.backgroundColor = colors[colorKeys[random]];
});
