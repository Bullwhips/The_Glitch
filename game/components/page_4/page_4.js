function renderPage4 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let page4Container = document.createElement("div");
    page4Container.id = "page-container";
    wrapper.append(page4Container);

    let opacity4Background = document.createElement("div");
    opacity4Background.id = "opacityBackground";
    page4Container.append(opacity4Background);

    let backDrop4 = document.createElement("div");
    backDrop4.id = "backDrop2";
    opacity4Background.append(backDrop4);

    let textContainer4 = document.createElement("div");
    textContainer4.id = "textContainer";
    backDrop4.append(textContainer4);

    let headerText4 = document.createElement("h2");
    headerText4.id = "headerText";
    headerText4.textContent= "AVKODA MEDDELANDET.";
    textContainer4.append(headerText4);

    let bodyText4 = document.createElement("p");
    bodyText4.id = "bodyText";
    bodyText4.innerHTML =
                 `Använd er av länken nedan för att få fram rätt kod:`;
    textContainer4.append(bodyText4);
}