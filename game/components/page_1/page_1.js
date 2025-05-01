function renderPage1(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";

    let backDrop = document.createElement("div")
    backDrop.id = "backDrop"
    opacityBackground.append(backDrop)

    let textContainer = document.createElement("div")
    textContainer.id = "textContainer"
    backDrop.append(textContainer)

    let welcomeText1 = document.createElement("h2")
    welcomeText1.id = "welcomeText1"
    welcomeText1.textContent= "VÄLKOMNA SPELARE"
    textContainer.append(welcomeText1)

    let textPage1 = document.createElement("p")
    textPage1.id = "textPage1"
    textPage1.innerHTML =
                 `Kaira har fastnat i en glitch. Nu är det upp till er att hjälpa henne. 
                  Uppe i höger hörn ser ni tiden ni har på er att klara spelet. 
                  Tiden går inte att pausa eller stanna på något sätt vilket betyder att när tiden är ute så är spelet slut. 
                  Spelet kommer att avslutas oavsett hur långt ni kommit. 
                  Det är därför extra viktigt att ni är uppmärksamma och snabbtänkta. 
                  Samarbeta, för anteckningar och skapa samband. 
                  Framtiden för rätt ögonblick vilar i era händer. <br><br>
                  Under klockan på höger sida hittar ni en meny. 
                  Högst upp i menyn finns spelregler, i mitten olika medier som kan behövas under spelets gång och längst ner hittar ni information om oss och kontaktuppgifter om ni skulle stöta på problem i spelet. <br><br>
                  Var inte rädda för att testa er fram, klicka er gärna genom appen och utforska. Om ni har tur så kan det under spelets gång dyka upp ledtrådar som kan vara användbara. Lycka till...<br><br> 
                  ALLA DETALJER ÄR VIKTIGA. DEN SOM SER ALLT MISSAR INGET.`;
    textContainer.append(textPage1);

    let stepTwoButton = document.createElement("button")
    stepTwoButton.id = "stepTwoButton"
    stepTwoButton.textContent = "STEG 2"
    stepTwoButton.addEventListener("click", () => {renderPage2(wrapper)});
    textContainer.append(stepTwoButton)

    pageContainer.append(opacityBackground);
}
