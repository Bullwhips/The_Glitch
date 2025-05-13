function renderTipsPopup(wrapper) {
    let tipsPopupContainer = document.createElement("div")
    tipsPopupContainer.id = "tipsPopupContainer"
    tipsPopupContainer.classList.remove("hidden")
    tipsPopupContainer.classList.add("visible")
    wrapper.append(tipsPopupContainer)
    
    let mainNumber = document.createElement("div")
    mainNumber.id = "mainNumber"
    mainNumber.textContent= "5524447772"
    tipsPopupContainer.append(mainNumber)

    let numbersGridContainer = document.createElement("div")
    numbersGridContainer.id = "numbersGridContainer"
    tipsPopupContainer.append(numbersGridContainer)

    let numbersGrid1 = document.createElement("div")
    numbersGrid1.id = "numbersGrid1"
    numbersGrid1.classList.add("gridCell")
    let number1 = document.createElement("div")
    number1.textContent = "1"
    let letters1 = document.createElement("div")
    letters1.textContent = ""
    numbersGrid1.append(number1)
    numbersGrid1.append(letters1)
    numbersGridContainer.append(numbersGrid1) 

    let numbersGrid2 = document.createElement("div")
    numbersGrid2.id = "numbersGrid2"
    numbersGrid2.classList.add("gridCell")
    let number2 = document.createElement("div")
    number2.textContent = "2"
    let letters2 = document.createElement("div")
    letters2.textContent = "ABC"
    numbersGrid2.append(number2)
    numbersGrid2.append(letters2)
    numbersGridContainer.append(numbersGrid2) 

    let numbersGrid3 = document.createElement("div")
    numbersGrid3.id = "numbersGrid3"
    numbersGrid3.classList.add("gridCell")
    let number3 = document.createElement("div")
    number3.textContent = "3"
    let letters3 = document.createElement("div")
    letters3.textContent = "DEF"
    numbersGrid3.append(number3)
    numbersGrid3.append(letters3)
    numbersGridContainer.append(numbersGrid3) 

    let numbersGrid4 = document.createElement("div")
    numbersGrid4.id = "numbersGrid4"
    numbersGrid4.classList.add("gridCell")
    let number4 = document.createElement("div")
    number4.textContent = "4"
    let letters4 = document.createElement("div")
    letters4.textContent = "GHI"
    numbersGrid4.append(number4)
    numbersGrid4.append(letters4)
    numbersGridContainer.append(numbersGrid4) 

    let numbersGrid5 = document.createElement("div")
    numbersGrid5.id = "numbersGrid5"
    numbersGrid5.classList.add("gridCell")
    let number5 = document.createElement("div")
    number5.textContent = "5"
    let letters5 = document.createElement("div")
    letters5.textContent = "JKL"
    numbersGrid5.append(number5)
    numbersGrid5.append(letters5)
    numbersGridContainer.append(numbersGrid5) 

    let numbersGrid6 = document.createElement("div")
    numbersGrid6.id = "numbersGrid6"
    numbersGrid6.classList.add("gridCell")
    let number6 = document.createElement("div")
    number6.textContent = "6"
    let letters6 = document.createElement("div")
    letters6.textContent = "MNO"
    numbersGrid6.append(number6)
    numbersGrid6.append(letters6)
    numbersGridContainer.append(numbersGrid6) 

    let numbersGrid7 = document.createElement("div")
    numbersGrid7.id = "numbersGrid7"
    numbersGrid7.classList.add("gridCell")
    let number7 = document.createElement("div")
    number7.textContent = "7"
    let letters7 = document.createElement("div")
    letters7.textContent = "PQRS"
    numbersGrid7.append(number7)
    numbersGrid7.append(letters7)
    numbersGridContainer.append(numbersGrid7) 

    let numbersGrid8 = document.createElement("div")
    numbersGrid8.id = "numbersGrid8"
    numbersGrid8.classList.add("gridCell")
    let number8 = document.createElement("div")
    number8.textContent = "8"
    let letters8 = document.createElement("div")
    letters8.textContent = "TUV"
    numbersGrid8.append(number8)
    numbersGrid8.append(letters8)
    numbersGridContainer.append(numbersGrid8) 

    let numbersGrid9 = document.createElement("div")
    numbersGrid9.id = "numbersGrid9"
    numbersGrid9.classList.add("gridCell")
    let number9 = document.createElement("div")
    number9.textContent = "9"
    let letters9 = document.createElement("div")
    letters9.textContent = "WXYZ"
    numbersGrid9.append(number9)
    numbersGrid9.append(letters9)
    numbersGridContainer.append(numbersGrid9) 

    let numbersGridMult = document.createElement("div")
    numbersGridMult.id = "numbersGridMult"
    numbersGridMult.classList.add("gridCell")
    let numberMult = document.createElement("div")
    numberMult.textContent = "*"
    let lettersMult = document.createElement("div")
    lettersMult.textContent = ""
    numbersGridMult.append(numberMult)
    numbersGridMult.append(lettersMult)
    numbersGridContainer.append(numbersGridMult) 

    let numbersGrid0 = document.createElement("div")
    numbersGrid0.id = "numbersGrid0"
    numbersGrid0.classList.add("gridCell")
    let number0 = document.createElement("div")
    number0.textContent = "0"
    let letters0 = document.createElement("div")
    letters0.textContent = ""
    numbersGrid0.append(number0)
    numbersGrid0.append(letters0)
    numbersGridContainer.append(numbersGrid0) 

    let numbersGridHash = document.createElement("div")
    numbersGridHash.id = "numbersGridHash"
    numbersGridHash.classList.add("gridCell")
    let numberHash = document.createElement("div")
    numberHash.textContent = "#"
    let lettersHash = document.createElement("div")
    lettersHash.textContent = ""
    numbersGridHash.append(numberHash)
    numbersGridHash.append(lettersHash)
    numbersGridContainer.append(numbersGridHash)
    
    let closePopupButtonContainer = document.createElement("div");
    closePopupButtonContainer.id = "close-popup-button-container";
    tipsPopupContainer.append(closePopupButtonContainer);
    let closePopupButton = document.createElement("button");
    closePopupButton.id = "close-popup-button";
    closePopupButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton.addEventListener("click", () => {
        tipsPopupContainer.classList.remove("visible");
        tipsPopupContainer.classList.add("hidden");
        tipsPopupContainer.remove();
    });
    closePopupButtonContainer.append(closePopupButton);
}