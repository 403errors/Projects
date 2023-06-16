console.log("logging")

const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);
console.log(randomNumber1);
console.log(randomNumber2);

const randomImageSrc1 = "/images/dice"+ randomNumber1 +".png"
const randomImageSrc2 = "/images/dice"+ randomNumber2 +".png"

const img1_source = document.querySelector(".img1");
const img2_source = document.querySelector(".img2");
img1_source.setAttribute("src", randomImageSrc1);
img2_source.setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    text = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    text = "Plater 2 Wins!"
} else {
    text = "Draw!"
}

document.querySelector("h1").innerHTML = text;