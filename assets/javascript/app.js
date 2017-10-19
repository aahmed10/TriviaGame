//make begin btn 
$("#startButton").on("click", function () {
	playGame.start();
})

$(document).on("click", "#submit", function(){
	playGame.done(); 
})

// define variables for q and a's 
var questions = [{
	question: "Who is the only player in NBA history to win MVP, Defensive player of the year and Finals MVP in the same season?",
	answers: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Hakeem Olajuwan"],
	correctAnswer: "Hakeem Olajuwan"
}, {
	question: "Which player set the record for total points (scored and assisted on) in a single season?",
	answers: ["Steph Curry", "James Harden", "Chris Paul", "LeBron James"],
	correctAnswer: "James Harden"
}, {
	question: "Who was the first pick in the 2002 NBA draft?",
	answers: ["LeBron James", "Kwame Brown", "Yao Ming", "Dwight Howard"],
	correctAnswer: "Yao Ming",

}
];
// make scoreboard display and set timer 
var playGame = {
	correct: 0,
	incorrect:0, 
	counter: 25,
	countdown: function () {
		playGame.counter--;
		$("#counter").html(playGame.counter);
		if(playGame.counter<=0) {
			console.log("Time's up buddy");
			playGame.done();
		}
	},
//start function. for loop to run through question  and answerbank and apppend to html to display. need to delete start btn upon clicking start
	start: function() {
		timer = setInterval(playGame.countdown, 1000);
		$("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>25</span> Seconds</h2>");
        $("#startButton").remove();
    for (var i=0; i < questions.length; i++) {
      $("#subWrapper").append("<h2>"+questions[i].question+"</h2>");
        for (var j=0; j < questions[i].answers.length; j++) {
          $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='+questions[i].answers[j]+'>"+questions[i].answers[j]);
      }
     }
     $("#subWrapper").append("<br><br><button class='btn btn-warning' id='submit'>SUBMIT</button>"); //submit btn not functioning properly//
    }, 
    /*if else statements for correct and incorrect choices 
with counter for wins and losses as well as unanswered */
    done: function() {
      $.each($("input[name='question-0']:checked"), function(){
        if($(this).val() == questions[0].correctAnswer) {
          playGame.correct++;
          } else {
            playGame.incorrect++;
          }
      });
      $.each($("input[name='question-1']:checked"), function(){
        if($(this).val() == questions[1].correctAnswer) {
        playGame.correct++;
        } else {
          playGame.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function(){
        if($(this).val() == questions[2].correctAnswer) {
        playGame.correct++;
        } else {
          playGame.incorrect++; 
        }
      });
      this.result();
	}, //append scoreboard display to score checking condition
	result: function(){
        clearInterval(timer);
        $("#subWrapper h2").remove();
        $("#subWrapper").html("<h2>Finished!!!!!!</h2>");
        $("#subWrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#subWrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#subWrapper").append("<h3>Not answered: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
          }


};









