function renderPage8(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop8 = document.createElement("div")
    backDrop8.id = "backDrop8"
    opacityBackground.append(backDrop8)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop8.append(textContainer)

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "QUIZ"
    textContainer.append(headerText)

     let bodyText = document.createElement("p")
    bodyText.id = "bodyText"
    bodyText.innerHTML =
                        `För att svara rätt på dessa quizfrågor får ni gärna googla fram svaren, detta är ett läroquiz. 
                         Kom ihåg att frågorna och svaren kan vara viktiga framöver.`
    textContainer.append(bodyText);

    let quizContainer = document.createElement("div")
    for (let i = 0; i < questions.length; i++) {
        const element = array[i];
        
    }

    pageContainer.append(opacityBackground);
}