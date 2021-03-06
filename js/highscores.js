const HighScoreTable = document.getElementById("highscores-table");
const ClearHighscoreBtn = document.getElementById("clear-highscores");


// Listening for click event
ClearHighscoreBtn.addEventListener("click", clearHighscores);

RenderHighscoreTable();


function RenderHighscoreTable () {
    let highscores = localStorage.getItem("scoreList");
    if (highscores) {
      AddHighScores(highscores);
    }
    else {
        console.log("Error loading highscores");
    }
}

//Highscore table generation
function AddHighScores (highscores) {
    highscores = JSON.parse(highscores);
  
    highscores.forEach((scoreItem, index) => {
        const scoreNum = RenderScore(scoreItem.score);
        const initialsText = RenderInitials(scoreItem.initials);
        const highscoreTableRow = RenderHighscoreTableRow(scoreNum, initialsText);
        HighScoreTable.appendChild(highscoreTableRow);
    });
}
  
function RenderScore (score) {
    const scoreNum = document.createElement('td');
    scoreNum.textContent = score;
    return scoreNum;
  }
  
function RenderInitials (initials) {
    const initialsText = document.createElement('td');
    initialsText.textContent = initials;
    return initialsText;
  }

function RenderHighscoreTableRow (scoreNum, initialsText) {
    const tableRow = document.createElement('tr');
    tableRow.appendChild(scoreNum);
    tableRow.appendChild(initialsText);
    return tableRow;
}

//Clear table
function clearHighscores () {
    localStorage.setItem('scoreList', []);
    while (HighScoreTable.children.length > 1) {
      HighScoreTable.removeChild(HighScoreTable.lastChild);
    }
}
