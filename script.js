const questions = document.querySelectorAll(".question");
let score = 0;
let answered = 0;

// 점수 표시 영역 만들기
const scoreBoard = document.createElement("div");
scoreBoard.id = "scoreboard";
scoreBoard.textContent = `Score: 0 / ${questions.length}`;
document.querySelector("h1").after(scoreBoard);

questions.forEach(question => {
  const buttons = question.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // 이미 답한 문제면 무시
      if (question.classList.contains("done")) return;
      question.classList.add("done");
      answered++;

      if (button.classList.contains("correct")) {
        button.style.backgroundColor = "lightgreen";
        score++;
      } else {
        button.style.backgroundColor = "lightcoral";
        // 정답 버튼을 초록색으로 보여주기
        question.querySelector(".correct").style.backgroundColor = "lightgreen";
      }

      // 답한 후 그 문제의 모든 버튼 비활성화
      buttons.forEach(b => b.disabled = true);

      // 점수 갱신
      scoreBoard.textContent = `Score: ${score} / ${questions.length}`;

      // 다 풀었으면 메시지
      if (answered === questions.length) {
        scoreBoard.textContent = `Finished! Final Score: ${score} / ${questions.length}`;
      }
    });
  });
});