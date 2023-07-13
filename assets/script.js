var startButton = document.querySelector("#start-btn")
console.log(startButton)
var timeEl = document.querySelector(".time");
var startTime = 60



startButton.addEventListener("click",function(){
        var timerInterval= setInterval(function(){
          startTime--;
          timeEl.textContent = startTime;
      
          if(startTime===0){
              clearInterval(timerInterval);
              endQuiz();
          }
        },1000);
      
      
      
      function endQuiz(){
          timeEl.textContent = "Times Up!!"
      };
});

