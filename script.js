/* Students: Please use this week's project for Week 6: Assignment 6: Enhanced User Interfaces. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
const myQuiz = [
  {
    number: "Question 1",
    question: "What is the capital of California?",
    answer: ["A) Los Angeles    ", "B) Monterrey    ", "C) Sacramento    ", "D) San Francisco    "],
    correct: 2,
    progress: 25
  },
  {
    number: "Question 2",
    question: "How many teams are in the NFL?",
    answer: ["A) 32  ", "B) 8  ", "C) 24  ", "D) 16"],
    correct: 0,
    progress: 50
  },
   {
    number: "Question 3",
    question: "Who was the first first president of the United States?",
    answer: ["A) John Adams    ", "B) George Washington    ", "C) James Madison    ", "D) Thomas Jefferson    "],
    correct: 1,
    progress: 75
  },
  {
    number: "Question 4",
    question: "How many states are in the United States?",
    answer: ["A) 25", "B) 20", "C) 30", "D) 50"],
    correct: 3,
    progress: 100
  }
];
let turn= 0;

findQuestion();

function findQuestion() {
  $('#move').empty(turn + 1);
  $( "#progressbar" ).progressbar({
  value: myQuiz[turn].progress,
  max: 100
});
  $('#number').text(myQuiz[turn].number);
  $('#question').text(myQuiz[turn].question);
  $('#answer').empty();

for ( let mc in myQuiz[turn].answer) {
  var button = $("<span>");
  button.text(myQuiz[turn].answer[mc]);
  button.data('choice', mc);

  $('#answer').append( button );

  button.draggable(); 
}
 $('#question').droppable(
    {
      drop: function(event, ui) {
        console.log( ui.draggable.data('choice') );
        var userchoice = ui.draggable.data('choice');
        checkAnswer(userchoice);
      }
    }
  );
}
function checkAnswer(choice) {
if (choice == myQuiz[turn].correct ) {
  $('#wrong').empty();
  //$('#right').html("<strong>Correct</strong>");
  $( function() {
    $( "#right" ).dialog({
      modal: true,
      buttons: {
        "Correct": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );
  nextQuestion();
}
else{
  
  //$('#wrong').html("<strong>Incorrect</strong>");
  $( function() {
    $( "#wrong" ).dialog({
      modal: true,
      buttons: {
        "Incorrect": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  } );
  $('#right').empty();
}
}

function nextQuestion() {
  turn++;
  if( turn < myQuiz.length) {
    findQuestion();
  }
  else{
    $('body').html("<h1>You have completed the Quiz</h1>");
  }
  }
