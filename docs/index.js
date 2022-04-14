const textContainer = document.getElementsByClassName("text-container");
const question = document.getElementsByClassName("question");
const arrows = document.getElementsByClassName("arrow");
const answers = document.getElementsByClassName("answer");

for (var i = 0; i < textContainer.length; i++) {
  textContainer[i].addEventListener("click", function () {
    var qID = getIdNum(this.id);
    var ans = answers[qID];

    if (ans.classList.contains("answer-active")) {
      ans.classList.add("answer-inactive");
      setTimeout(function () {
        ans.classList.remove("answer-inactive");
      }, 300);
      ans.classList.remove("answer-active");
      question[qID].classList.remove("question-active");
      arrows[qID].classList.remove("arrow-active");
    } else {
      resetActiveQuestion();
      ans.classList.add("answer-active");
      question[qID].classList.add("question-active");
      arrows[qID].classList.add("arrow-active");
    }
  });
}

function resetActiveQuestion() {
  for (var i = 0; i < question.length; i++) {
    question[i].classList.remove("question-active");
    answers[i].classList.remove("answer-active");
    arrows[i].classList.remove("arrow-active");
  }
}

function getIdNum(classId) {
  return classId.replace(/\D/g, "");
}
