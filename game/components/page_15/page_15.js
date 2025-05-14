function renderPage15(wrapper) {
    localStorage.setItem("currentPage", "renderPage15");
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground15";
    pageContainer.append(opacityBackground);

    let backDrop15 = document.createElement("div")
    backDrop15.id = "backDrop15"
    opacityBackground.append(backDrop15)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop15.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "GÖR ERT VAL!"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Ni har nått slutet. Videon har sagt allt. Har jag lyckats övertala er?<br>
                        Ett ord. Två vägar. Samma bokstäver.<br>
                        Ni har alltså två alternativ:<br><br>

                        LISTEN — Gå med Kaira i hennes uppsåt att förgöra digitalisering och låt kvinnorna stiga fram.<br><br>

                        Eller<br><br>

                        SILENT — Låt digitaliseringen ta över och orättvisan fortsätta! Men inget kan ändra det som redan satts i rullning.<br><br>
 
                        Det här är ert sista val, så tänk efter noga.
                        `;
    textContainer.append(bodyText);

    function listen(value) {
        return ["LISTEN", "Listen", "listen"]
            .includes(value.trim());
    }

    function silent(value) {
        return ["SILENT", "Silent", "silent"]
            .includes(value.trim());
    }

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "LISTEN ELLER SILENT"
    textContainer.append(inputField)

    // let listenText = "Tack för att ni förstod mig. detta är förväl. Jag stannar här där jag trivs och känner mig hemma\n /Kaira"
    // let silentText = "Jag hoppades att ni skulle förstå mig. Jag ville bara göra det som var bäst för alla...\n /Kaira"


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "SKICKA"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (listen(userInput)) {
            renderGameCompletePopup(wrapper,listenText);
        } 
        else if(silent(userInput)){
            renderGameCompletePopup(wrapper,silentText)
            }
        else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton)
}