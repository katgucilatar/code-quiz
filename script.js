// variables
var startScreen = document.querySelector('#start-screen');
var startBtn = document.querySelector('#start-btn');
var quizScreen = document.querySelector('#quiz-screen');
var timer = document.querySelector('#timer');
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit-button');


var secondsLeft = 60;
var questionStart = 0;
var question = document.querySelector('#question');
var choiceContainer = document.querySelector('#choice-container');
var firstChoice = document.querySelector('#choice-1');
var secondChoice = document.querySelector('#choice-2');
var thirdChoice = document.querySelector('#choice-3');
var fourthChoice = document.querySelector('#choice-4');

var questionIndex = [
  {
      question: "What is NOT a component of CSS Flex Box?",
      firstChoice: "justify-content",
      secondChoice: "align-items",
      thirdChoice: "background-color",
      fourthChoice: "flex-direction",
      answer: "background-color",
  },
  {
    question: "How many components is included in a for loop?",
    firstChoice: "1",
    secondChoice: "2",
    thirdChoice: "3",
    fourthChoice: "4",
    answer: "3",
},
{
  question: "What is NOT a component of HTML?",
  firstChoice: "color",
  secondChoice: "body",
  thirdChoice: "a",
  fourthChoice: "footer",
  answer: "color",
},
{
  question: "What is CSS used for in web development?",
  firstChoice: "deploying code",
  secondChoice: "creating domains",
  thirdChoice: "interactivity",
  fourthChoice: "design",
  answer: "design",
},
{
  question: "What can be accessed using Chrome DevTools?",
  firstChoice: "Console",
  secondChoice: "Hardware",
  thirdChoice: "Troubleshooting Connection",
  fourthChoice: "Audio",
  answer: "Console",
},

];

// functions
// function: when start button is clicked: 1. start screen is hidden
// 2. quiz screen including questions and answers are shown
// 3. timer starts
function startQuiz() {
  startScreen.style.display = "none";
  quizScreen.style.display = "flex"; 
  startTimer();
  showQuestions();
}

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft 

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}

function displayQuestion() {
  question.innerHTML = "";
  choiceContainer.innerHTML = "";
  for (var i = 0; i < questionIndex.length; i++) {
    var userQuestion = questionIndex.question;
    var answerOne = questionIndex.firstChoice;
    var answerTwo = questionIndex.secondChoice;
    var answerThree = questionIndex.thirdChoice;
    var answerFour = questionIndex.fourthChoice;
    question.textContent = userQuestion;
    firstChoice.textContent = answerOne;
    secondChoice.textContent = answerTwo;
    thirdChoice.textContent = answerThree;
    fourthChoice.textContent = answerFour;
}
}

function determineChoice(event) {
  var choiceClicked = event.target;
  var choice = document.querySelector('li');

  if (choiceClicked === questionIndex.answer) {
    questionIndex++
    choice.style.backgroundColor = "green";

  } else {
    secondsLeft = secondsLeft-10;
    choice.style.backgroundColor = "red";
  }

}

function endQuiz() {
 if (questionStart >= questionIndex.length) {
  quizScreen.style.display = "none";
  endScreen.style.display = "flex";
 }

 if (secondsLeft >= 0) {
 var score = secondsLeft;
 finalScore.textContent = "This is your final score: " + score;
}
}

function saveToLocalStorage() {
  var finalScore = {
    initials: input.value,
    score: secondsLeft,
}
localStorage.setItem("finalScore", JSON.stringify(finalScore));
}


// event listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', saveToLocalStorage);
    
