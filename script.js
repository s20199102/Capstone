// script.js

// URL에서 어떤 단원을 풀지 읽어옵니다 (예: quiz.html?unit=Unit%205...)
const params = new URLSearchParams(window.location.search);
const selectedUnit = params.get("unit") || "all";

// 풀 문제 필터링
let quizQuestions = (selectedUnit === "all")
  ? questions
  : questions.filter(q => q.unit === selectedUnit);

// 제목 설정
document.getElementById("quiz-title").textContent =
  (selectedUnit === "all") ? "All Units" : selectedUnit;

const container = document.getElementById("quiz-container");
const scoreBoard = document.getElementById("scoreboard");
let score = 0;
let answered = 0;
const total = quizQuestions.length;

scoreBoard.textContent = `Score: 0 / ${total}`;

if (total === 0) {
  container.innerHTML = "<p>No questions in this unit yet.</p>";
}

// 각 문제를 화면에 그립니다
quizQuestions.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "question";

  const qText = document.createElement("p");
  qText.innerHTML = `<strong>${index + 1}.</strong> ${item.q}`;
  div.appendChild(qText);

  item.options.forEach((option, optIndex) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(div, btn, item, optIndex));
    div.appendChild(btn);
  });

  // 해설 영역 (처음엔 숨김)
  const exp = document.createElement("div");
  exp.className = "explanation";
  exp.style.display = "none";
  exp.textContent = "💡 " + item.explanation;
  div.appendChild(exp);

  container.appendChild(div);
});

function handleAnswer(div, btn, item, optIndex) {
  // 이미 답한 문제는 무시
  if (div.classList.contains("done")) return;
  div.classList.add("done");
  answered++;

  const buttons = div.querySelectorAll("button");

  if (optIndex === item.answer) {
    btn.classList.add("right");
    score++;
  } else {
    btn.classList.add("wrong");
    // 정답 버튼을 초록색으로 표시
    buttons[item.answer].classList.add("right");
  }

  // 모든 버튼 비활성화 + 해설 표시
  buttons.forEach(b => b.disabled = true);
  div.querySelector(".explanation").style.display = "block";

  // 점수 갱신
  scoreBoard.textContent = `Score: ${score} / ${total}`;

  if (answered === total) {
    const pct = Math.round((score / total) * 100);
    scoreBoard.textContent = `Done! ${score} / ${total} (${pct}%)`;
  }
}