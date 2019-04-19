const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function generateRandom(numberCount) {
  const number = Math.ceil(Math.random() * numberCount);

  return number;
}

(function() {
  const randomNumber = generateRandom(IMG_NUMBER);

  paintImage(randomNumber);
})();
