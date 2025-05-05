function renderPage7(wrapper){
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop7 = document.createElement("div")
    backDrop7.id = "backDrop7"
    opacityBackground.append(backDrop7)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop7.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "ANALOGT UPPDRAG - AVKODA FÖR ATT FORTSÄTTA"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Detta uppdrag är analogt, men för att komma vidare måste ni skriva in det ni har avkodat.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "BOKSTÄVER"
    textContainer.append(inputField)
    

    function graceHopper(value) {
        return ["GRACE HOPPER", "Grace Hopper", "Grace hopper", "grace Hopper", "grace hopper"]
            .includes(value.trim());
    }
    

    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "ENTER"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (graceHopper(userInput)) {
            renderPage8(wrapper);
        } else {
            inputShake(inputField);
        }
    });
    
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}