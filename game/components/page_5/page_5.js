function renderPage5 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop5 = document.createElement("div");
    backDrop5.id = "backDrop2";
    opacityBackground.append(backDrop5);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop5.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "AVKODA MEDDELANDET.";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Klicka på play-knappen för att få ljudfilen att spelas upp. 
                  Ni kan spela upp ljudet hur många gånger ni vill. 
                  Var uppmärksamma på detaljer och ledtrådar.`;
    textContainer.append(bodyText);

    let audioContainer = document.createElement("div");
    audioContainer.id = "audio-container";
    textContainer.append(audioContainer);

    let audio = document.createElement("audio");
    audio.id = "audio";
    audio.controls = true;
    audioContainer.append(audio);

    let nextStepButton = document.createElement("button");
    nextStepButton.id = "nextStepButton";
    nextStepButton.textContent = "NÄSTA STEG";
    nextStepButton.addEventListener("click", () => {renderPage6(wrapper)});
    textContainer.append(nextStepButton);
}