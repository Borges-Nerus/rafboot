const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const voltar = document.getElementById("btnVoltar");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

voltar.addEventListener("click", function() {
  //alert ("teste");
    this.addEventListener = "https://borges-nerus.github.io/rafboot/";
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
