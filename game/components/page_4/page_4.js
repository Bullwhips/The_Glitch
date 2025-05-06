function renderPage4 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop4 = document.createElement("div");
    backDrop4.id = "backDrop4";
    opacityBackground.append(backDrop4);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop4.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "ANALOGT UPPDRAG - AVKODA FÖR ATT FORTSÄTTA";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Skriv in koden för att komma vidare.`;
    textContainer.append(bodyText);

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "inputField4";
    inputField.placeholder = "SIFFROR";
    textContainer.append(inputField);

    function adaLovelace (value) {
        let number = parseInt(value);
        return !isNaN(number) && number === 1842;
    }

    let nextStepButton = document.createElement("button");
    nextStepButton.id = "nextStepButton4";
    nextStepButton.textContent = "NÄSTA STEG";
    nextStepButton.addEventListener("click", () => {

        let audio = new Audio("../../assets/audio/error_sound.mp3");
        audio.play().catch(e => {
            console.warn("Autoplay blockerat av webbläsaren:", e);
        });
        
        let userInput = inputField.value;
        if (adaLovelace(userInput)) {
            const displayElement = document.querySelector("#timerDisplay");
            renderPage5RemoveTime(wrapper, displayElement); // Skickar in display-elementet
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton);

    renderKairasMessagePopup2(pageContainer);

    let cluePopupTimeout = setTimeout(() => {
        showClueQuestionPopup(pageContainer);
    }, 1 * 60 * 1000);

    function showClueQuestionPopup(parent) {
        let popup = renderKairasMessagePopup3(parent);

        popup.querySelector("#yes-button-clue").addEventListener("click", () => {
            clearTimeout(clueRevealTimeout);
            popup.remove();
            renderKairasClueMessage(pageContainer);
        });

        popup.querySelector("#no-button-clue").addEventListener("click", () => {
            popup.remove();

            // Visa ledtråd efter ytterligare 10 minuter om användaren sa NEJ
            clueRevealTimeout = setTimeout(() => {
                renderKairasClueMessage(pageContainer);
            }, 3 * 60 * 1000);
        });

        // Om popupen stängs utan svar, visa ledtråd ändå efter 10 min
        popup.querySelector("#close-popup-button").addEventListener("click", () => {
            clueRevealTimeout = setTimeout(() => {
                renderKairasClueMessage(pageContainer);
            }, 3 * 60 * 1000);
        });
    }

    let clueRevealTimeout = null;
}

function renderKairasMessagePopup2 (wrapper) {
    let kairasMessagePopupContainer = document.createElement("div");
    kairasMessagePopupContainer.id = "popup-container-short";
    kairasMessagePopupContainer.classList.remove("hidden");
    kairasMessagePopupContainer.classList.add("visible");
    wrapper.appendChild(kairasMessagePopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "⚠ MEDDELANDE:.2fKaira";
    kairasMessagePopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    kairasMessagePopupContainer.appendChild(popupTextContainer);

    let kairasMessageText = document.createElement("p");
    kairasMessageText.id = "kairas-message-2";
    kairasMessageText.innerHTML = `
        Okej, grymt! Det verkar som ni förstår mina uppdrag! 
        Skynda er till nästa nu. Det enda jag kan ge er är NI:A0515, vi hörs mer sen!
    `;
    popupTextContainer.appendChild(kairasMessageText);

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    kairasMessagePopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        kairasMessagePopupContainer.remove();
    });
    closePopupButtonContainer.append(closePopupButton);
}


function renderKairasMessagePopup3 (wrapper, pageContainer) {
    let kairasMessagePopupContainer = document.createElement("div");
    kairasMessagePopupContainer.id = "popup-container-short";
    kairasMessagePopupContainer.classList.remove("hidden");
    kairasMessagePopupContainer.classList.add("visible");
    wrapper.appendChild(kairasMessagePopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "⚠ MEDDELANDE: <ledtråd>";
    kairasMessagePopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    kairasMessagePopupContainer.appendChild(popupTextContainer);

    let kairasMessageText = document.createElement("p");
    kairasMessageText.id = "kairas-message-3";
    kairasMessageText.innerHTML = `
        Det har gått 15 min sedan ni startade detta uppdrag. Vill ni få en ledtråd av Kaira?
    `;
    popupTextContainer.appendChild(kairasMessageText);

    let buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container";
    kairasMessagePopupContainer.appendChild(buttonContainer);

    let yesButton = document.createElement("button");
    yesButton.id = "yes-button-clue";
    yesButton.textContent = "JA";
    buttonContainer.appendChild(yesButton);

    yesButton.addEventListener("click", () => {
        kairasMessagePopupContainer.remove();
        if (pageContainer) {
            renderKairasClueMessage(pageContainer);
        }
    });

    let noButton = document.createElement("button");
    noButton.id = "no-button-clue";
    noButton.textContent = "NEJ";
    buttonContainer.appendChild(noButton);

    noButton.addEventListener("click", () => {
        kairasMessagePopupContainer.remove();
    });

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    kairasMessagePopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        kairasMessagePopupContainer.remove();
    });
    closePopupButtonContainer.append(closePopupButton);

    return kairasMessagePopupContainer;
}

function renderKairasClueMessage (wrapper) {
    console.log("funktion kallad");
    console.log(wrapper);
    let kairasMessagePopupContainer = document.createElement("div");
    kairasMessagePopupContainer.id = "popup-container-short";
    kairasMessagePopupContainer.classList.remove("hidden");
    kairasMessagePopupContainer.classList.add("visible");
    wrapper.appendChild(kairasMessagePopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "⚠ MEDDELANDE: <ledtråd>";
    kairasMessagePopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    kairasMessagePopupContainer.appendChild(popupTextContainer);

    let kairasMessageText = document.createElement("p");
    kairasMessageText.id = "kairas-message-4";
    kairasMessageText.innerHTML = `
        Ni skulle ju vara snabba!! Här är en ledtråd; Behind every great man, there is an even greater woman.<br><br>
        / kAiRa
    `;
    popupTextContainer.appendChild(kairasMessageText);

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    kairasMessagePopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        kairasMessagePopupContainer.remove();
    });
    closePopupButtonContainer.append(closePopupButton);
}

function clueMessage (wrapper) {
    let kairasMessagePopupContainer = document.createElement("div");
    kairasMessagePopupContainer.id = "popup-container-short";
    kairasMessagePopupContainer.classList.remove("hidden");
    kairasMessagePopupContainer.classList.add("visible");
    wrapper.appendChild(kairasMessagePopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "⚠ MEDDELANDE: <ledtråd>";
    kairasMessagePopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    kairasMessagePopupContainer.appendChild(popupTextContainer);

    let kairasMessageText = document.createElement("p");
    kairasMessageText.id = "kairas-message-4";
    kairasMessageText.innerHTML = `
        Det har gått 25 min sedan ni startade detta uppdrag. Här kommer nu en ledtråd:<br><br>
        Ni skulle ju vara snabba!! Här är en ledtråd; Behind every great man, there is an even greater woman. / kAiRa
    `;
    popupTextContainer.appendChild(kairasMessageText);

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    kairasMessagePopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        kairasMessagePopupContainer.remove();
    });
    closePopupButtonContainer.append(closePopupButton);
}