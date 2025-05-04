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
    headerText.textContent= "AVKODA MEDDELANDET.";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Använd er av länken nedan för att få fram rätt kod:`;
    textContainer.append(bodyText);
}