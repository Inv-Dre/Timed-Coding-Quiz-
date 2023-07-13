var startButton = document.querySelector("#start-btn")
console.log(startButton)
var timeEl = document.querySelector(".time");
var quiz = document.querySelector("#quiz-container");
var startTime = 60
var question = document.querySelector('.question')
var questions
=[
     {question:"Which operator is for strict equality",
     answer:['==','!=','===','none of the above']},
   
     {question:"Which of the following keywords is used to define a variable in Javascript?",
     answer:['var','element','x','none of the above']},

     
     {question:"When an operator value is NULL, the typeof returned is:",
     answer:['boolean','undefined','object','none of the above']},

    
     {question:"How do we write a comment in javascript",
     answer:['/* */','$','" "','none of the above']}, 
]






startButton.addEventListener("click",function(event){
        var timerInterval= setInterval(function(){
          startTime--;
          timeEl.textContent = startTime;
      
          if(startTime===0){
              clearInterval(timerInterval);
              endQuiz();
          }
        }, 1000);
      
      
      
      function endQuiz(){
          timeEl.textContent = "Times Up!!"
      };

      if(event){
        startButton.setAttribute("class",'hide');
        quiz.setAttribute('class','');
    
        }
        
        

        
}     

function setNextQuestion(){

};
function showQuestion(){

};

function selectAnswer(){

};



});



