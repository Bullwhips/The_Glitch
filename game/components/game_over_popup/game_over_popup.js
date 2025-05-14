function renderGameOver(wrapper){
    wrapper.innerHTML = "";
    let opacityBackground = document.createElement("div");
    opacityBackground.classList.add("noScroll")
    opacityBackground.id = "opacityBackground";
    wrapper.append(opacityBackground)
   
    let gameCompleteText = document.createElement("div")
    gameCompleteText.id = "gameCompleteText"
    gameCompleteText.innerHTML = `<span class="headerGameOver">GAME OVER</span><br>
     Tiden tog slut...`;
    opacityBackground.append(gameCompleteText)
}