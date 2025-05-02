function renderGameRulesPopup (wrapper) {
    let gameRulesPopupContainer = document.createElement("div");
    gameRulesPopupContainer.id = "popup-container";
    gameRulesPopupContainer.classList.remove("hidden");
    gameRulesPopupContainer.classList.add("visible");
    wrapper.appendChild(gameRulesPopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "SPELREGLER";
    gameRulesPopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    gameRulesPopupContainer.appendChild(popupTextContainer);

    let notesHeadline = document.createElement("h3");
    notesHeadline.id = "popup-text-headlines";
    notesHeadline.textContent = "📝 ANTECKNA - LÖS GÅTOR & SAMLA INFO";
    popupTextContainer.appendChild(notesHeadline);
    let notes = document.createElement("p");
    notes.id = "popup-text";
    notes.textContent = `
        Detta spel kräver att ni har tillgång till papper och penna. 
        För att kunna lösa vissa gåtor eller samla på information 
        så behöver ni skriva ner detta för att lägga pusselbitarna i slutet.
    `;
    popupTextContainer.appendChild(notes);

    let timerHeadline = document.createElement("h3");
    timerHeadline.id = "popup-text-headlines";
    timerHeadline.textContent = "⏳ TIMER - BLI KLARA I TID";
    popupTextContainer.appendChild(timerHeadline);
    let timer = document.createElement("p");
    timer.id = "popup-text";
    timer.textContent = `
        Högst upp till höger ser ni en timer som tickar nedåt under spelets gång. 
        När tiden har gått ut så avslutas spelet oavsett om ni har löst sista uppdraget 
        eller inte. Var på er vakt, anteckna detaljer och samla så mycket information 
        som ni kan för att lyckas klara spelet innan tiden går ut.
    `;
    popupTextContainer.appendChild(timer);

    let thingsHeadline = document.createElement("h3");
    thingsHeadline.id = "popup-text-headlines";
    thingsHeadline.textContent = "🛑 FYSISKA PRYLAR - SPARA ALLT!";
    popupTextContainer.appendChild(thingsHeadline);
    let things = document.createElement("p");
    things.id = "popup-text";
    things.textContent = `
        Om ni hittar fysiska föremål, titta på det, läs det eller ta en bild på det. 
        Spara sedan undan ert exemplar av denna sak. 
        Håll koll på hur antalet ni ska få med er. 
        Alla fysiska prylar finns i flera upplagor 
        för att alla spelare ska kunna samla på samma saker, 
        dubbelkolla därför så att ni inte plockar upp flera delar av 
        samma sak.
    `;
    popupTextContainer.appendChild(things);

    let charachtersHeadline = document.createElement("h3");
    charachtersHeadline.id = "popup-text-headlines";
    charachtersHeadline.textContent = "👤 OLIKA KARAKTÄRER";
    popupTextContainer.appendChild(charachtersHeadline);
    let charachters = document.createElement("p");
    charachters.id = "popup-text";
    charachters.textContent = `
        Genom spelet kan ni möta flera karaktärer. 
        Var uppmärksam på signalement som kan känneteckna  de olika karaktärerna.
    `;
    popupTextContainer.appendChild(charachters);

    let closePopupButtonContainerRules = document.createElement("div");
    closePopupButtonContainerRules.id = "close-popup-button-container-rules";
    gameRulesPopupContainer.append(closePopupButtonContainerRules);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        gameRulesPopupContainer.classList.remove("visible");
        gameRulesPopupContainer.classList.add("hidden");
        gameRulesPopupContainer.remove();
    });

    closePopupButtonContainerRules.append(closePopupButton);
}