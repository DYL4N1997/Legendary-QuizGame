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
  
    highscores.forEach((scoreItem, index) => {

      const rankItem = RenderRank(index + 1); {
        RenderRank = (rank) => {
            const rankItem = document.createElement('td');
            rankItem.textContent = `#${rank}`;
            return rankItem;
        }
      }

      const scoreNum = RenderScore(scoreItem.score); {
        RenderScore = (score) => {
            const scoreNum = document.createElement('td');
            scoreNum.textContent = score;
            return scoreNum;
        }
      }

      const initialsText = createInitialsCell(scoreItem.initials); {
        RenderInitials = (initials) => {
            const initialsCell = document.createElement('td');
            initialsCell.textContent = initials;
            return initialsCell;
        }
     }

      const highscoreTableRow = RenderHighscoreTableRow(rankItem, scoreNum, initialsText);
      HighScoreTable.appendChild(highscoreTableRow);
    });
}

RenderHighscoreTableRow = (rankItem, scoreNum, initialsText) => {
    const tableRow = document.createElement('tr');
    tableRow.appendChild(rankItem);
    tableRow.appendChild(scoreNum);
    tableRow.appendChild(initialsText);
    return tableRow;
}

