function renderPage1(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);
    

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    renderMenu(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    wrapper.append(opacityBackground);

    let backDrop1 = document.createElement("div");
    backDrop1.id = "backDrop1";
    opacityBackground.append(backDrop1);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDrop1.append(textContainer);

    let headerText = document.createElement("h2");
    headerText.id = "headerText";
    headerText.textContent= "VÄLKOMNA SPELARE";
    textContainer.append(headerText);

    let bodyText = document.createElement("p");
    bodyText.id = "bodyText";
    bodyText.innerHTML =
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
    textContainer.append(bodyText);

    let nextStepButton = document.createElement("button");
    nextStepButton.id = "nextStepButton";
    nextStepButton.textContent = "NÄSTA STEG";
    nextStepButton.addEventListener("click", () => {renderPage2(wrapper)});
    textContainer.append(nextStepButton);
}
