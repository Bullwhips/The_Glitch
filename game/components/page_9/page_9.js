function renderPage9(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop9 = document.createElement("div")
    backDrop9.id = "backDrop9"
    opacityBackground.append(backDrop9)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop9.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "ANALOGT UPPDRAG - AVKODA FÖR ATT FORTSÄTTA"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Detta uppdrag är analogt, men för att komma vidare måste ni skriva in det ni har avkodat.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "BOKSTÄVER"
    textContainer.append(inputField)

    function radiaPerlman(value) {
        return ["RADIA PERLMAN", "Radia Perlman", "Radia perlman", "radia Perlman", "radia perlman"]
            .includes(value.trim());
    }

    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "ENTER"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (radiaPerlman(userInput)) {
            renderPage10(wrapper);
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);

    function renderRouterPopup (wrapper) {
        let renderRouterPopupContainer = document.createElement("div");
        renderRouterPopupContainer.id = "popup-container";
        kairasMessagePopupContainer.classList.remove("hidden");
        kairasMessagePopupContainer.classList.add("visible");
        wrapper.appendChild(kairasMessagePopupContainer);
    
        let headTextRules = document.createElement("h2");
        headTextRules.id = "head-text-popup";
        headTextRules.textContent = "⚠ MEDDELANDE: ${players.name}";
        kairasMessagePopupContainer.appendChild(headTextRules);
    
        let popupTextContainer = document.createElement("div");
        popupTextContainer.id = "popup-text-container";
        kairasMessagePopupContainer.appendChild(popupTextContainer);
    
        let kairasMessageText = document.createElement("p");
        kairasMessageText.id = "kairas-message-1";
        kairasMessageText.innerHTML = `
            Hallå!!
            Hör ni mig???<br><br>
            Fan jag har fastnat i glitchen. 
            Detta är det enda sättet jag kan kommunicera med er. 
            Jag vet inte riktigt var jag är, men jag behöver er hjälp!! 
            Klockan ni ser är tiden innan glitchen är fullbordad och de 
            anonyma får full kontroll. Jag önskar att jag kunde skriva ut allt, 
            men jag är rädd att de ska se oss. 
            Jag har gömt ledtrådar som för er närmare koden. 
            Ni måste följa mina steg för att fixa det men ni får INTE bli upptäckta!! 
            De vet inte att jag kan nå er och får de reda på det… då är det kört.<br><br>
            Jag måste sticka nu, skynda er, tiden är knapp!<br>
            GLÖM INTE ATT SVAREN KAN FINNAS I DETALJERNA.
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
            kairasMessagePopupContainer.classList.remove("visible");
            kairasMessagePopupContainer.classList.add("hidden");
            kairasMessagePopupContainer.remove();
        });
        closePopupButtonContainer.append(closePopupButton);
}}