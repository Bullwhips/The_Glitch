function renderPage13(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop13 = document.createElement("div")
    backDrop13.id = "backDrop13"
    opacityBackground.append(backDrop13)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop13.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "SKRIV RÄTT BOKSTÄVER"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Skriv in bokstäverna som ni har avkodat från siffrorna från förra steget. Ni kan gissa hur många gånger som helst, men tänk på tiden!`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "BOKSTÄVER"
    textContainer.append(inputField)


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "STEG 12"
    nextStepButton.addEventListener("click", () => {renderPage14(wrapper)});
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}