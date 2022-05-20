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

// -----------------------------Create-Card-Function---------------------------------

// Variablen anlegen:
const createCardSubmit = document.querySelector("[data-js=createSubmit]");
const questionInput = document.querySelector("[data-js=questionInput]");
const answerInput = document.querySelector("[data-js=answerInput]");

// Submit-Button mit EventListener (funtioniert):

function cardGenerator(question, answer) {
  // Erstelle einen article:
  const newCard = document.createElement("article");
  homescreen.append("article");
  // Gib dem article die Class questcard:
  newCard.classList.add("questcard");
  // Erstelle in newCard eine h2:
  const questionHeadLine = document.createElement("h2");
  // Fülle die h2 mit folgendem Inhalt:
  questionHeadLine.textContent = "Question";
  // Gib der h2 die Class __h2
  questionHeadLine.classList.add("__h2");
  newCard.appendChild(questionHeadLine);
  // Füge Bookmark-img ein:
  const makeBookmark = document.createElement("img");
  // img-src:
  makeBookmark.src = "./res/bookmark.svg";
  // Füge 2 Classes hinzu:
  makeBookmark.classList.add("--icons", "bookpos");
  // Gib dem img folgende Arrtibute:
  // alt-tag:
  makeBookmark.setAttribute(alt, "Drop to Bookmark");
  // data-js:
  makeBookmark.setAttribute(data - js, "trybackbround");
  newCard.appendChild(makeBookmark);
  // Füge die question ein:
  const newQuestion = document.createElement("p");
  // Gib newQuestion die Class:
  newQuestion.classList.add("question");
  // Fülle newQuestion mit dem Inhalt von Input:
  newQuestion.textContent = question;
  newCard.appendChild(newQuestion);
  // Erstelle ein div:
  const answerDiv = document.createElement("div");
  // Füge Class hinzu:
  answerDiv.classList.add("unvisible");
  // Füge folgendes Attribut hinzu:
  answerDiv.setAttribute(data - js, "answerfield");
  // Erstelle p in div:
  const answerTxt = document.createElement("p");
  // Fülle mit folgendem Inhalt:
  answerTxt.textContent = answer;
  // Füge zu HomeScreen zu:
  newCard.appendChild(answerTxt);
}
// -----------------------------NavBar-Function---------------------------------
