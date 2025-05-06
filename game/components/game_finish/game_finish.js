function renderGameFinish(wrapper) {
    wrapper.innerHTML = "";

    let opacityBackground = document.createElement("div");
    opacityBackground.classList.add("noScroll")
    opacityBackground.id = "opacityBackground";
    wrapper.append(opacityBackground)
   

    let gameCompleteText = document.createElement("div")
    gameCompleteText.id = "gameCompleteText"
    gameCompleteText.textContent = "GAME COMPLETE"
    opacityBackground.append(gameCompleteText)
}