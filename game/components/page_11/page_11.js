function renderPage11(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
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
                        `Vänd på dagboks sidorna. 
                        Siffrorna skapar en kombination, men det finns bara en kombination som är rätt. 
                        Skriv in kombinationen nedan för att gå vidare, ni har hur många försök som helst.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "SIFFROR"
    textContainer.append(inputField)


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "STEG 11"
    nextStepButton.addEventListener("click", () => {renderPage12(wrapper)});
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}