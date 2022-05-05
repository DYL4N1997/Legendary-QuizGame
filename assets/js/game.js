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

let totalTime = 75;
let totalTimeInterval;
let choiceStatusTimeout; 

StartBtn.addEventListener('click', startGame);
Choices.addEventListener('click', processChoice);
SubmitScore.addEventListener('submit', processInput);


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
  function processChoice (event) {
    const userChoice = parseInt(event.target.parentElement.dataset.index);
  
    resetChoiceCondition();
    checkChoice(userChoice);
    getNextQuestion();
}




// /** Set up the pages and get the quiz ready. */
// function init() {
//     // Add all of the event listeners
//     startQuiz.addEventListener('click', event => {
//         event.preventDefault()
//         displayQuestionPage()
//     })
//     answersArray.addEventListener('click', (event) => {
//         event.preventDefault()
//         if (event.target.matches('button')) {
//             let button = event.target
//             if (button.classList.contains('correct')) {
//                 answerFeedback.textContent = "Correct!"
//                 questionNumBox.children[nextQuestion - 1].classList.add('correct')
//                 score++
//             } else {
//                 answerFeedback.textContent = "Wrong!"
//                 questionNumBox.children[nextQuestion - 1].classList.add('wrong')
//                 remainingTime -= timePenalty
//             }
//             if (remainingTime > 0) NextQuestion()
//             else displayGetNamePage()
//         }
//     })



// }

// init()

// let questions = [
//     {
//         qs: "this is question one",
//         choices: ['a', 'b', 'c', 'd'],
//         answer: 'b'

//     },

//     {
//         qs: "this is question two",
//         choices: ['a', 'b', 'c', 'd'],
//         answer: 'b'

//     },

//     {
//         qs: "this is question three",
//         choices: ['a', 'b', 'c', 'd'],
//         answer: 'b'

//     }
// ]

// let currentQsIndex = 0


// const startbtnEl = document.getElementById('start')
// const displayScreen = document.querySelector(".questionbox")


// // const startQuiz = document.getElementById('start')

// startbtnEl.addEventListener('click', function startGame(event){

// var startbutton = startbtnEl.classList.add('hide')


// quizQs()


// })


// function quizQs() {

// displayScreen.textContant = questions[currentQsIndex].qs

// var buttonArea = document.getElementById("button-area")
// buttonArea.innerHTML = ""

// for(var i = 0; i < questions[currentQsIndex].choices.length; i++){

//     var button = document.createElement("button");
//     button.setAttribute("class", 'buttonDesign')
//     button.textContent = questions[currentQsIndex].choices[i]
//     button.onclick = checkAnswer;
//     buttonArea.appendChild(button)
// }


// }


// function checkAnswer(){


  




    

//     if(currentQsIndex === questions.length){
//         endQuiz()
//     } else {
//         quizQs()
//     }
// }