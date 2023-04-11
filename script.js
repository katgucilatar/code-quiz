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
  var currentTime = document.querySelector("#currentTime");
  var timer = document.querySelector("#startTime");
  var questionsDiv = document.querySelector("#questionsDiv");
  var wrapper = document.querySelector("#wrapper");
  
  //Creating the Timer
  var secondsLeft = 60;
  var holdInterval = 0;
  var penalty = 10;
  var ulCreate = document.createElement("ul");
  
  timer.addEventListener("click", function () {
    if (holdInterval === 0) {
      holdInterval = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time Left: " + secondsLeft;
  
        if (secondsLeft <= 0) {
          clearInterval(holdInterval);
          allDone();
          currentTime.textContent = "Time's up!";
        }
      }, 1000);
    }
    render(questionList);
  });
  
  //create a function so that the list of questions runs on start
  function render(questionList) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
      var userQuestion = questions[questionList].title;
      var userChoices = questions[questionList].choices;
      questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionsDiv.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", compare);
    });
  }
  //create a function that will compare user answer to the correct answer
  function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      if (element.textContent == questions[questionList].answer) {
        score++;
        createDiv.textContent = "Correct!";
      } else {
        secondsLeft = secondsLeft - penalty;
        createDiv.textContent = "Wrong!";
      }
    }
  
    questionList++;
  
    if (questionList >= questions.length) {
      allDone();
      createDiv.textContent =
        "End of quiz!" +
        " " +
        "You got  " +
        score +
        "/" +
        questions.length +
        " Correct!";
    } else {
      render(questionList);
    }
    questionsDiv.appendChild(createDiv);
  }
  
  //This is the end of the quiz
  function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";
  
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!";
  
    questionsDiv.appendChild(createH1);
  
    // Stops timer and uses the number as a score
    if (secondsLeft >= 0) {
      var timeRemaining = secondsLeft;
      var createP = document.createElement("p");
      clearInterval(holdInterval);
      createP.textContent = "Your final score is: " + timeRemaining;
  
      questionsDiv.appendChild(createP);
    }
  
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
  
    questionsDiv.appendChild(createLabel);
  
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
  
    questionsDiv.appendChild(createInput);
  
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
  
    questionsDiv.appendChild(createSubmit);
  
    // Local Storage
    createSubmit.addEventListener("click", function () {
      var initials = createInput.value;
  
      if (initials === null) {
        alert("No value entered!");
      } else {
        var finalScore = {
          initials: initials,
          score: timeRemaining,
        };
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
          allScores = [];
        } else {
          allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.replace("highScores.html");
      }
    });
  }