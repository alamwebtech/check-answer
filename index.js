function Question(question, answer, correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}

/* Using immidiate invoke function, so it does not
interfair with ther variable and function
*/
(function() {
  // Prototype method used
  // To display Question
  Question.prototype.displayQuestion = function() {

    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ":" + this.answer[i]);
    }
  };

  // To check The answer
  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct Answer !");
      sc = callback(true);
    } else {
      console.log("Wrong Answer, try again.");
      sc = callback(false)
    }
    this.displayScore(sc);
  };

// TO display score
  Question.prototype.displayScore = function(score){
    console.log("Your current score is: " + score);
    console.log(".....................");
  }

  var q1 = new Question("Is js the coolest programming language in the programming world ?", ["Yes", "No"], 0);

  var q2 = new Question("What is the name of the course ?", ["CSS", "HTML", "js"], 2);

  var q3 = new Question("What does best describe coding?", ["Boring", "Fun", "Hard", "Tedious"], 1);

  var questions = [q1, q2, q3];

// Using closure to update users score

function score(){
  var sc = 0;
  return function(correct){
    if(correct){
      sc++;
    }
    return sc;
  }
}

var keepScore = score();




  function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer and to EXIT please type EXIT");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer),keepScore);
      nextQuestion();
    }


  }

  nextQuestion();

})();
