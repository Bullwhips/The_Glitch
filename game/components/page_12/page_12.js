function renderPage12(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop12 = document.createElement("div")
    backDrop12.id = "backDrop12"
    opacityBackground.append(backDrop12)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop12.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "VAD BETYDER SIFFRORNA?"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Sifferkombinationen som ni kom fram till under förra steget. Den kan användas på ett annat sätt. Klicka på TIPS-knappen för att få reda på hur.`
    textContainer.append(bodyText);

    let tipsButton = document.createElement("button")
    tipsButton.id = "tipsButton"
    tipsButton.textContent = "TIPS"
    tipsButton.addEventListener("click", () => {renderTipsPopup(wrapper)})

    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "NÄSTA STEG"
    nextStepButton.addEventListener("click", () => {renderPage13(wrapper)});
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}