function renderPage13(wrapper) {
    localStorage.setItem("currentPage", "renderPage13");
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
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
}