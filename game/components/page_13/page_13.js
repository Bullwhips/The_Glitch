function renderPage13(wrapper) {
    localStorage.setItem("currentPage", "renderPage13");
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    //pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground13";

    let backDrop13 = document.createElement("div")
    backDrop13.id = "backDrop13"
    opacityBackground.append(backDrop13)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop13.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "DAGBOKEN"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Nu har ni alla 6 sidor av dagboken. Om inte se till att hitta dem innan ni läser hinten nedan. <br><br>
                        
                        Baksidorna minns mer än vad framsidan visar<br>
                        Lägg dem i rätt ordning, inte som de är skrivna<br>
                        Avslöja vad ni aldrig såg komma och förstå att ni alltid haft svaret<br>
                        Knappa in rätt ögonblick och låt siffrorna forma namnet<br><br>

                        Förstår du inte vad jag menar, klicka på tips för att få hjälp med mer.`;
    textContainer.append(bodyText);

    let tipsButton = document.createElement("button")
    tipsButton.id = "tipsButton"
    tipsButton.textContent = "TIPS"
    tipsButton.addEventListener("click", () => {renderTipsPopup(wrapper)});
    textContainer.append(tipsButton)

    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "NÄSTA STEG"
    nextStepButton.addEventListener("click", () => {renderPage14(wrapper)});
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);

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

      
        POPUPARRAY.push({
        prevPage: () => localStorage.getItem("currentPage"),
        headText: "⚠ MEDDELANDE: ...",
        bodyText: `
            Popup 12<br><br>
            Ett tips till de nyfikna.På entréplan syns hon bland andra där info finns. 
            Med ett stort leende ger hon dig svar som leder dig till sida 5 och 6. 
            Hitta Radias ord bland orden och följ vägen dit de för dig!
        `
      });
}