import { toggleclass, show_hide_click } from "./js_files/bookmark.js";
// Bookmark-Block funktionert !!!
// let bookmarks = document.querySelectorAll("[data-js=trybackground]");

// bookmarks.forEach((element) => {
//   bookmarker(element);
// });
// Bookmark-Block funktionert !!!

let cards = document.querySelectorAll(".questcard");
cards.forEach((card) => {
  let bookmark = card.querySelector("[data-js=trybackground]");
  let button = card.querySelector("[data-js=answBtn]");
  let answer = card.querySelector(".unvisible");

  bookmark.addEventListener("click", () => {
    toggleclass(bookmark);
  });

  button.addEventListener("click", () => {
    show_hide_click(answer);

    if (button.innerHTML === "Show Answer") {
      button.innerHTML = "Hide Answer";
      button.classList.remove("background_green");
      button.classList.add("background_red");
    } else {
      button.innerHTML = "Show Answer";
      button.classList.remove("background_red");
      button.classList.add("background_green");
    }
  });
});

// Baugtastic-Block

// let bookmarks = document.querySelectorAll("[data-js=trybackground]");
// let answerBtns = document.querySelectorAll("[data-js=answBtn]");
// let answers = document.querySelectorAll(".unvisible");

// // Funktionen
// function show_hide(btn) {
//   btn.addEventListener("click", () => {
//     answers.forEach((answer) => {
//       answer.classList.toggle("visible");
//       console.log(answer);
//     });
//   });
// }

// // Funktionen

// bookmarks.forEach((element) => {
//   bookmarker(element);
// });

// answerBtns.forEach((btn) => {
//   show_hide(btn);
// });
