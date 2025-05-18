function renderPage12(wrapper) {
    localStorage.setItem("currentPage", "renderPage12");
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground12";
    pageContainer.append(opacityBackground);

    let backDrop12 = document.createElement("div")
    backDrop12.id = "backDrop12"
    opacityBackground.append(backDrop12)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop12.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "RÄTT KOMBINATION"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Förhoppningsvis har ni nu delat upp er och är på vardera rätt plats.
                        Detta uppdrag är analogt, men för att komma vidare måste ni skriva in det ni har avkodat.`
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
            let audio = new Audio("../../assets/audio/popup_sound.mp3");
                audio.play().catch(e => {
                console.warn("Autoplay blockerat av webbläsaren:", e);
            });
            renderRadiaPerlmanPopup(wrapper);
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton);

function renderRadiaPerlmanPopup (wrapper) {
    let renderRadiaPerlmanPopupContainer = document.createElement("div");
    renderRadiaPerlmanPopupContainer.id = "popup-container";
    renderRadiaPerlmanPopupContainer.classList.remove("hidden");
    renderRadiaPerlmanPopupContainer.classList.add("visible");
    pageContainer.classList.add("blur")
    wrapper.appendChild(renderRadiaPerlmanPopupContainer);

    let headTextRules = document.createElement("h2");
    headTextRules.id = "head-text-popup";
    headTextRules.textContent = "⚠ MEDDELANDE: ...";
    renderRadiaPerlmanPopupContainer.appendChild(headTextRules);

    let popupTextContainer = document.createElement("div");
    popupTextContainer.id = "popup-text-container";
    renderRadiaPerlmanPopupContainer.appendChild(popupTextContainer);

    let kairasMessageText = document.createElement("p");
    kairasMessageText.id = "popup-text";
    kairasMessageText.innerHTML = `
                
            Ett tips till de nyfikna. På entréplan syns hon bland andra där info finns. 
            Med ett stort leende ger hon dig svar som leder dig till sida 5 och 6. 
            Hitta Radias ord bland orden och följ vägen dit de för dig!
    `;
    popupTextContainer.appendChild(kairasMessageText);

    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    renderRadiaPerlmanPopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        renderRadiaPerlmanPopupContainer.classList.remove("visible");
        renderRadiaPerlmanPopupContainer.classList.add("hidden");
        renderRadiaPerlmanPopupContainer.remove("blur")
        renderRadiaPerlmanPopupContainer.remove();
        renderPage13(wrapper);
    });
    closePopupButtonContainer.append(closePopupButton);
    }
        POPUPARRAY.splice(0, POPUPARRAY.length)

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: ${players.name}",
        bodyText: `
          Popup 1<br><br>
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
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE:.2fKaira",
        bodyText: `
          Popup 2<br><br>
            Okej, grymt! Det verkar som ni förstår mina uppdrag! 
            Skynda er till nästa nu. Det enda jag kan ge er är NI:A0515, vi hörs mer sen!
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: <ledtråd>",
        bodyText: `
          Popup 3<br><br>
          Ni skulle ju vara snabba… Här är en ledtråd; Behind every great man, there is an even greater woman (bokstavligt talat ;) )
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE:.2fKaira",
        bodyText: `
            Popup 4<br><br>
            Oh shit, fan.. där försvann 30 minuter.. Kan ni snälla vara mer försiktiga och försök att inte väcka uppmärksamhet. 
            Jag ska försöka vara lite mer diskret, nästa ledtråd hittar ni i låten.
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: <clue>",
        bodyText: `
            Popup 5<br><br>
            Har ni läst dagboksidorna?<br><br>
            ALLA DETALJER ÄR VIKTIGA. DEN SOM SER ALLT MISSAR INGET.
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: DAGBOKEN",
        bodyText: `
            Popup 6<br><br>
            Tiden rinner snart ut, hitta sida tre och fyra. 
            Lyft blicken mot B, där du rör dig uppåt eller neråt. 
            Där döljer sig sanningen bakom stängda dörrar. Hitta koden som leder till nya sidor av dagboken.
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: ...",
        bodyText: `
            Popup 7<br><br>
            Jag hatar trappor, har du förstått det nu?<br><br>
             När du hittat rätt så kan du luta ditt huvud lite snett.
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: ${pages}",
        bodyText: `
            Popup 8<br><br>
            Har ni hittat sida 3 och 4?<br><br>
            ALLA DETALJER ÄR VIKTIGA. DEN SOM SER ALLT MISSAR INGET.
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: #takeAwayTime",
        bodyText: `
            Popup 9<br><br>
            Håll koll på tiden, ser ni inte att det har dragits av tid varje gång ni har tryckt i fel svar? 
            Använd internet för att ta reda på svaren så ni inte väljer fel!
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: ROUTER",
        bodyText: `
            Popup 10<br><br>
           Routingens arkitekt vakar fortfarande över sitt verk. En enda maskin bär hennes avbild. Dela upp er – där finner ni nästa nyckel.
        `
      });

        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: IP",
        bodyText: `
            Popup 11<br><br>
            Okej NU håller tiden verkligen på att rinna ut…orkar inte vänta in er mer, nu blir det snabba puckar. 
            Splittra gruppen, några tar sig till caféet, igen jag vet. 
            Resten till våning 4, hitta QR-koden vid kaffemaskinen. Skärp er och samarbeta. Ni har mobiler, använd dem för att kommunicera.
        `
      });
}



