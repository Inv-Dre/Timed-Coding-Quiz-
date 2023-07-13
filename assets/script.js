var startButton = document.querySelector("#start-btn")
console.log(startButton)
var timeEl = document.querySelector(".time");
var quiz = document.querySelector("#quiz-container");
var startTime = 60



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
        quiz.setAttribute('class','')
        

    
}     
});



