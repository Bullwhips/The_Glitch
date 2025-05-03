function renderPage5 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let page5Container = document.createElement("div");
    page5Container.id = "page-container";
    wrapper.append(page5Container);

    let opacity5Background = document.createElement("div");
    opacity5Background.id = "opacityBackground";
    page5Container.append(opacity5Background);

    let backDrop5 = document.createElement("div");
    backDrop5.id = "backDrop2";
    opacity5Background.append(backDrop5);

    let textContainer5 = document.createElement("div");
    textContainer5.id = "textContainer";
    backDrop5.append(textContainer5);

    let headerText5 = document.createElement("h2");
    headerText5.id = "headerText";
    headerText5.textContent= "AVKODA MEDDELANDET.";
    textContainer5.append(headerText5);

    let bodyText5 = document.createElement("p");
    bodyText5.id = "bodyText";
    bodyText5.innerHTML =
                 `Använd er av länken nedan för att få fram rätt kod:`;
    textContainer5.append(bodyText5);
}