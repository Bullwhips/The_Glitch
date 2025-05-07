function renderPage14(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    pageContainer.classList.add("noScroll")
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground14";

    let backDrop14 = document.createElement("div")
    backDrop14.id = "backDrop14"
    opacityBackground.append(backDrop14)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop14.append(textContainer)

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

    function kaira(value) {
        return ["KAIRA", "Kaira", "kaira"]
            .includes(value.trim());
    }

    let video = "static/assets/video/final_video_manifest.mp4"
    let nextPage = renderPage15

    let nextStepButton = document.createElement("button")
    nextStepButton.id = "nextStepButton"
    nextStepButton.textContent = "ENTER"
    nextStepButton.addEventListener("click", () => {
        let userInput = inputField.value;
        if (kaira(userInput)) {
            renderVideoPopup(wrapper, video, nextPage);
        } else {
            inputShake(inputField);
        }
    });
    textContainer.append(nextStepButton)

    pageContainer.append(opacityBackground);
}