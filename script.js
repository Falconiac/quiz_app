import {
  toggleclass,
  show_hide_click,
  card_activity,
} from "./js_files/card_action.js";

import { navigation, headLine } from "./js_files/navigation.js";
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

let cardContent = [];

cardWaiter().then(() => {
  cardContent.forEach((content) => {
    content.isBooked = false;
    const quest = content.question;
    const theAnsw = content.correct_answer;
    console.log(content);
    cardGenerator(quest, theAnsw, content, homescreen);
  });
});

async function cardWaiter() {
  const promise1 = await fetch(
    "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean"
  );
  const data = await promise1.json();
  cardContent = data.results;
}

// Create the Cards--------------------------------------------------
function cardGenerator(question, answer, result, screen) {
  //Card mit Class erstellen:
  const newCard = document.createElement("article");
  newCard.classList.add("questcard");
  //Überschrift mit Class erstellen erstellen
  const questionHeadLine = document.createElement("h2");
  newCard.appendChild(questionHeadLine);
  questionHeadLine.textContent = "Question";
  questionHeadLine.classList.add("__h2");
  //Bookmark erstellen:
  const makeBookmark = document.createElement("img");
  newCard.appendChild(makeBookmark);
  makeBookmark.src = "/res/bookmark.svg";
  makeBookmark.classList.add("--icon", "bookpos");
  makeBookmark.setAttribute("alt", "Drop to Bookmark");
  makeBookmark.setAttribute("data-js", "trybackground");
  makeBookmark.addEventListener("click", function handleClick(event) {
    makeBookmark.classList.toggle("--bookmarked");
    if (result.isBooked === true) {
      result.isBooked = false;
    } else {
      result.isBooked = true;
    }
    console.log(result.isBooked);
  });

  //Question erstellen:
  const newQuestion = document.createElement("p");
  newCard.appendChild(newQuestion);
  newQuestion.classList.add("question");
  newQuestion.innerHTML = question;
  //Answer erstellen:
  const answerDiv = document.createElement("div");
  newCard.appendChild(answerDiv);
  answerDiv.classList.add("unvisible");
  answerDiv.setAttribute("data-js", "answerfield");
  const answerTxt = document.createElement("p");
  answerDiv.appendChild(answerTxt);
  answerTxt.textContent = answer;

  // Button erstellen:
  const answerBtn = document.createElement("button");
  newCard.appendChild(answerBtn);
  answerBtn.textContent = "Show Answer";
  answerBtn.classList.add("background_green");
  answerBtn.classList.add("bigansw");
  answerBtn.setAttribute("data-js", "answBtn");
  answerBtn.addEventListener("click", function handleClick(event) {
    answerDiv.classList.toggle("visible");
    answerBtn.classList.toggle("background_red");

    if (answerBtn.innerHTML === "Hide Answer") {
      answerBtn.innerHTML = "Show Answer";
    } else {
      answerBtn.innerHTML = "Hide Answer";
    }
  });

  // Tag-Bar erstellen:
  const tag1 = document.createElement("a");
  newCard.appendChild(tag1);
  tag1.classList.add("tag1");
  tag1.setAttribute("href", "#");
  tag1.textContent = "#Tag1";

  const tag2 = document.createElement("a");
  newCard.appendChild(tag2);
  tag2.classList.add("tag2");
  tag2.setAttribute("href", "#");
  tag2.textContent = "#Tag2";

  const tag3 = document.createElement("a");
  newCard.appendChild(tag3);
  tag3.classList.add("tag3");
  tag3.setAttribute("href", "#");
  tag3.textContent = "#Tag3";

  const tag4 = document.createElement("a");
  newCard.appendChild(tag4);
  tag4.classList.add("tag4");
  tag4.setAttribute("href", "#");
  tag4.textContent = "#Tag4";

  screen.append(newCard);
}
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

  cardWaiter().then(() => {
    cardContent.forEach((content) => {
      if (content.isBooked) {
        const quest = content.question;
        const theAnsw = content.correct_answer;
        console.log(content);
        cardGenerator(quest, theAnsw, content, bookmarkScreen);
      }
    });
  });
});

createBtn.addEventListener("click", () => {
  navigation(createScreen, bookmarkScreen, homescreen, profileScreen);
  headLine(heading, "Create your Question");
});

profileBtn.addEventListener("click", () => {
  navigation(profileScreen, createScreen, bookmarkScreen, homescreen);
  headLine(heading, "Profile");
});
