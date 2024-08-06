document.addEventListener("DOMContentLoaded", () => {
  let userScore = 0;
  let computerScore = 0;
  let userChoice = "";

  const userScoreEl = document.getElementById("user-score");
  const computerScoreEl = document.getElementById("computer-score");
  const resultEl = document.getElementById("result");
  const buttons = document.querySelectorAll("#selection button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("bg-opacity-50"));
      button.classList.add("bg-opacity-50");
      userChoice = button.id;
    });
  });

  document.getElementById("play-button").addEventListener("click", () => {
    if (!userChoice) {
      alert("Please select Rock, Paper, or Scissors!");
      return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    updateResult(result, computerChoice);

    if (result === "won") {
      userScore++;
      userScoreEl.textContent = userScore;
    } else if (result === "lost") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  });

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function determineWinner(user, computer) {
    if (user === computer) {
      return "draw";
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "won";
    } else {
      return "lost";
    }
  }

  function updateResult(result, computerChoice) {
    if (result === "won") {
      resultEl.textContent = `🎉 You won! 🎉 Computer chose ${computerChoice}.`;
      resultEl.className = "bg-green-200 py-4 rounded";
    } else if (result === "lost") {
      resultEl.textContent = `😞 You lost! 😞 Computer chose ${computerChoice}.`;
      resultEl.className = "bg-red-200 py-4 rounded";
    } else {
      resultEl.textContent = `😐 It's a draw! 😐 Computer also chose ${computerChoice}.`;
      resultEl.className = "bg-gray-200 py-4 rounded";
    }
  }
});
