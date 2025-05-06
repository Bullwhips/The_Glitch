function renderPage11(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
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
                        `Om ni har kommit till detta steg så ska ni dela på er. 
                        När ni har hittat hieroglyferna i caféet och scannat QR-koden på kaffemaskinen ska ni ha hittat den gömda meningen. 
                        Samla sedan gruppen för att tillsammans skriva in det ord ni har avkodat.`
    textContainer.append(bodyText);

    let inputField = document.createElement("input")
    inputField.type = "text"
    inputField.id = "inputField"
    inputField.placeholder = "BOKSTÄVER"
    textContainer.append(inputField)

    function motherOfInternet(value) {
        return ["MOTHER OF INTERNET", "MOTHER Of INTERNET", "MOTHER of INTERNET", "Mother Of Internet", "Mother of internet", "mother of internet"]
            .includes(value.trim());
    }


    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "ENTER"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (motherOfInternet(userInput)) {
            renderPage12(wrapper);
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}