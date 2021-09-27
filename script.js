/* Students: Please use this week's project for Week 6: Assignment 6: Enhanced User Interfaces. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
//array for the quiz
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
//turn tracker
let turn= 0;
// show first question after the page has fully loaded
findQuestion();
// function that can show the current question and its possible answers
function findQuestion() {
  // set the counter
  $('#move').empty(turn + 1);
  //set progress bar
  $( "#progressbar" ).progressbar({
  value: myQuiz[turn].progress,
  max: 100
});
//show question number
  $('#number').text(myQuiz[turn].number);
   // show question text
  $('#question').text(myQuiz[turn].question);
  // render buttons for answers
  $('#answer').empty();

for ( let mc in myQuiz[turn].answer) {
  // 1. Create the button and set text to answer text
  var button = $("<span>");
  button.text(myQuiz[turn].answer[mc]);
 // 2. Store a custom html attribute data value in the span
  button.data('choice', mc);
// 3. Append button element into html document model
  $('#answer').append( button );
// 4. Add event handler
  button.draggable(); 
}
 //make the #question droppable to receive the dragged answer
 $('#question').droppable(
    {
      drop: function(event, ui) {
        console.log( ui.draggable.data('choice') );
        var userchoice = ui.draggable.data('choice');
        // did the user pick the correct choice?
        checkAnswer(userchoice);
      }
    }
  );
}
function checkAnswer(choice) {
   // handle event when user clicks an answer: right or wrong?
    // decide which answer is correct
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
//wrong answer
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
// show another if one is available
function nextQuestion() {
  turn++;
  if( turn < myQuiz.length) {
    findQuestion();
  }
  else{
    $('body').html("<h1>You have completed the Quiz</h1>");
  }
  }
