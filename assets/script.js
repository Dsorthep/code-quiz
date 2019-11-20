

//creating the constants
const start = document.getElementById("start-container");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const scoreContainer = document.getElementById("score-container");




//creating a function to start the quiz

     
    
    //renderQuestion();
     //making the function to present the questions after "Start" is pressed
 
    
     //creating variables to run the questions
  const lastQuestion = questions.length - 1;
  let runningQuestion = 0;
  let count = 0;
  const questionTime = 15; //15 seconds per question
  let TIMER

  function renderQuestion() {
    console.log("question was rendered");
     let q = questions[runningQuestion]; 
     quiz.style.display = "block";
     const quiz = questions[i];
     question.innerHTML = "<p>" + q.question + "</p>"; //this is so the questions from the separate questions.js will show
     choiceA.innerHTML = "<p>" + q.choiceA + "</p>"; //this will bring the choices from the questions.js
     choiceB.innerHTML = "<p>" + q.choiceB + "</p>";
     choiceC.innerHTML = "<p>" + q.choiceC + "</p>";
 }
 start.addEventListener("click", startQuiz()); //to make start disappear on click
 function startQuiz() {
    console.log("start button disappeared")
    start.style.display = "none";
     renderQuestion(); //this is so our start button isn't displayed while the quiz is going
     quiz.style.display = "block";
     renderCounter();
     TIMER = setInterval(renderCounter,1000);

 
  
  
  function renderCounter() {
    console.log("timer started");
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
            console.log("timer cleared")
        }
    }
}
  
    

}









//making the counter function to time the quiz 




//making a function to check the answers
let score = 0
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
        count = 0
        runningQuestion++;
        renderQuestion();
        console.log("new question appears")
    }
}
//scoring function
function scoreRender() {
    console.log("score was changed");
    scoreContainer.style.display = "block";
    console.log("score appeared")

    const scorePercent = Math.round(100 * score/questions.length); //this will calculate score percentage
}









   

 
