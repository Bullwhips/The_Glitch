function renderPage4 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop4 = document.createElement("div");
    backDrop4.id = "backDrop2";
    opacityBackground.append(backDrop4);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop4.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "ANALOGT UPPDRAG - AVKODA FÖR ATT FORTSÄTTA";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Skriv in koden för att komma vidare.`;
    textContainer.append(bodyText);

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "inputField";
    inputField.placeholder = "SIFFROR";
    textContainer.append(inputField);

    let nextStepButton = document.createElement("button");
    nextStepButton.id = "nextStepButton";
    nextStepButton.textContent = "NÄSTA STEG";
    nextStepButton.addEventListener("click", () => {renderPage5(wrapper)});
    textContainer.append(nextStepButton);
}