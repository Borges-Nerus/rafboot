const colors = ["green", "red", "rgba(133,122,200)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const voltar = document.getElementById("btnIndex")

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
   //console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

voltar.addEventListener("click", function () {

  //alert("teste");
  this.addEventListener = open("https://borges-nerus.github.io/rafboot/index.html");
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
