function renderPage2(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop2 = document.createElement("div");
    backDrop2.id = "backDrop2";
    opacityBackground.append(backDrop2);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop2.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "MEDDELANDE.";
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
    nextStepButton.textContent = "STEG 3";
    nextStepButton.addEventListener("click", () => {renderPage3(wrapper)});
    textContainer.append(nextStepButton);
}