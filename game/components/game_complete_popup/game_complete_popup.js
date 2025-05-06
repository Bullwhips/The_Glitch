function renderGameCompletePopup(wrapper,message){
    wrapper.innerHTML = "";

    let backgroundDiv = document.createElement("div");
    backgroundDiv.id = "background-div";
    wrapper.append(backgroundDiv);

    let x = document.createElement("div");
    x.id = "x";
    x.textContent = "X";
    backgroundDiv.append(x);

    let typewriterText = document.createElement("p");
    typewriterText.id = "typewriter";
    backgroundDiv.append(typewriterText);

    x.addEventListener("click", () => {renderGameFinish(wrapper)})

    startTypewriter({
        text: message,
        elementId: "typewriter",
        speed: 80,
        initialDelay: 7000
      });

}