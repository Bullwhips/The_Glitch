function renderGameFinish(wrapper) {
    wrapper.innerHTML = "";

    let opacityBackground = document.createElement("div");
    opacityBackground.classList.add("noScroll");
    opacityBackground.id = "opacityBackground";
    wrapper.append(opacityBackground);

    let gameCompleteText = document.createElement("div");
    gameCompleteText.id = "gameCompleteText";
    gameCompleteText.textContent = "GAME COMPLETE";
    opacityBackground.append(gameCompleteText);

    let gruppForm = document.createElement("form");
    gruppForm.id = "gruppForm"; //  fixed
    opacityBackground.append(gruppForm);

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "gruppInput";
    inputField.placeholder = "ANGE GRUPNAMN";
    gruppForm.append(inputField);

    let nextStepButton = document.createElement("button");
    nextStepButton.id = "scoreboardButton";
    nextStepButton.textContent = "SCOREBOARD";
    gruppForm.append(nextStepButton);



    //  Now DOM elements are in the document, safely query them:
    const form = gruppForm;
    const gruppInput = inputField;



    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const gruppNamn = gruppInput.value;
        const savedEndTime = localStorage.getItem("glitchTimerEnd");
       
        let remainingSeconds = 0;
        if (savedEndTime) {
            remainingSeconds = Math.max(0, Math.floor((savedEndTime - Date.now()) / 1000));
        }

        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const grupp = {
             name: gruppNamn,
             time: formattedTime
            };

        const request = new Request("/api/grupper", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(grupp)
        });

        const response = await fetch(request);

        if (response.ok) {
    
            renderLeaderboard(wrapper)
        }
        localStorage.removeItem("glitchTimerEnd");
        form.reset();
    });

    

}
