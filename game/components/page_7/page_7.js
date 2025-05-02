function renderPage7(wrapper){
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop7 = document.createElement("div")
    backDrop7.id = "backDrop7"
    opacityBackground.append(backDrop7)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop7.append(textContainer)

    let headerText7 = document.createElement("h2")
    headerText7.id = "headerText7"
    headerText7.textContent= "ANALOGT UPPDRAG - AVKODA FÖR ATT FORTSÄTTA"
    textContainer.append(headerText7)

     let textPage7 = document.createElement("p")
    textPage7.id = "textPage7"
    textPage7.innerHTML =
                        `Detta uppdrag är analogt, men för att komma vidare måste ni skriva in det ni har avkodat.`
    textContainer.append(textPage7);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "BOKSTÄVER"
    textContainer.append(inputField)


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "STEG 7"
    nextStepButton.addEventListener("click", () => {renderPage2(wrapper)});
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}