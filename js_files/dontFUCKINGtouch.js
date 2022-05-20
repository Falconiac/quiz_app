function cardGenerator(question, answer) {
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

  homescreen.append(newCard);
}

export { cardGenerator };
