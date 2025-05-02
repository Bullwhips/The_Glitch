function renderPage2(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let page2Container = document.createElement("div");
    page2Container.id = "page-container";
    wrapper.append(page2Container);

    let opacity2Background = document.createElement("div");
    opacity2Background.id = "opacityBackground";
    page2Container.append(opacity2Background);

    let backDrop2 = document.createElement("div");
    backDrop2.id = "backDrop2";
    opacity2Background.append(backDrop2);

    let textContainer2 = document.createElement("div");
    textContainer2.id = "textContainer";
    backDrop2.append(textContainer2);

    let headerText2 = document.createElement("h2");
    headerText2.id = "headerText";
    headerText2.textContent= "MEDDELANDE.";
    textContainer2.append(headerText2);

    let bodyText2 = document.createElement("p");
    bodyText2.id = "bodyText";
    bodyText2.innerHTML =
                 `Klicka på play-knappen för att få ljudfilen att spelas upp. 
                  Ni kan spela upp ljudet hur många gånger ni vill. 
                  Var uppmärksamma på detaljer och ledtrådar.`;
    textContainer2.append(bodyText2);

    let audioContainer1 = document.createElement("div");
    audioContainer1.id = "audio-container";
    textContainer2.append(audioContainer1);

    let audio1 = document.createElement("audio");
    audio1.id = "audio";
    audio1.controls = true;
    audioContainer1.append(audio1);

    let nextStepButton2 = document.createElement("button");
    nextStepButton2.id = "nextStepButton";
    nextStepButton2.textContent = "STEG 3";
    nextStepButton2.addEventListener("click", () => {renderPage3(wrapper)});
    textContainer2.append(nextStepButton2);
}