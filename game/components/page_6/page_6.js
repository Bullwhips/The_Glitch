function renderPage6 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop6 = document.createElement("div");
    backDrop6.id = "backDrop2";
    opacityBackground.append(backDrop6);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop6.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "LYSSNA PÅ LÅTEN.";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Tryck på play och lyssna på låten.`;
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
    nextStepButton.addEventListener("click", () => {renderPage7(wrapper)});
    textContainer.append(nextStepButton);
}