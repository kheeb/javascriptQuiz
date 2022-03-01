var score = document.querySelector(".score");
var timer = document.querySelector(".timer-text");
var startQuiz = document.querySelector("#startQuiz");
var questionsEl = document.querySelector('#questions');
var questionsIndex = 0

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
}



function startGame(){
    document.querySelector("#startContainer").className = 'hide';
    displayQuestion();
    displayChoices();
};

startQuiz.addEventListener("click", function(){
    startGame()
});
