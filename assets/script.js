
//creating the constants
const start = document.getElementById("start-container");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreContainer = document.getElementById("score-container");



start.addEventListener("click", startQuiz()); //to make start disappear on click
//creating a function to start the quiz
function startQuiz() {
    start.style.display = "none"; //this is so our start button isn't displayed while the quiz is going
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}


//creating variables to run the questions
let lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; //15 seconds per question
let TIMER

//making the function to present the questions after "Start" is pressed
function renderQuestion() {
    let q = questions[runningQuestion]; 

    question.innerHTML = "<p>" + q.question + "</p>"; //this is so the questions from the separate questions.js will show
    choiceA.innerHTML = q.choiceA; //this will bring the choices from the questions.js
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}




//making the counter function to time the quiz 


function renderCounter() {
    if(count<= questionTime) {
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER); //ends the quiz and will show  score
        }
    }
}

//making a function to check the answers
let score = 0
function checkAnswer(answer) {
    if( answer === questions[runningQuestion].correct) {
        score++; //if the answer is correct this adds a point to the score
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        count = 0
        runningQuestion++;
        renderQuestion();
    }
}
//scoring function
function scoreRender() {
    scoreContainer.style.display = "block";

    const scorePercent = Math.round(100 * score/questions.length); //this will calculate score percentage
}









   

 
