let bookmark = document.querySelectorAll("[data-js=trybackground]");
let answerBtn = document.querySelectorAll("[data-js=answBtn]");
let answer = document.querySelectorAll(".unvisible");

function setVisible(item) {
  if (item.style.visibility === "hidden") {
    item.style.visibility = "visible";
  } else {
    item.style.visibility = "hidden";
  }
}
// Funktionen

function visible() {
  visibility ? visible : hidden;
}

bookmark.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("--bookmarked");
  });
});

answerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".unvisible").classList.toggle("visible");
  });
});
