
//creating the elements
const start = document.getElementById("start-container");
const quiz = document.getElementById("quiz-container");
const question = document.getElementById("title");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");


//creating variables
// const lastQuestion = questions.length - 1;
// let runningQuestion = 0;

//function to render the questions 
// function renderQuestion(){
//     let q = questions [runningQuestion];

//     question.innerHTML = "<p>" + q.title + "</p>"; //this displays the question
//     choiceA.innerHTML = q.choice[0]; //these are where the choices are in the arrays
//     choiceB.innerHTML = q.choice[1];
//     choiceC.innerHTML = q.choice[2];
// }

//function to start the quiz
start.addEventListener("click", startQuiz());

function startQuiz() {
start.style.display = "none"; //this is so our start button isn't displayed while the quiz is going
// renderQuestion(); //this displays the question
// quiz.style.display = "block"
// renderTimer(); //this displays the timer
// }

//rendering the timer
// let count = 0
// const questionTime = 15; //15seconds

// function renderTimer() {
//     if (count <= questionTime) {
//         timer.innerHTML = count; 
//         count ++
//     }else{
//         count = 0
//     }
 }
