
const startBtn= document.querySelector(".start-btn");
const popupInfo= document.querySelector(".popup-info");
const exitBtn= document.querySelector(".exit-btn");
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

startBtn.onclick= () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active'); // Remove the 'active' class here
}
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
}
/*let questionCount = 0;
const nextBtn = document.querySelector('.next-btn');
nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
}*/
let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn');
const totalQuestions = questions.length; // Assuming you have a questions array

nextBtn.onclick = () => {
    if (questionCount < totalQuestions - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
    } else {
        // Handle the case when you've reached the end of the questions
        // You can display a message or take some other action
        console.log('question completed .');
    }
}

const optionList = document.querySelector('.option-list');
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
} 
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer; // Use square brackets for array access

    if (userAnswer == correctAnswer) {
        console.log('correct ans');
        answer.classList.add('correct');
    } else {
        console.log('incorrect ans');
        answer.classList.add('incorrect');
    }
}

/*function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;

}*/
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}
