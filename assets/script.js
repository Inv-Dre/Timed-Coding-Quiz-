//way to target start button
var startButton = document.querySelector("#start-btn");
//way to target element with class time
var timeEl = document.querySelector(".time");
//way to target element with id quiz-container
var quiz = document.querySelector("#quiz-container");
// setting start time for timer
let startTime = 60;
//way to target element with class question
var question = document.querySelector(".question");
// setting score 
let score = 0;
// changings scores value to a string
var scoreEarned = String(score);
// dont think i need this tbh
var hs = document.querySelector(".hs");
// targeting the div with id highscorepage
var highScorePage = document.getElementById("highscorepage");
// setting the question index to 0
let currentQuestionIndex = 0;
// aray of numbers
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// unordered list made using jQuery
var hslist = $("<ul>");
// access userInitials from the local storage
var userInitialsValue = localStorage.getItem("UserInitials");
// access score from the local storage
var scoreValue = localStorage.getItem("UserScore");
// button that appears when time is up
var btn = document.querySelector("#restartbtn");



// array of questions along with their answers
var questions = [
  {
    question: "Which operator is for strict equality",
    answer: ["==", "!=", "===", "none of the above"],
    correct: "===",
  },

  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answer: ["var", "element", "x", "none of the above"],
    correct: "var",
  },

  {
    question: "When an operator value is NULL, the typeof returned is:",
    answer: ["boolean", "undefined", "object", "none of the above"],
    correct: "undefined",
  },

  {
    question: "How do we write a comment in javascript",
    answer: ["/* */", "$", '" "', "none of the above"],
    correct: "none of the above",
  },
];
// setting all of these variables to equal an id. These ids used to changed text values seen on screen
var ans0 = document.getElementById("a");
var ans1 = document.getElementById("b");
var ans2 = document.getElementById("c");
var ans3 = document.getElementById("d");
// declaring variable
var timerInterval;

// end quiz function
function endQuiz() {
    // timeEL will say times up when the quiz is over
  timeEl.textContent = "Times Up!!";
//   changing the class of element so it will appear
  quiz.setAttribute("class", "hide");
// prompting the user to obtain initials
  var userInitials = window.prompt("Enter your Initials");
// for loop to check entered values for numbers
  for (let index = 0; index < userInitials.length; index++) {
    var notInitials = userInitials[index];
    console.log(notInitials);
    if (numbers.includes(userInitials[index])) {
      console.log("something");
      return endQuiz();
    }
  }
//   save these things to local storage
  localStorage.setItem("UserInitials", userInitials);
  localStorage.setItem("UserScore", score);
// make this scores appear on page
  highScorePage.setAttribute("class", "");

// create list item
  var pEl = $("<li>");
//  insert text into the li
  pEl.text(`took by: ${userInitialsValue} score: ${scoreValue}`);

  console.log(hslist);

  console.log("pel text", pEl.text());
  
// put the li in the ul
  hslist.append(pEl.text());
//   put the ul in the div
  highScorePage.append(hslist.html());


  
//   make button appear
  btn.setAttribute('class','');
//   make the quiz page restart
  btn.addEventListener('click', (event) => {
    if(event){
    location.reload(true)
    }
  });

}
// start timer, make quiz appear
startButton.addEventListener("click", (event) => {
  // var startTime = 60;

  timerInterval = setInterval(function () {
    startTime--;

    timeEl.textContent = startTime;

    if (startTime <= 0) {
      clearInterval(timerInterval);

      endQuiz();
    }
  }, 1000);

  if (event) {
    console.log(event);
    startButton.setAttribute("class", "hide");
    quiz.setAttribute("class", "");

    showQuestion();
    // firstQuestion();
  }
});
// applies text content to elements that were blank by going through the questions array and using the index to do that
function showQuestion() {
  question.textContent = questions[currentQuestionIndex].question;
  ans0.textContent = questions[currentQuestionIndex].answer[0];
  ans1.textContent = questions[currentQuestionIndex].answer[1];
  ans2.textContent = questions[currentQuestionIndex].answer[2];
  ans3.textContent = questions[currentQuestionIndex].answer[3];
}
// displays questions 
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    clearInterval(timerInterval);
    endQuiz();
  }
}
// makes it so you can click on the answers 
ans0.addEventListener("click", handleClick);
ans1.addEventListener("click", handleClick);
ans2.addEventListener("click", handleClick);
ans3.addEventListener("click", handleClick);

// clicked answers are checked against correct answer and trhe time and score changes depending on choice
function handleClick(event) {
  var answer = event.target.textContent;
  console.log(answer);
  if (answer !== questions[currentQuestionIndex].correct) {
    startTime -= 10;
  } else {
    score += 10;
  }
  nextQuestion();
  return score;
}
