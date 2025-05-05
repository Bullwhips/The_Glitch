function renderPage8(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop8 = document.createElement("div")
    backDrop8.id = "backDrop8"
    opacityBackground.append(backDrop8)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop8.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "QUIZ"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `För att svara rätt på dessa quizfrågor får ni gärna googla fram svaren, detta är ett läroquiz. 
                         Kom ihåg att frågorna och svaren kan vara viktiga framöver.`
    textContainer.append(bodyText);

    let quizContainer = document.createElement("div")
    quizContainer.id = "quizContainer"
    textContainer.append(quizContainer)

    let quizHeader = document.createElement("p")
    quizHeader.id = "quizHeader"
    quizContainer.append(quizHeader)

    let quizText = document.createElement("p")
    quizText.id = "quizText"
    quizContainer.append(quizText)

    let answerContainer = document.createElement("div")
    answerContainer.id = "answerContainer"
    backDrop8.append(answerContainer)

    let answerDiv1 = document.createElement("div")
    answerDiv1.id = "answerDiv1"
    answerDiv1.classList.add("answerDiv")
    answerContainer.append(answerDiv1)

    let answerDiv2 = document.createElement("div")
    answerDiv2.id = "answerDiv2"
    answerDiv2.classList.add("answerDiv")
    answerContainer.append(answerDiv2)

    let answerDiv3 = document.createElement("div")
    answerDiv3.id = "answerDiv3"
    answerDiv3.classList.add("answerDiv")
    answerContainer.append(answerDiv3)

    let answerDiv4 = document.createElement("div")
    answerDiv4.id = "answerDiv4"
    answerDiv4.classList.add("answerDiv")
    answerContainer.append(answerDiv4)

    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.id = "nextStepButton";
    submitButton.style.display = "none"; // hidden by default
    backDrop8.append(submitButton);

    submitButton.addEventListener("click", () => {
    const currentAnswers = questions[quizNumber].answers;

    let allCorrect = true;
    for (let i = 0; i < currentAnswers.length; i++) {
        const isSelected = selectedIndexes.has(i);
        const isCorrect = currentAnswers[i].correct;

        if ((isCorrect && !isSelected) || (!isCorrect && isSelected)) {
            allCorrect = false;
            Array.from(answerContainer.children).forEach(child => inputShake(child));
        }
    }

    if (allCorrect) {
        displaynumber++;
        quizNumber++;
        if (quizNumber >= questions.length) {
            renderPage9(wrapper);
        } else {
            quiz();
        }
    }
});

    let selectedIndexes = new Set();

    let displaynumber = 1

    Array.from(answerContainer.children).forEach((div, index) => {
        div.addEventListener("click", () => {
            if (questions[quizNumber].multipleChoise) {
                // Toggle selection
                if (selectedIndexes.has(index)) {
                    selectedIndexes.delete(index);
                    div.classList.remove("selected");
                } else {
                    selectedIndexes.add(index);
                    div.classList.add("selected");
                }
            } else {
                // Single choice logic
                if (questions[quizNumber].answers[index].correct) {
                    displaynumber++;
                    quizNumber++;
                    if (quizNumber >= questions.length) {
                        renderPage9(wrapper);
                    } else {
                        quiz();
                    }
                } else {
                    inputShake(div);
                }
            }
        });
})        

    let quizNumber = 0
   
    function quiz() {
    

            selectedIndexes.clear();
            Array.from(answerContainer.children).forEach(div => div.classList.remove("selected"));

            const currentQuestion = questions[quizNumber];

    if (currentQuestion.multipleChoise) {
            submitButton.style.display = "block";
    } else {
            submitButton.style.display = "none";
}
            quizHeader.textContent = "Fråga " + displaynumber + "/12"
        
            quizText.textContent = questions[quizNumber].question
        
            answerDiv1.textContent = questions[quizNumber].answers[0].answer
            answerDiv2.textContent = questions[quizNumber].answers[1].answer
            answerDiv3.textContent = questions[quizNumber].answers[2].answer
            answerDiv4.textContent = questions[quizNumber].answers[3].answer

    }
 quiz()

    pageContainer.append(opacityBackground);
}