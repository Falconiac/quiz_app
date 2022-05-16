import {
  toggleclass,
  show_hide_click,
  card_activity,
} from "./js_files/card_action.js";

import { navigation, headLine } from "./navigation.js";
// -----------------------------Varialbles---------------------------------
let cards = document.querySelectorAll(".questcard");
const homeBtn = document.querySelector("[data-js=toHome]");
const homescreen = document.querySelector("#home");
const bookmarkBtn = document.querySelector("[data-js=toBookmark]");
const bookmarkScreen = document.querySelector("#bookmark_collection");
const createBtn = document.querySelector("[data-js=toCreate]");
const createScreen = document.querySelector("#create");
const addQuestionField = document.querySelector("#addquestion");
const counter = document.querySelector("[data-js=counterTxt]");
const profileBtn = document.querySelector("[data-js=toProfile]");
const profileScreen = document.querySelector("#profile");
const heading = document.querySelector("#headline");
// -----------------------------Varialbles---------------------------------

// -----------------------------Question-Cards---------------------------------

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

// -----------------------------Char-Counter---------------------------------

addQuestionField.addEventListener("input", function (e) {
  const target = e.target;

  const maxLength = target.getAttribute("maxlength");

  const currentLength = target.value.length;

  counter.innerHTML = `${currentLength}/${maxLength}`;
});

// -----------------------------NavBar-Function---------------------------------

homeBtn.addEventListener("click", () => {
  navigation(homescreen, bookmarkScreen, createScreen, profileScreen);
  headLine(heading, "Quiz-App");
});

bookmarkBtn.addEventListener("click", () => {
  navigation(bookmarkScreen, homescreen, createScreen, profileScreen);
  headLine(heading, "Bookmarks");
});

createBtn.addEventListener("click", () => {
  navigation(createScreen, bookmarkScreen, homescreen, profileScreen);
  headLine(heading, "Create your Question");
});

profileBtn.addEventListener("click", () => {
  navigation(profileScreen, createScreen, bookmarkScreen, homescreen);
  headLine(heading, "Profile");
});
