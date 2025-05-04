function renderPage3 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop3 = document.createElement("div");
    backDrop3.id = "backDrop2";
    opacityBackground.append(backDrop3);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop3.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "AVKODA MEDDELANDET.";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Använd er av länken nedan för att få fram rätt kod: <br><br>
                 <a id="link" href="https://obamawhitehouse.archives.gov/women-in-stem">LÄNK</a>
                 `;
    textContainer.append(bodyText);

    let questContainer = document.createElement("div");
    questContainer.id = "quest-container";
    backDrop3.appendChild(questContainer);

    let tryCode = document.createElement("button");
    tryCode.id = "nextStepButton";
    tryCode.textContent = "TESTA KODEN";
    tryCode.addEventListener("click", () => {renderPage4(wrapper)});
    textContainer.append(tryCode);
}