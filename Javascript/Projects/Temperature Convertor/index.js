const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const res = document.getElementById("Result");
let temp;

function convert() {
  if (toF.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    res.textContent = temp.toFixed(1) + "°F";
  } else if (toC.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    res.textContent = temp.toFixed(1) + "°C";
  } else res.textContent = "Select a Unit";
}
