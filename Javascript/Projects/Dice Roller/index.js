function rolldice() {
  const numOfdice = document.getElementById("input1").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfdice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="../Dice Roller/Images/${value}.png">`);
  }
  console.log(values);

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
