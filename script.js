const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("correct")) {
      button.style.backgroundColor = "lightgreen";
      button.textContent += " ✓ Correct";
    } else {
      button.style.backgroundColor = "lightcoral";
      button.textContent += " ✗ Try again";
    }
  });
});