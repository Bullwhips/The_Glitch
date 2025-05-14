function renderPage3 (wrapper) {
    localStorage.setItem("currentPage", "renderPage3");
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    renderMenu(wrapper);

    startTimer();

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    pageContainer.append(opacityBackground);

    let backDrop3 = document.createElement("div");
    backDrop3.id = "backDrop3";
    opacityBackground.append(backDrop3);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop3.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "AVKODA MEDDELANDET.";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
                 `Använd er av texten på pappret som är nära för att få fram rätt kod:<br><br>
                  Här kommer en ledtråd; börja uppe och missa inget steg, avslöja henne vars namn våra munnar teg.
    `;
    textContainer.append(bodyText);

    let questContainer = document.createElement("div");
    questContainer.id = "quest-container";
    textContainer.appendChild(questContainer);

    let downArrow = document.createElement("div");
    downArrow.id = "down-arrow";
    downArrow.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.7099 11.29C17.617 11.1963 17.5064 11.1219 17.3845 11.0711C17.2627 11.0203 17.132 10.9942 16.9999 10.9942C16.8679 10.9942 16.7372 11.0203 16.6154 11.0711C16.4935 11.1219 16.3829 11.1963 16.2899 11.29L12.9999 14.59V7C12.9999 6.73478 12.8946 6.48043 12.707 6.29289C12.5195 6.10536 12.2652 6 11.9999 6C11.7347 6 11.4804 6.10536 11.2928 6.29289C11.1053 6.48043 10.9999 6.73478 10.9999 7V14.59L7.70994 11.29C7.52164 11.1017 7.26624 10.9959 6.99994 10.9959C6.73364 10.9959 6.47825 11.1017 6.28994 11.29C6.10164 11.4783 5.99585 11.7337 5.99585 12C5.99585 12.2663 6.10164 12.5217 6.28994 12.71L11.2899 17.71C11.385 17.801 11.4972 17.8724 11.6199 17.92C11.7396 17.9729 11.8691 18.0002 11.9999 18.0002C12.1308 18.0002 12.2602 17.9729 12.3799 17.92C12.5027 17.8724 12.6148 17.801 12.7099 17.71L17.7099 12.71C17.8037 12.617 17.8781 12.5064 17.9288 12.3846C17.9796 12.2627 18.0057 12.132 18.0057 12C18.0057 11.868 17.9796 11.7373 17.9288 11.6154C17.8781 11.4936 17.8037 11.383 17.7099 11.29Z" fill="#F8F8F8"/>
        </svg>
    `;
    questContainer.appendChild(downArrow);

    let rightArrow = document.createElement("div");
    rightArrow.id = "right-arrow";
    rightArrow.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.29 6.29006C11.1963 6.38302 11.1219 6.49362 11.0711 6.61548C11.0203 6.73734 10.9942 6.86805 10.9942 7.00006C10.9942 7.13207 11.0203 7.26278 11.0711 7.38464C11.1219 7.5065 11.1963 7.61709 11.29 7.71006L14.59 11.0001H7C6.73478 11.0001 6.48043 11.1054 6.29289 11.293C6.10536 11.4805 6 11.7348 6 12.0001C6 12.2653 6.10536 12.5196 6.29289 12.7072C6.48043 12.8947 6.73478 13.0001 7 13.0001H14.59L11.29 16.2901C11.1017 16.4784 10.9959 16.7338 10.9959 17.0001C10.9959 17.2664 11.1017 17.5218 11.29 17.7101C11.4783 17.8984 11.7337 18.0042 12 18.0042C12.2663 18.0042 12.5217 17.8984 12.71 17.7101L17.71 12.7101C17.801 12.615 17.8724 12.5028 17.92 12.3801C17.9729 12.2604 18.0002 12.1309 18.0002 12.0001C18.0002 11.8692 17.9729 11.7398 17.92 11.6201C17.8724 11.4973 17.801 11.3852 17.71 11.2901L12.71 6.29006C12.617 6.19633 12.5064 6.12194 12.3846 6.07117C12.2627 6.0204 12.132 5.99426 12 5.99426C11.868 5.99426 11.7373 6.0204 11.6154 6.07117C11.4936 6.12194 11.383 6.19633 11.29 6.29006Z" fill="#F8F8F8"/>
        </svg>
    `;
    questContainer.appendChild(rightArrow);

    let questArray = [
        {id: 1, leftNumber: 4, rightNumber: 6, inputFieldID: "input-field-1", correctLetter: "A"},
        {id: 2, leftNumber: 3, rightNumber: 16, inputFieldID: "input-field-2", correctLetter: "D"},
        {id: 3, leftNumber: 2, rightNumber: 13, inputFieldID: "input-field-3", correctLetter: "A"},
        {id: 4, leftNumber: 1, rightNumber: 1, inputFieldID: "input-field-4", correctLetter: "L"},
        {id: 5, leftNumber: 7, rightNumber: 3, inputFieldID: "input-field-5", correctLetter: "O"},
        {id: 6, leftNumber: 7, rightNumber: 19, inputFieldID: "input-field-6", correctLetter: "V"},
        {id: 7, leftNumber: 10, rightNumber: 10, inputFieldID: "input-field-7", correctLetter: "E"},
        {id: 8, leftNumber: 2, rightNumber: 14, inputFieldID: "input-field-8", correctLetter: "L"},
        {id: 9, leftNumber: 4, rightNumber: 6, inputFieldID: "input-field-9", correctLetter: "A"},
        {id: 10, leftNumber: 9, rightNumber: 4, inputFieldID: "input-field-10", correctLetter: "C"},
        {id: 11, leftNumber: 5, rightNumber: 15, inputFieldID: "input-field-11", correctLetter: "E"},
    ];

    questArray.forEach((element) => {
        let numberOnLeft = document.createElement("p");
        numberOnLeft.id = "number-on-left";
        numberOnLeft.innerHTML = `${element.leftNumber}`;
        questContainer.appendChild(numberOnLeft);

        let inputFieldDivCont = document.createElement("div");
        inputFieldDivCont.id = `${element.inputFieldID}`;
        questContainer.appendChild(inputFieldDivCont);
        let inputFields = document.createElement("input");
        inputFields.id = "input-field";
        inputFields.type = "text";
        inputFields.maxLength = "1";
        inputFieldDivCont.appendChild(inputFields);
        
        element.inputRef = inputFields; // Spara referens till inputfältet

        let numberOnRight = document.createElement("p");
        numberOnRight.id = "number-on-right";
        numberOnRight.innerHTML = `${element.rightNumber}`;
        questContainer.appendChild(numberOnRight);
    });

    let tryCode = document.createElement("button");
    tryCode.id = "nextStepButton";
    tryCode.textContent = "TESTA KODEN";
    tryCode.addEventListener("click", () => {
        let allCorrect = true;
    
        questArray.forEach((el) => {
            const inputLetter = el.inputRef.value.toUpperCase();
            const correctLetters = el.correctLetter.toUpperCase();
    
            if (inputLetter !== correctLetters) {
                allCorrect = false;
            }
        });
    
        if (allCorrect) {
            let audio = new Audio("../../assets/audio/popup_sound.mp3");
                audio.play().catch(e => {
                console.warn("Autoplay blockerat av webbläsaren:", e);
            });
            renderPage4(wrapper);
        } else {
            questArray.forEach((el) => {
                el.inputRef.value = "";
                inputShake(el.inputRef);
            });
        }
    });
    
    textContainer.append(tryCode);
}