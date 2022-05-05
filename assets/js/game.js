const QuizSections = document.querySelectorAll(".quiz-section");

const StartSection = document.getElementById("start");
const StartBtn = document.getElementById("start-button");

const QuizSection = document.getElementById("quiz-questions");
const TimeRemaining = document.getElementById("time-remaining");
const Questions = document.getElementById("questions");
const Choices = document.getElementById("choices");
const ChoiceCondition = document.querySelectorAll(".choice-condition");
const Correct = document.getElementById("correct");
const Wrong = document.getElementById("incorrect");

const EndSection = document.getElementById("end");
const EndTitle = document.getElementById("end-title");
const Score = document.getElementById("score");
const InitialsInput = document.getElementById("initials");
const SubmitScore = document.getElementById("submit-score");
const ErrorLog = document.getElementById("error-log");

//Questions
class Question {
    constructor(question, choices, indexOfCorrectChoice) {
      this.question = question;
      this.choices = choices;
      this.indexOfCorrectChoice = indexOfCorrectChoice;
    }
  }
  const Question_1 = new Question("Commonly used data types DO NOT include: ", 
    ["Strings", "Booleans", "Alerts", "Numbers"], 2);
  const Question_2 = new Question("The condition in an if / else statement is enclosed within ____.", 
    ["Quotes", "Curly brackets", "Parentheses", "Square brackets"], 2);
  const Question_3 = new Question("Arrays in JavaScript can be used to store ____.", 
    ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
  const Question_4 = new Question("String values must be enclosed within _____ when being assigned to variables.", 
    ["Commas", "Curly brackets", "Quotes", "Parentheses"], 2);
  const Question_5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ", 
    ["JavaScript", "Terminal/Bash", "For Loops", "console.log"], 3);
  const Question_6 = new Question("Which program is used by web clients to view the web pages?: ",
    ["Web browser","Protocol","Web server","Search Engine"], 0);
  const Question_7 = new Question("The ______ attribute is used to identify the values of variables.: ",
  ["text","http-equiv","content","name"], 2);
  const QuestionList = [Question_1, Question_2, Question_3, Question_4, Question_5, Question_6, Question_7];

 
let currentQuestion = 0;

let totalTime = 80;
let totalTimeInterval;
let choiceStatusTimeout; 

StartBtn.addEventListener('click', startGame);
Choices.addEventListener('click', processChoice);
// SubmitScore.addEventListener('submit', processInput);


function startGame () {
    showElement(QuizSections, QuizSection);
    
    displayTime();  
    displayQuestion();
  
    startTimer();
}

showElement = (siblingList, showElement) => {
    for (element of siblingList) {
      hideElement(element);
    }
    showElement.classList.remove("hidden");
} 
  
hideElement = (element) => {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
}
  
displayTime = () => {
    TimeRemaining.textContent = totalTime;
}
  
startTimer = () => {
    totalTimeInterval = setInterval(function() {
      totalTime--;
      displayTime();
      checkTime();
  
    }, 1000);
}

checkTime = () => {
    if (totalTime <= 0) {
      totalTime = 0;
      endGame();
    }
}
  
displayQuestion = () => {
    Questions.textContent = QuestionList[currentQuestion].question;
  
    displayChoiceList();
}
  
displayChoiceList = () => {
    Choices.innerHTML = "";
  
    QuestionList[currentQuestion].choices.forEach((answer, index) => {
      const li = document.createElement("li");
      li.dataset.index = index;
      const button = document.createElement("button");
      button.textContent = (index + 1) + ". " + answer;
      li.appendChild(button);
      Choices.appendChild(li);
    });
}
  
  //when user answers a question
  function processChoice (e) {
    const userChoice = parseInt(e.target.parentElement.dataset.index);
  
    resetChoiceCondition();
    checkChoice(userChoice);
    getNextQuestion();
}

//Displaying choice statuses
resetChoiceCondition = () => {
    clearTimeout(choiceStatusTimeout);
    TimeRemainingDefaultColor();
}
  
TimeRemainingDefaultColor = () => {
    TimeRemaining.style.color = "#4616E8";
}
  
styleTimeRemainingWrong = () => {
    TimeRemaining.style.color = "#E81648";
}
  
checkChoice = (userChoice) => {
    if (isChoiceCorrect(userChoice)) {
      displayCorrectChoiceCondition();
    } else {
      displayWrongChoiceCondition();
    }
  }
  
isChoiceCorrect = (choice) => {
    return choice === QuestionList[currentQuestion].indexOfCorrectChoice;
}

displayWrongChoiceCondition = () => {
    deductTimeBy(10);
  
    styleTimeRemainingWrong();
    showElement(ChoiceCondition, Wrong);
  
    choiceStatusTimeout = setTimeout(() => {
      hideElement(Wrong);
      TimeRemainingDefaultColor();
    }, 1000);
  }
  
    deductTimeBy = (seconds) => {
    totalTime -= seconds;
    checkTime();
    displayTime();
  }
  
    displayCorrectChoiceCondition = () => {
    showElement(ChoiceCondition, Correct);
  
    choiceStatusTimeout = setTimeout(() => {
      hideElement(Correct);
    }, 1000);
}

//Get next question
getNextQuestion = () => {
    currentQuestion++;
    if (currentQuestion >= QuestionList.length) {
      endGame();
    } else {
      displayQuestion();
    }
}

// End of the game
endGame = () => {
    clearInterval(totalTimeInterval);
    
    showElement(QuizSections, EndSection);
    displayScore();
    EndHeader();
  }
  
displayScore = () => {
    Score.textContent = totalTime;
  }
  
EndHeader = () => {
    if (totalTime === 0) {
      EndTitle.textContent = "Sorry! time out!";
    } else {
      EndTitle.textContent = "Well Done! You have completed the quiz!";
    }
}

// Submitting Initials
processInput = (e) => {
    e.preventDefault();
  
    const initials = InitialsInput.value.toUpperCase();
  
    if (isInputValid(initials)) {
      const score = totalTime;
      const highscoreEntry = NewHighscoreEntry(initials, score);
      saveHighscoreEntry(highscoreEntry);
      window.location.href= "./highscores.html";
    }
  }
  
    NewHighscoreEntry = (initials, score) => {
    const entry = {
      initials: initials,
      score: score,
    }
    return entry;
}
  
saveHighscoreEntry = (highscoreEntry) => {
    const currentScores = getScoreList();
    AddToHighscoreList(highscoreEntry, currentScores);
    localStorage.setItem('scoreList', JSON.stringify(currentScores));
}

ScoreList = () => {
    const currentScores = localStorage.getItem('scoreList');
    if (currentScores) {
      return JSON.parse(currentScores);
    } else {
      return [];
    }
  }
  
AddToHighscoreList = (newEntry, scoreList) => {
    const newScoreIndex = NewScoreIndex(newEntry, scoreList);
    scoreList.splice(newScoreIndex, 0, newEntry);
  }
  
NewScoreIndex = (newEntry, scoreList) => {
    if (scoreList.length > 0) {
      for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i].score <= newEntry.score) {
          return i;
        }
      } 
    }
    return scoreList.length;
  }