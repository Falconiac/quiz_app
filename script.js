import {
  toggleclass,
  show_hide_click,
  card_activity,
} from "./js_files/card_action.js";

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
    card_activity(button);
  });
});
