// answers
var answers = ["It is certain", 
               "It is decidedly so", 
               "Without a doubt", 
               "Yes - definitely",
               "You may rely on it", 
               "As I see it, yes", 
               "Most likely", 
               "Outlook good", 
               "Yes, positive",
               "Signs point to yes",
               "Don't count on it", 
               "My reply is no",
               "My sources say no", 
               "Outlook not so good",
               "Very doubtful", 
               "Reply hazy, try again", 
               "Ask again later", 
               "Better not tell you now",
               "Cannot predict now", 
               "Concentrate and ask again"];

window.onload = function() {
   var answer = document.getElementById("answer");
   var eightball = document.getElementById("ask");//to click

   
   eightball.addEventListener("click", function() {
     if (question.value.length < 1) {
       alert('Please enter your question!');
     } else {
       eight.innerText = "";
       var num = Math.floor(Math.random() * Math.floor(answers.length));
       answer.innerText = answers[num];
     }
   });
};