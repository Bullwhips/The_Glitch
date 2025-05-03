function renderPage3 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let page3Container = document.createElement("div");
    page3Container.id = "page-container";
    wrapper.append(page3Container);

    let opacity3Background = document.createElement("div");
    opacity3Background.id = "opacityBackground";
    page3Container.append(opacity3Background);

    let backDrop3 = document.createElement("div");
    backDrop3.id = "backDrop2";
    opacity3Background.append(backDrop3);

    let textContainer3 = document.createElement("div");
    textContainer3.id = "textContainer";
    backDrop3.append(textContainer3);

    let headerText3 = document.createElement("h2");
    headerText3.id = "headerText";
    headerText3.textContent= "AVKODA MEDDELANDET.";
    textContainer3.append(headerText3);

    let bodyText3 = document.createElement("p");
    bodyText3.id = "bodyText";
    bodyText3.innerHTML =
                 `Använd er av länken nedan för att få fram rätt kod:`;
    textContainer3.append(bodyText3);
}