var questions = [
    {
      title: "What is NOT a component of CSS Flex Box?",
      choices: ["justify-content", "align-items", "background-color", "flex-direction"],
      answer: "background-color",
    },
    {
      title: "How many components is included in a for loop?",
      choices: ["1", "2", "3", "4"],
      answer: "p3",
    },
    {
      title: "What is NOT a component of HTML?",
      choices: ["color", "body", "a", "footer"],
      answer: "color",
    },
    {
      title:
        "What is CSS used for in web development?",
      choices: ["deploying code", "creating domains", "interactivity", "design"],
      answer: "design",
    },
    {
      title:
        "A very useful tool for used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal / bash", "for loops", "console log"],
      answer: "console log",
    },
  ];
  
  var score = 0;
  var questionList = 0;
  var startTime = 60;
  var startScreen = document.getElementById("#start-screen")
  var timeEl = document.getElementById("#timer");
  var questionsDiv = document.getElementById("#questions");
  var quizScreen = document.getElementById("#quiz-screen")
  var startBtn = document.getElementById("#start-btn");
  var submitBtn = document.getElementById("#submit-btn");
  var initialsEl = document.getElementById("#initials");

  document.getElementById("#start-btn").addEventListener("click", startQuiz);
  
  function startQuiz() {
    startScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "show");
    timerId = setInterval(tick, 1000);
    timeEl.textContent = time;
  
    getQuestion();
  }

  
  function timerStart() {
    time--;
    timeEl.textContent = time;
  
    if (time <= 0) {
      quizEnd();
    }
  }

  function getQuestion() {
    var currentQuestion = questions[title];
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);
      choiceNode.textContent = i + 1 + ". " + choice;
      choiceNode.onclick = questionClick;
      choicesEl.appendChild(choiceNode);
    });
  }

  function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
      time -= 10;
      currentQuestionIndex++;
    }

    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }

  function quizEnd() {
    clearInterval(timerId);

    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;
  
    quizScreen.setAttribute("class", "hide");
  }

  document.getElementById("#submit-btn").addEventListener("click", saveHighscore);

function saveHighscore() {
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
      var highscores = localStorage.setItem("highscores")
      window.location.href = "scores.html";
    }
  }


  