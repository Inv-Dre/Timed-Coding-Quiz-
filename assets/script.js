var startButton = document.querySelector("#start-btn")
console.log(startButton)
var timeEl = document.querySelector(".time");
var quiz = document.querySelector("#quiz-container");
var startTime = 60;
var question = document.querySelector('.question');
var score = 0;
var hs = document.querySelector(".hs");
var question = document.querySelector(".question");
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
];

var ans0 = document.querySelector('#a');
var ans1 = document.querySelector('#b');
var ans2 = document.querySelector('#c');
var ans3 = document.querySelector('#d');






startButton.addEventListener("click",function(event){
    
        var timerInterval= setInterval(function(){
          startTime--;
          timeEl.textContent = startTime;
      
          if(startTime<=0){
              clearInterval(timerInterval);
              endQuiz();
          }
        }, 1000);
      
      
      
      function endQuiz(){
          timeEl.textContent = "Times Up!!"
      }
          
      if(event){
        startButton.setAttribute("class",'hide');
        quiz.setAttribute('class','');
        hs.setAttribute('class','');

        question.textContent= questions[0].question;
        ans0.textContent = questions[0].answer[0];
        ans1.textContent = questions[0].answer[1];
        ans2.textContent = questions[0].answer[2];
        ans3.textContent = questions[0].answer[3];
        firstQuestion();
      }});
function firstQuestion(){
        question.addEventListener("click",function(event){
        var answer= event.target;
        console.log(ans2);
        console.log(answer);
            if(answer !== ans2){
                
                startTime -=10;
                
            }else {
               score += 10;
            
               
            };
            nextQuestion();
    }, {once:true}

)};

function nextQuestion(){
    question.addEventListener("click",function(event){

    var answer= event.target
        question.textContent= questions[1].question;
      
        ans0.textContent = questions[1].answer[0];
        ans1.textContent = questions[1].answer[1];
        ans2.textContent = questions[1].answer[2];
        ans3.textContent = questions[1].answer[3];
        
        if(answer.class !== ans0){
            startTime -=10;
        }
        else {
           score +=10;
        };
   
        nextQuestion1();
        
    }, {once:true});
};

function nextQuestion1(){
    question.addEventListener("click",function(event){
        var answer= event.target
        question.textContent= questions[2].question;
      
        ans0.textContent = questions[2].answer[0];
        ans1.textContent = questions[2].answer[1];
        ans2.textContent = questions[2].answer[2];
        ans3.textContent = questions[2].answer[3];
        
        if(answer !== ans1){
            startTime -= 10;
           
        }
        else {
           score += 10;
           
        };
        nextQuestion2();
        
    }, {once:true});
};

function nextQuestion2(){
    ul.addEventListener("click",function(event){
        var answer= event.target
        question.textContent= questions[3].question;
      
        ans0.textContent = questions[3].answer[0];
        ans1.textContent = questions[3].answer[1];
        ans2.textContent = questions[3].answer[2];
        ans3.textContent = questions[3].answer[3];
        
        if(answer !== ans3){
            startTime -= 10;
        }
        else {
          score += 10;};

    }, {once:true});
};
