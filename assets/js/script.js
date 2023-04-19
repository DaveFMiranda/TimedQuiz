// Setting variables to be used throughout the quiz.
var startButton = document.querySelector("#start");
var questionText = document.querySelector(".card-header");
var question1 = document.querySelector(".btn");
var timeLeft = 75;
var timerEl = document.querySelector("#timerbox");

// This function starts the quiz and the timer.
startButton.addEventListener("click", function () {
  function updateTimer() {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      enterInitials();
    }
  }

  var timerInterval = setInterval(updateTimer, 1000);

  // First question and first set of answers.
  questionText.textContent = "Commonly used data types DO NOT include:";

  var button1 = document.createElement("button1");
  button1.setAttribute("class", "btn");
  button1.textContent = "1. strings";
  document.body.appendChild(button1);

  var button2 = document.createElement("button2");
  button2.setAttribute("class", "btn");
  button2.textContent = "2. booleans";
  document.body.appendChild(button2);

  var button3 = document.createElement("button3");
  button3.setAttribute("class", "btn");
  button3.textContent = "3. alerts";
  document.body.appendChild(button3);

  var button4 = document.createElement("button4");
  button4.setAttribute("class", "btn");
  button4.textContent = "4. numbers";
  document.body.appendChild(button4);

  var result = document.createElement("result");
  result.setAttribute("style", "font-size: 40px;");
  document.body.appendChild(result);

  button1.addEventListener("click", function () {
    result.textContent = "Wrong!";
    question2();
    timeLeft -= 5;
  });
  button2.addEventListener("click", function () {
    result.textContent = "Wrong!";
    question2();
    timeLeft -= 5;
  });
  button3.addEventListener("click", function () {
    result.textContent = "Correct!";
    question2();
  });
  button4.addEventListener("click", function () {
    result.textContent = "Wrong!";
    question2();
    timeLeft -= 5;
  });

  // Second question and second set of answers.
  function question2() {
    questionText.textContent =
      "The condition in an if/else statement is enclosed with ________.";
    button1.textContent = "1. quotes";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. parentheses";
    button4.textContent = "4. square brackets";

    button1.addEventListener("click", function () {
      result.textContent = "Wrong!";
      question3();
      timeLeft -= 5;
    });
    button2.addEventListener("click", function () {
      result.textContent = "Wrong!";
      question3();
      timeLeft -= 5;
    });
    button3.addEventListener("click", function () {
      result.textContent = "Correct!";
      question3();
    });
    button4.addEventListener("click", function () {
      result.textContent = "Wrong!";
      question3();
      timeLeft -= 5;
    });
  }

  // Third question and third set of answers.
  function question3() {
    questionText.textContent =
      "Arrays in JavaScript can be used to store _________.";
    button1.textContent = "1. numbers and strings";
    button2.textContent = "2. other arrays";
    button3.textContent = "3. booleans";
    button4.textContent = "4. all of the above";

    button1.addEventListener("click", function () {
      result.textContent = "Wrong!";
      question4();
      timeLeft -= 5;
    });
    button2.addEventListener("click", function () {
      result.textContent = "Wrong!";
      question4();
      timeLeft -= 5;
    });
    button3.addEventListener("click", function () {
      result.textContent = "Wrong!";
      question4();
      timeLeft -= 5;
    });
    button4.addEventListener("click", function () {
      result.textContent = "Correct!";
      question4();
    });
  }

    // Fourth question and fourth set of answers.
  function question4() {
    questionText.textContent =
      "String values must be enclosed within ______ when being assigned to variables.";
    button1.textContent = "1. commas";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. quotes";
    button4.textContent = "4. parentheses";

    button1.addEventListener("click", function () {
      result.textContent = "Wrong!";
      enterInitials();
      timeLeft -= 5;
    });
    button2.addEventListener("click", function () {
      result.textContent = "Wrong!";
      enterInitials();
      timeLeft -= 5;
    });
    button3.addEventListener("click", function () {
      result.textContent = "Correct!";
      enterInitials();
    });
    button4.addEventListener("click", function () {
      result.textContent = "Wrong!";
      enterInitials();
      timeLeft -= 5;
    });
  }

// The screen after the quiz where score is displayed and initials entered.
  function enterInitials() {
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    result.textContent = "";

    questionText.textContent = "All done!";
    var score = document.createElement("finalScore");
    score.setAttribute("style", "fontsize: 20px");
    score.setAttribute("style", "display: block");
    score.setAttribute("style", "margin-top: 100px");
    score.textContent = "Your final score is " + timeLeft;
    document.body.appendChild(score);

    var initials = document.createElement("initials");
    initials.setAttribute("style", "fontsize: 20px");
    initials.setAttribute("style", "display: block");
    initials.textContent = "Enter initials: ";
    document.body.appendChild(initials);

    var initialsInput = document.createElement("input");
    initialsInput.type = "text";
    initialsInput.setAttribute("style", "width: 20%");
    initialsInput.setAttribute("style", "height: 15%");
    document.body.appendChild(initialsInput);

    initialsData = " ";

    initialsInput.addEventListener("input", function(event) {
        initialsData = event.target.value;
    })

    var submitButton = document.createElement("btn");
    submitButton.setAttribute("class", "btn");
    submitButton.textContent = "Submit";
    document.body.appendChild(submitButton);

    // Moves to the last screen and displays the score and initials.
    submitButton.addEventListener("click", function () {
        questionText.textContent = "High score";
        score.textContent = "1. " + initialsData + " - " + timeLeft;
        initials.style.display = 'none';
        submitButton.style.display = "none";
        initialsInput.style.display = 'none';
    })
  }
});