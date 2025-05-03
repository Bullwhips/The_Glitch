function renderPage14(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop14 = document.createElement("div")
    backDrop14.id = "backDrop14"
    opacityBackground.append(backDrop14)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop14.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "GÖR ERT VAL!"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Ni har nu börjat nå slutet av spelet. 
                        Men med informationen ni fick från videon så skapar ordet ett anagram. 
                        Ni har alltså två val: Vill ni gå den goda vägen skriver ni in LOVE. 
                        Vill ni gå den onda vägen skriver ni in EVOL. Tänk igenom noga, detta är det sista valet ni gör.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "LOVE ELLER EVOL"
    textContainer.append(inputField)


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "SKICKA"
    nextStepButton.addEventListener("click", () => {console.log("bra jobbat")});
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}