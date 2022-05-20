function toggleclass(element) {
  element.classList.toggle("--bookmarked");
}

function show_hide_click(element) {
  element.classList.toggle("visible");
  console.log("show_hide");
}

function card_activity(btn) {
  // show_hide_click(answ);

  btn.classList.toggle("background_red");

  if (btn.innerHTML === "Hide Answer") {
    btn.innerHTML = "Show Answer";
  } else {
    btn.innerHTML = "Hide Answer";
  }
  console.log("card_activity");
}

export { toggleclass, show_hide_click, card_activity };

// {
// category: "Entertainment: Music"
// correct_answer: "True"
// difficulty: "easy"
// incorrect_answers: ['False']
// question: "The music group Daft Punk got their name from a negative review they recieved."
// type: "boolean"
// [[Prototype]]: Object
// }
