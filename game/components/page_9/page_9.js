function renderPage9(wrapper) {
    let hasShownWrongAnswer = false;
    localStorage.setItem("currentPage", "renderPage9");
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackgroundPage9";

    let backDrop9 = document.createElement("div")
    backDrop9.id = "backDrop9"
    opacityBackground.append(backDrop9)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop9.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "QUIZ"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `För att svara rätt på detta quiz får ni gärna googla er fram detta är ett läroquiz.`
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
    backDrop9.append(answerContainer)

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
    submitButton.id = "submitButton";
    submitButton.style.display = "none"; // hidden by default
    backDrop9.append(submitButton);

    submitButton.addEventListener("click", () => {
    const currentAnswers = questions[quizNumber].answers;

    let allCorrect = true;
    for (let i = 0; i < currentAnswers.length; i++) {
        const isSelected = selectedIndexes.has(i);
        const isCorrect = currentAnswers[i].correct;

        if ((isCorrect && !isSelected) || (!isCorrect && isSelected)) {
            allCorrect = false;
            Array.from(answerContainer.children).forEach(child => inputShake(child));
            const timerDisplay = document.querySelector("#timerDisplay");
            if (timerDisplay) {
            removeTimeAndAnimate(120, timerDisplay);
}
        }

        if (!hasShownWrongAnswer) {
            hasShownWrongAnswer = true;
            renderGraceHopperPopup(wrapper);
        }
    }

    if (allCorrect) {
        displaynumber++;
        quizNumber++;
        if (quizNumber >= questions.length) {
            let audio = new Audio("../../assets/audio/414_sound.mp3");
                audio.play().catch(e => {
                console.warn("Autoplay blockerat av webbläsaren:", e);
            });
            render414Popup(wrapper);
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
                        let audio = new Audio("../../assets/audio/414_sound.mp3");
                            audio.play().catch(e => {
                            console.warn("Autoplay blockerat av webbläsaren:", e);
                        });
                        render414Popup(wrapper);
                    } else {
                        quiz();
                    }
                } else {
                    inputShake(div);
                    const timerDisplay = document.querySelector("#timerDisplay");
                    if (timerDisplay) {
                      removeTimeAndAnimate(120, timerDisplay);
                    }

                    if (!hasShownWrongAnswer) {
                        hasShownWrongAnswer = true;
                        let audio = new Audio("../../assets/audio/popup_sound.mp3");
                        audio.play().catch(e => {
                            console.warn("Autoplay blockerat av webbläsaren:", e);
                        });
                        renderWrongAnswerPopup(wrapper);
                    }
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
            quizHeader.textContent = "Fråga " + displaynumber + "/7"
        
            quizText.textContent = questions[quizNumber].question
        
            answerDiv1.textContent = questions[quizNumber].answers[0].answer
            answerDiv2.textContent = questions[quizNumber].answers[1].answer
            answerDiv3.textContent = questions[quizNumber].answers[2].answer
            answerDiv4.textContent = questions[quizNumber].answers[3].answer

    }
 quiz()

    pageContainer.append(opacityBackground);

    function renderWrongAnswerPopup(wrapper) {
        let wrongAnswerPopupContainer = document.createElement("div");
        wrongAnswerPopupContainer.id = "popup-container-short";
        wrongAnswerPopupContainer.classList.remove("hidden");
        wrongAnswerPopupContainer.classList.add("visible");
        pageContainer.classList.add("blur");
        wrapper.appendChild(wrongAnswerPopupContainer);
    
        let headTextRules = document.createElement("h2");
        headTextRules.id = "head-text-popup";
        headTextRules.textContent = "⚠ MEDDELANDE: #takeAwayTime";
        wrongAnswerPopupContainer.appendChild(headTextRules);
    
        let popupTextContainer = document.createElement("div");
        popupTextContainer.id = "popup-text-container";
        wrongAnswerPopupContainer.appendChild(popupTextContainer);
    
        let kairasMessageText = document.createElement("p");
        kairasMessageText.id = "popup-text-grace-hopper";
        kairasMessageText.innerHTML = `
           Håll koll på tiden, ser ni inte att det har dragits av tid varje gång ni har tryckt i fel svar? 
           Använd internet för att ta reda på svaren så ni inte väljer fel!
        `;
        popupTextContainer.appendChild(kairasMessageText);
    
        let closePopupButtonContainer = document.createElement("div");
        closePopupButtonContainer.id = "close-popup-button-container";
        wrongAnswerPopupContainer.append(closePopupButtonContainer);
        let closePopupButton = document.createElement("button");
        closePopupButton.id = "close-popup-button";
        closePopupButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
            <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
        </svg>
        `;
    
        closePopupButton.addEventListener("click", () => {
            wrongAnswerPopupContainer.remove();
            wrongAnswerPopupContainer.classList.remove("visable");
            wrongAnswerPopupContainer.classList.add("hidden");
            pageContainer.classList.remove("blur");
        });
        closePopupButtonContainer.append(closePopupButton);
    }

}

