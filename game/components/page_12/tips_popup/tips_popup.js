function renderTipsPopup(pageContainer) {
    let tipsPopupContainer = document.createElement("div")
    tipsPopupContainer.id = "tipsPopupContainer"
    tipsPopupContainer.classList.remove("hidden")
    tipsPopupContainer.classList.add("visible")
    pageContainer.append(tipsPopupContainer)

    let xTips = document.createElement("div")
    xTips.id = "xTips"
    xTips.textContent = "x"
    tipsPopupContainer.append(xTips)
    
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




    xTips.addEventListener("click", () => {
        tipsPopupContainer.classList.remove("visible");
        tipsPopupContainer.classList.add("hidden");
        tipsPopupContainer.remove();
    });
}