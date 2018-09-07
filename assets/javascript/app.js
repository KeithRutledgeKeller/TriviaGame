var timer = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var numOfQuestions = 5;
var interval = 0;
// hide questions form so that its just the game name and start button.
// click staret button to bring up questions form.
// once when done answering questions click done button for answer sheet hide question form.
// if time runs out before answering all question hide question form and give answer sheet.
// on answer sheet have correct answers; incorrect answers; unanswered with correct values.



$(document).ready(function () {


    console.log('starting...');
    $("#startButton").click(function () {
        $("#start").css("display", "none");
        $("#questions").css("display", "block");
        startTimer();

    })
    $("#done").click(function () {
        $("#questions").css("display", "none");
        $("#answerSheet").css("display", "block");
        scoreSheet();
        clearInterval(interval);
    })

});

function startTimer() {
    interval = setInterval(countDown, 1000);
}

function countDown() {
    timer--;
    updateTimer();
    console.log(timer);
    if (timer === 0) {
        $("#questions").css("display", "none");
        $("#answerSheet").css("display", "block");
        scoreSheet();
        clearInterval(interval);

    }
}

function scoreSheet() {

    var answers = document.forms[0].elements;
    console.log(answers);
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (answer.defaultValue === "correct" && answer.checked === true) {
            correct++;
        }

        if (answer.defaultValue ==="incorrect" && answer.checked === true) {
            incorrect++;
        }
    }

    unanswered = numOfQuestions - correct - incorrect;

    updateAnswerSheet();
}

function updateAnswerSheet() {
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);
    
}


function updateTimer() {
    $("#timer").text(timer);
}

