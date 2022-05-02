const main = document.getElementsByTagName('main')[0]
const viewHighscore = document.getElementById('view_highscore')
const timeDisplay = document.getElementById('time_display')
const startQuiz = document.getElementById('start_quiz')
const questionNumBox = document.getElementById('question_num_box')
const questionDisplay = document.getElementById('question_display')
const answersList = document.getElementById('answer_array')
const answerFeedback = document.getElementById('feedback')
const scoreDisplay = document.getElementById('score_display')
const initialsInput = document.getElementById('initials_input')
const submitInitials = document.getElementById('submit_initials')
const highscoreList = document.getElementById('highscore_list')
const StartingPage = document.getElementById('starting_page')
const clearHighscores = document.getElementById('clear_highscores')






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