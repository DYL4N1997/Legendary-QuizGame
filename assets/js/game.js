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

const questions = [
    {
        'question': 'Commonly used data types DO NOT include:',
        'answers': ['alerts','numbers','strings','booleans'],
        'correct_index': 0
    }, {
        'question': 'The condition in an if/else statement is enclosed within ______.',
        'answers': ['quotes','curly brackets','square brackets','parentheses'],
        'correct_index': 3
    }, {
        'question': 'Which program is used by web clients to view the web pages?',
        'answers': ['Web browser','Protocol','Web server','Search Engine'],
        'correct_index': 0
    }, {
        'question': 'The ______ attribute is used to identify the values of variables.',
        'answers': ['text','http-equiv','content','name'],
        'correct_index': 2
    }, {
        'question': 'Which tag is used to identify the keywords describing the site?',
        'answers': ['Comment tag','Title tag','Meta tag','Anchor tag'],
        'correct_index': 2
    }, {
        'question': 'Which are used with a tag to modify its function?',
        'answers': ['Files','Functions','Attributes','Documents'],
        'correct_index': 2
    }, {
        'question': 'This is a declaration that IS NOT an html tag.  it is an instruction to the web browser about what version of HTML a web page is written in.',
        'answers': ['html','doctype','head','body'],
        'correct_index': 1
    }, {
        'question': 'Content information that appears between the oppening and closing ______ tags will show up in a browser view.',
        'answers': ['body','html','head','table'],
        'correct_index': 0
    }, {
        'question': 'What tag element will display a line across the screen?',
        'answers': ['br','a','hr','line'],
        'correct_index': 2
    }, {
        'question': 'In a/an ______ list numbers and roman numerals can appear.',
        'answers': ['Unordered','Ordered','Definition','Straight line'],
        'correct_index': 1
    }, {
        'question': 'This is a language used for describing the look and formatting of a document written in markup language.',
        'answers': ['HTML','CSS','JSON','XML'],
        'correct_index': 1
    }, {
        'question': 'There are ______ characters in the hexidecimal color code combining color shades of red, green, and blue.',
        'answers': ['4','5','6','7'],
        'correct_index': 2
    }, {
        'question': 'Which HTML tag is used to communicate with search engines and describe the Web page\'s content?',
        'answers': ['meta','html','body','head'],
        'correct_index': 0
    }, {
        'question': 'Which term describes the skeletal layout of a Web page, without colors or graphics? ',
        'answers': ['A wireframe','Mind map','Template','Goals'],
        'correct_index': 0
    }
]




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