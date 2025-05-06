function renderPage11(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop11 = document.createElement("div")
    backDrop11.id = "backDrop11"
    opacityBackground.append(backDrop11)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop11.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "RÄTT SIFFERKOMBINATION"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Om ni har kommit till detta steg så ska ni dela på er. 
                        När ni har hittat hieroglyferna i caféet och scannat QR-koden på kaffemaskinen ska ni ha hittat den gömda meningen. 
                        Samla sedan gruppen för att tillsammans skriva in det ord ni har avkodat.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "BOKSTÄVER"
    textContainer.append(inputField)

    function motherOfInternet(value) {
        return ["MOTHER OF INTERNET", "MOTHER Of INTERNET", "MOTHER of INTERNET", "Mother Of Internet", "Mother of internet", "mother of internet"]
            .includes(value.trim());
    }


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "ENTER"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (motherOfInternet(userInput)) {
            renderBeginingPopup(wrapper);
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);

    function renderBeginingPopup (wrapper) {
        let renderBeginingPopupContainer = document.createElement("div");
        renderBeginingPopupContainer.id = "popup-container";
        renderBeginingPopupContainer.classList.remove("hidden");
        renderBeginingPopupContainer.classList.add("visible");
        pageContainer.classList.add("blur")
        wrapper.appendChild(renderBeginingPopupContainer);
    
        let headTextRules = document.createElement("h2");
        headTextRules.id = "head-text-popup";
        headTextRules.textContent = "⚠ MEDDELANDE: ${beginning}";
        renderBeginingPopupContainer.appendChild(headTextRules);
    
        let popupTextContainer = document.createElement("div");
        popupTextContainer.id = "popup-text-container";
        renderBeginingPopupContainer.appendChild(popupTextContainer);
    
        let kairasMessageText = document.createElement("p");
        kairasMessageText.id = "popup-text";
        kairasMessageText.innerHTML = `
           Bra jobbat! Ni lyckades hitta rätt kombination. Denna kombination är viktig så kom ihåg den. Nu ska ni gå tillbaka till där allt började...
        `;
        popupTextContainer.appendChild(kairasMessageText);
    
        let closePopupButtonContainer = document.createElement("div");
        closePopupButtonContainer.id = "close-popup-button-container";
        renderBeginingPopupContainer.append(closePopupButtonContainer);
        let closePopupButton = document.createElement("button");
        closePopupButton.id = "close-popup-button";
        closePopupButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
        </svg>
        `;
    
        closePopupButton.addEventListener("click", () => {
            renderBeginingPopupContainer.classList.remove("visible");
            renderBeginingPopupContainer.classList.add("hidden");
            renderBeginingPopupContainer.remove("blur")
            renderBeginingPopupContainer.remove();
            renderRadiaPerlmanPopup(wrapper)
        });
        closePopupButtonContainer.append(closePopupButton);
}

function renderRadiaPerlmanPopup (wrapper) {
    let renderRadiaPerlmanPopupContainer = document.createElement("div");
    renderRadiaPerlmanPopupContainer.id = "popup-container";
    renderRadiaPerlmanPopupContainer.classList.remove("hidden");
    renderRadiaPerlmanPopupContainer.classList.add("visible");
    pageContainer.classList.add("blur")
    wrapper.appendChild(renderRadiaPerlmanPopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "RADIA PERLMAN - MOTHER OF INTERNET";
    renderRadiaPerlmanPopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    renderRadiaPerlmanPopupContainer.appendChild(popupTextContainer);

    let kairasMessageText = document.createElement("p");
    kairasMessageText.id = "popup-text";
    kairasMessageText.innerHTML = `
       På första våningen syns hon bland andra, 
       med rött som fångar blicken och bokstäver som för tankarna hemåt.
        Där något hänger som tidigare synts – kanske finns där mer än bara tyg?
    `;
    popupTextContainer.appendChild(kairasMessageText);

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    renderRadiaPerlmanPopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        renderRadiaPerlmanPopupContainer.classList.remove("visible");
        renderRadiaPerlmanPopupContainer.classList.add("hidden");
        renderRadiaPerlmanPopupContainer.remove("blur")
        renderRadiaPerlmanPopupContainer.remove();
        renderPage12(wrapper)
    });
    closePopupButtonContainer.append(closePopupButton);
}}



