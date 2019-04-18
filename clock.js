const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

function makeNumberUnderTen(number) {
  // return number < 10 ? `0${number}` : number;
  return ("0" + number).slice(-2);
}

function getTime() {
  const date = new Date();
  const hours = makeNumberUnderTen(date.getHours()),
    minutes = makeNumberUnderTen(date.getMinutes()),
    seconds = makeNumberUnderTen(date.getSeconds());

  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

(function() {
  getTime();
  setInterval(getTime, 1000);
})();
