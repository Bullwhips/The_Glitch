function renderPage6 (wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let page6Container = document.createElement("div");
    page6Container.id = "page-container";
    wrapper.append(page6Container);

    let opacity6Background = document.createElement("div");
    opacity6Background.id = "opacityBackground";
    page6Container.append(opacity6Background);

    let backDrop6 = document.createElement("div");
    backDrop6.id = "backDrop2";
    opacity6Background.append(backDrop6);

    let textContainer6 = document.createElement("div");
    textContainer6.id = "textContainer";
    backDrop6.append(textContainer6);

    let headerText6 = document.createElement("h2");
    headerText6.id = "headerText";
    headerText6.textContent= "AVKODA MEDDELANDET.";
    textContainer6.append(headerText6);

    let bodyText6 = document.createElement("p");
    bodyText6.id = "bodyText";
    bodyText6.innerHTML =
                 `Använd er av länken nedan för att få fram rätt kod:`;
    textContainer6.append(bodyText6);
}