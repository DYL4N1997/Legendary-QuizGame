let questions = [
    {
        qs: "this is question one",
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'

    },

    {
        qs: "this is question two",
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'

    },

    {
        qs: "this is question three",
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'

    }
]

let currentQsIndex = 0


const startbtnEl = document.getElementById('start')
const displayScreen = document.querySelector(".questionbox")


// const startQuiz = document.getElementById('start')

startbtnEl.addEventListener('click', function startGame(event){

var startbutton = startbtnEl.classList.add('hide')


quizQs()


})


function quizQs() {

displayScreen.textContant = questions[currentQsIndex].qs

var buttonArea = document.getElementById("button-area")
buttonArea.innerHTML = ""

for(var i = 0; i < questions[currentQsIndex].choices.length; i++){

    var button = document.createElement("button");
    button.setAttribute("class", 'buttonDesign')
    button.textContent = questions[currentQsIndex].choices[i]
    button.onclick = checkAnswer;
    buttonArea.appendChild(button)
}


}


function checkAnswer(){


  




    

    if(currentQsIndex === questions.length){
        endQuiz()
    } else {
        quizQs()
    }
}