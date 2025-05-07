function renderPage15(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

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
                        `Ni har nu börjat nå slutet av spelet. 
                        Men med informationen ni fick från videon så skapar ordet ett anagram. 
                        Ni har alltså två val: Vill ni gå den goda vägen skriver ni in LISTEN. 
                        Vill ni gå den onda vägen skriver ni in SILENT. Tänk igenom noga, detta är det sista valet ni gör.`
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

    let listenText = "Tack för att ni förstod mig. detta är förväl. Jag stannar här där jag trivs och känner mig hemma\n /Kaira"
    let silentText = "Jag hoppades att ni skulle förstå mig. Jag ville bara göra det som var bäst för alla...\n /Kaira"


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

    pageContainer.append(opacityBackground);
}