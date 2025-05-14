
function renderMainPageContent (wrapper) {
    let backgroundDiv = document.createElement("div");
    backgroundDiv.id = "background-div";
    wrapper.append(backgroundDiv);

    let textDiv = document.createElement("h1");
    textDiv.id = "textDiv"
    textDiv.textContent = "VAKNA SPELARE";
    backgroundDiv.append(textDiv);
    
    let dotSpan = document.createElement("span");
    dotSpan.id = "dots";
    textDiv.append(dotSpan);

    let typewriterText = document.createElement("p");
    typewriterText.id = "typewriter";
    backgroundDiv.append(typewriterText);

    let startGameButton = document.createElement("button");
    startGameButton.id = "start-game-button";
    startGameButton.textContent = "STARTA GAME";
    backgroundDiv.append(startGameButton);

    let video = "https://youtu.be/peL1uMC_Eas";
    let nextPage = renderPage1

    startGameButton.addEventListener("click", () => {
        renderVideoPopup(wrapper, video, nextPage)
    });   
}

