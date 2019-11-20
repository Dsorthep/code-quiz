
//creating the elements
const start = document.getElementById("start-container");
const quiz = document.getElementById("quiz-container");
const question = document.getElementById("title");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");




//function to render the questions 
// function renderQuestion(){

// }

//function to start the quiz
start.addEventListener("click", startQuiz());



function startQuiz() {
start.style.display = "none"; //this is so our start button isn't displayed while the quiz is going
}; 



// quiz.addEventListener(renderQuestion());
// function renderQuestion() {
    
//         //this displays the question
        
//     quiz.style.display = "block";
//         let q = questions [runningQuestion];
//          //creating variables
//         const lastQuestion = questions.length - 1;
//         let runningQuestion = 0;

//      question.innerText = "<p>" + q.title + "</p>"; //this displays the question
//      choiceA.innerText = q.choice[0]; //these are where the choices are in the arrays
//      choiceB.innerText = q.choice[1];
//      choiceC.innerText = q.choice[2];
    

    // }; 
   

 
