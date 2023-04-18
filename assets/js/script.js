


// TIMER STARTS



// game ends when timer reaches 0


// can save initials and score
// complete link to "view high scores"
// get rid of buttons in enter initials function
// how to stop the timer?

var startButton = document.querySelector("#start");
var questionText = document.querySelector(".card-header");
var question1 = document.querySelector(".btn");
var timeLeft = 10;
var timerEl = document.querySelector("#timerbox")

startButton.addEventListener("click", function() {
    function updateTimer(){
        while (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = "Time left: " + timeLeft;
            if (timeLeft === 0) {
                enterInitials();
              }
        }    
    }
    var timerInterval = setInterval(updateTimer, 1000);

    questionText.textContent = "Commonly used data types DO NOT include:"
   
    var button1 = document.createElement('button1');
    button1.setAttribute('class', 'btn');
    button1.textContent = "1. strings"
    document.body.appendChild(button1);

    var button2 = document.createElement('button2');
    button2.setAttribute('class', 'btn');
    button2.textContent = "2. booleans"
    document.body.appendChild(button2);

    var button3 = document.createElement('button3');
    button3.setAttribute('class', 'btn');
    button3.textContent = "3. alerts"
    document.body.appendChild(button3);

    var button4 = document.createElement('button4');
    button4.setAttribute('class', 'btn');
    button4.textContent = "4. numbers"
    document.body.appendChild(button4);

    var result = document.createElement('result');
    result.setAttribute('style', 'font-size: 40px;');
    document.body.appendChild(result);

    button1.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question2();
        timeLeft -= 5;
    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question2();
        timeLeft -= 5;
    })
    button3.addEventListener("click", function() {
        result.textContent = 'Correct!';
        question2();
    })
    button4.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question2();
        timeLeft -= 5;

    })



function question2() {
    questionText.textContent = "The condition in an if/else statement is enclosed with ________."
    button1.textContent = "1. quotes";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. parentheses";
    button4.textContent = "4. square backets";

    button1.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question3();
        timeLeft -= 5;

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question3();
        timeLeft -= 5;

    })
    button3.addEventListener("click", function() {
        result.textContent = 'Correct!';
        question3();
    })
    button4.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question3();
        timeLeft -= 5;
    })
}

function question3() {
    questionText.textContent = "Arrays in JavaScript can be used to store _________."
    button1.textContent = "1. numbers and strings";
    button2.textContent = "2. other arrays";
    button3.textContent = "3. booleans";
    button4.textContent = "4. all of the above";

    button1.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question4();
        timeLeft -= 5;

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question4();
        timeLeft -= 5;

    })
    button3.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question4();
        timeLeft -= 5;

    })
    button4.addEventListener("click", function() {
        result.textContent = 'Correct!';
        question4();
    })
}

function question4() {
    questionText.textContent = "String values must be enclosed within ______ when being assigned to variables."
    button1.textContent = "1. commas";
    button2.textContent = "2. curly brackets";
    button3.textContent = "3. quotes";
    button4.textContent = "4. parentheses";

    button1.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        enterInitials();
        timeLeft -= 5;
        stopTimer = true;

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        enterInitials();
        timeLeft -= 5;
        stopTimer = true;


    })
    button3.addEventListener("click", function() {
        result.textContent = 'Correct!';
        enterInitials();
        stopTimer = true;

    })
    button4.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        enterInitials();
        timeLeft -= 5;
        stopTimer = true;

    })
}

function enterInitials() {
    questionText.textContent = "All done!"
    var score = document.createElement('finalScore');
    score.setAttribute('style', 'fontsize: 20px');
    score.textContent = "Your final score is " + timeLeft;
    document.body.appendChild(score);
    
   var initialPrompt = prompt;

    var initials = document.createElement('initials');
    initials.setAttribute('style', 'fontsize: 20px');
    initials.textContent = "Enter initials:";
    document.body.appendChild(initials);

    var initialsInput = document.createElement('initialsInput');
    initials.type = "text";
    document.body.appendChild(initialsInput);


}
})


    /* submit button
    question.textContent = "All done!"
    var score = document.createElement('finalScore');
    score.setAttribute('style', 'fontsize: 20px');
    score.textContent = "Your final score is " + timeLeft;
    document.body.appendChild(score);

    var button4 = document.createElement('button4');
    button4.setAttribute('class', 'btn');
    button4.textContent = "4. numbers"
    document.body.appendChild(button4);
    // Your final score is [INSERT FROM TIMER]
    // Enter initials: [form box]
    // submit button
}

}) */


   



//    

    //switch to first question:
// update question text
// add boxes with answers

// start timer


