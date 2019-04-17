// const title = document.getElementById("title");

/*
const title = document.querySelector("#title");

title.innerHTML = "WTF!!";
title.style.color = "red";
console.dir(document);

document.title = "Change title";

function handleClick(event) {
  console.dir(event);
  console.log("I have been clicked");
  this.style.color = "green";
}

title.addEventListener("click", handleClick);
*/

const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(164, 153, 94)";
// const OTHER_COLOR = "#7f8c8d";
const CLICKED_CLASS = "clicked";

function handleClick(event) {
  //   const currentColor = title.style.color;
  //   if (currentColor === BASE_COLOR) {
  //     this.style.color = OTHER_COLOR;
  //   } else {
  //     this.style.color = BASE_COLOR;
  //   }
  // const currentClass = this.className;
  // if (currentClass !== CLICKED_CLASS) {
  //    this.className = CLICKED_CLASS;
  // }
  //   const hasClass = this.classList.contains(CLICKED_CLASS);

  //   if (!hasClass) {
  //     this.classList.add(CLICKED_CLASS);
  //   } else {
  //     this.classList.remove(CLICKED_CLASS);
  //   }

  this.classList.toggle(CLICKED_CLASS);
}

function handleOnline() {
  console.log("Welcome!!");
}

function handleOffline() {
  console.log("Good bye~");
}

(function() {
  // title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);

  // window.addEventListener("online", handleOnline);
  // window.addEventListener("offline", handleOffline);
})();
