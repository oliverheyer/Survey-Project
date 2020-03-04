const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');


// const scoreText = document.getElementById('score');

// var img = document.createElement("img");
 
// img.src = "images/img1.png";
// var src = document.getElementById("x");
 
// src.appendChild(img); 

let currentQuestion = {};
let acceptingAnswers = false;

let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Image question 1 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 1
    },

    {
        question: "Image question 2 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 2

    },
    {
        question: "Image question 3 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 3

    },
    {
        question: "Image question 4 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 4

    },
    {
        question: "Image question 5 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 5

    },
    {
        question: "Image question 6 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 6

    },
    {
        question: "Image question 7 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 7

    },
    {
        question: "Image question 8 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 8

    },
    {
        question: "Image question 9 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 9

    },
    {
        question: "Image question 10 ",
        choice1: "happy emoji face",
        choice2: "sad emoji face",
        choice3: "confused emoji face",
        choice4: "angry emoji face",
        answer: 10

    }
];


const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        //Take user to the end of survey
        return window.location.assign("/end.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    
   availableQuestions.splice(questionIndex, 1);


    acceptingAnswers = true;

};
    
choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswers) return;
            
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["nunber"];
            
            getNewQuestion();
        });
    });

    



startGame();