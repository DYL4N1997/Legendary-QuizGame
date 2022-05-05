const HighScoreTable = document.getElementById("highscores-table");
const ClearHighscoreBtn = document.getElementById("clear-highscores");

// Listening for click event
ClearHighscoreBtn.addEventListener("click", clearHighscores);

RenderHighscoreTable();

RenderHighscoreTable = () => {
    let highscores = localStorage.getItem("scoreList");
    if (highscores) {
      AddHighScore(highscores);
    }
    else {
        console.log("Error loading highscores");
    }
}

//Highscore table generation
AddHighScore = (highscores) => {
    highscores = JSON.parse(highscores);
  
    highscores.forEach(function(scoreItem, index) {
      const rankCell = createRankCell(index + 1);
      const scoreCell = createScoreCell(scoreItem.score);
      const initialsCell = createInitialsCell(scoreItem.initials);
      const highscoreTableRow = createHighscoreTableRow(rankCell, scoreCell, initialsCell);
      HighScoreTable.appendChild(highscoreTableRow);
    });
  }