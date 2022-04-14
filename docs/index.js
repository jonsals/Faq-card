const textContainer = document.getElementsByClassName("text-container");
const question = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");

console.log(answer);

for (var i = 0; i < textContainer.length; i++) {
  textContainer[i].addEventListener("click", function () {
    resetActiveQuestion();
    this.childNodes[1].childNodes[1].classList.add("question-active");

    let arrow = this.childNodes[1].childNodes[3].childNodes[1];
    let answer = this.childNodes[3].childNodes[1];

    // resetAllAnswers();
    arrow.classList.toggle("active");
    this.classList.toggle("active");
    if (answer.style.display === "block") {
      answer.style.display = "none";
      resetActiveQuestion();
      resetAllAnswers();
    } else {
      answer.classList.toggle("active");
      //   resetAllAnswers();
    }
  });
}

function resetActiveQuestion() {
  for (var i = 0; i < question.length; i++) {
    question[i].classList.remove("question-active");
  }
}

function resetAllAnswers() {
  for (var i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
    answer[i].classList.remove("active");
  }
}
