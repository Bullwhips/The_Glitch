function renderGameFinish(wrapper) {
    localStorage.setItem("currentPage", "renderGameFinish");
    wrapper.innerHTML = "";

    let opacityBackground = document.createElement("div");
    opacityBackground.classList.add("noScroll");
    opacityBackground.id = "opacityBackground";
    wrapper.append(opacityBackground);

    let backDropFinish = document.createElement("div");
    backDropFinish.id = "backDropFinish";
    opacityBackground.append(backDropFinish);

    
    let textContainerFinish = document.createElement("div");
    textContainerFinish.id = "textContainerFinish";
    backDropFinish.append(textContainerFinish);

    let finishText = document.createElement("h1")
    finishText.id = "finishText"
    finishText.textContent= "GAME COMPLETE"
    textContainerFinish.append(finishText)

    let gruppForm = document.createElement("form");
    gruppForm.id = "gruppForm"; 
    textContainerFinish.append(gruppForm);

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "gruppInput";
    inputField.placeholder = "ANGE GRUPPNAMN";
    gruppForm.append(inputField);

    let nextStepButton = document.createElement("button");
    nextStepButton.id = "scoreButton";
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
