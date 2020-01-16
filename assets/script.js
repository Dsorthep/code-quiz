

//creating the constants
const start = document.getElementById("start-container");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("score-container");





 
    
     //creating variables to run the questions
  const lastQuestion = questions.length - 1;
  let runningQuestion = 0;
  let count = 0;
  const questionTime = 20; //15 seconds per question
  const gaugeWidth = 150; // 150px
  const gaugeUnit = gaugeWidth / questionTime;
  let TIMER;
  let score = 0;

    function renderQuestion() {
    console.log("question was rendered");
    let q = questions[runningQuestion]; 
    question.innerHTML = "<p>" + q.question + "</p>"; //this is so the questions from the separate questions.js will show
    choiceA.innerHTML = q.choiceA; //this will bring the choices from the questions.js
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
 }
    start.addEventListener("click", startQuiz); //to make start disappear on click
    function startQuiz() {
    console.log("start button disappeared")
    start.style.display = "none";
    renderQuestion(); //this is so our start button isn't displayed while the quiz is going
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
 }

    //this shows correct and incorrect answers in the progress display 
    function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

    function renderCounter() {
    console.log("timer started");
    if(count<= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER); //ends the quiz and will show  score
            scoreRender();
            console.log("timer cleared")
        }
    }
}

//making a function to check the answers
function checkAnswer(answer) {
    if( answer === questions[runningQuestion].correct) {
        score++; //if the answer is correct this adds a point to the score
        answerIsCorrect();
        console.log("answer was correct");
    }else{
        answerIsWrong();
        console.log("answer was wrong");
        
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
        console.log("new question appears")
    }else{
        // this ends the quiz and shows the final score
        clearInterval(TIMER);
        scoreRender();
    }
}

// this function is for when the answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#3fda19";
}

// this function is for when the answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f12020";
}
//scoring function
function scoreRender() {
    console.log("score was changed");
    scoreContainer.style.display = "block";
    console.log("score appeared")

    const scorePercent = Math.round(100 * score/questions.length); //this will calculate score percentage
    // this displays the score at the end
    scoreContainer.innerHTML += "<p>"+ scorePercent +"%</p>";
}









   

 
