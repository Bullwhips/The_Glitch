function renderPage10(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop10 = document.createElement("div")
    backDrop10.id = "backDrop10"
    opacityBackground.append(backDrop10)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop10.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "AVKODA FÖR ATT FORTSÄTTA"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `Om ni har kommit till detta steg så ska ni, 
                        när ni har hittat hieroglyferna i caféet och scannat QR-koden på routern, 
                        återigen samla gruppen för att tillsammans skriva in det ord ni har avkodat.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "KOD"
    textContainer.append(inputField)

    function routerKod(value) {
        return ["AP0743", "ap0743"]
            .includes(value.trim());
    }


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "ENTER"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (routerKod(userInput)) {
            renderPage11(wrapper);
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}