// set variables for score and leaderboard
var leaderboard = document.querySelector('#leaderboard');
var score = document.querySelector("#score");
// set variables for start button
var startQuiz = document.querySelector("#startQuiz");
// set variables for questions array
var questionsEl = document.querySelector('#questions');
var questionsIndex = 0
// set variables for timer
var timeEl = document.querySelector('#timer');
var secondsLeft = 60



var questions = [
    {
        question: "What is the capital of Ohio?",
            choices: ["Columbus", "Springfield", "Los Angeles"],
            correctAnswer: 'Columbus',
    },
    {
        questions: "What is the capital of Virginia?",
            choices: ["Henrico", "DC", "Richmond"],
            correctAnswer: "Richmond",
    },
    {
        questions: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Francisco"],
            correctAnswer: "Sacramento",
    },
];

function displayQuestion(){
    questionsEl.textContent = questions[questionsIndex].question;
};

// countdown function starts timer
function countdown() {
    // sets timer
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert('Time is up!');
        leaderboard.classList.remove('hide');
        }
    }, 1000);

};


function checkAnswer(event){  
    console.log(event.target.textContent)
}


function displayChoices(){
    for (let i = 0; i < questions[questionsIndex].choices.length; i++) {
        const answers = questions[questionsIndex].choices[i];
        const button = document.createElement('button')
        button.textContent = answers;
        button.addEventListener('click', checkAnswer)
        questionsEl.appendChild(button);
    }
};



function startGame(){
    document.querySelector("#startContainer").className = 'hide';
    displayQuestion();
    displayChoices();
    countdown();
};

startQuiz.addEventListener("click", function() {
    startGame();
});