/* START BUTTON
1. create button
2. event listener for when you click on the button

// CLICK START BUTTON
1. clicking start button starts timer
2. clicking start button brings up first question


// TIMER STARTS
TBD
1. Need to create the timer in the top-right corner, start it at zero


// QUESTION IS PRESENTED
1. Write question and four answers
    - space for question, boxes for each answer
    - event listener for buttons
        - if wronganswer, display (WRONG!)
        - if wronganswer, subtract time from timer
        - if rightanswer, display (CORRECT!)

        THEN... Move to next screen.


// QUESTION IS ANSWERED, NEW QUESTION



// wrong answer subtracts time from clock


// game ends when all questions are answered


// game ends when timer reaches 0


// can save initials and score

*/

// var timer = //CALL THE TIMER FUNCTION
var startButton = document.querySelector("#start");
var questionText = document.querySelector(".card-header");
var question1 = document.querySelector(".btn");

startButton.addEventListener("click", function() {
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
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question2();
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button3.addEventListener("click", function() {
        result.textContent = 'Correct!';
        question2();
    })
    button4.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question2();
                //INSERT FUNCTION TO SUBTRACT TIME HERE

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
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question3();
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button3.addEventListener("click", function() {
        result.textContent = 'Correct!';
        question3();
    })
    button4.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question3();
                //INSERT FUNCTION TO SUBTRACT TIME HERE
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
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question4();
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button3.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        question4();
    })
    button4.addEventListener("click", function() {
        result.textContent = 'Correct!';
        question4();
                //INSERT FUNCTION TO SUBTRACT TIME HERE
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
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button2.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        enterInitials();
                //INSERT FUNCTION TO SUBTRACT TIME HERE

    })
    button3.addEventListener("click", function() {
        result.textContent = 'Correct!';
        enterInitials();
    })
    button4.addEventListener("click", function() {
        result.textContent = 'Wrong!';
        enterInitials();
                //INSERT FUNCTION TO SUBTRACT TIME HERE
    })
}

function enterInitials() {
    // All done!
    // Your final score is [INSERT FROM TIMER]
    // Enter initials: [form box]
    // submit button
}

})


   



//    

    //switch to first question:
// update question text
// add boxes with answers

// start timer


