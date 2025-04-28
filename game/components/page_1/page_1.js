function renderPage1(wrapper) {
    wrapper.innerHTML = "";

    renderHeader(wrapper);

    let pageContainer = document.createElement("div");
    pageContainer.id = "page-container";
    wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.id = "opacityBackground";
    opacityBackground.innerHTML = `
        <div id="backDrop">
            <div id="textContainer">
                <h2 id="welcomeText1">VÄLKOMMEN SPELARE. VARJE DETALJ ÄR VIKTIG, HÅLL ERA ÖGON OCH ÖRON ÖPPNA.</h2>
                <p id="textPage1">Ni har nu fått se en introduktions film där Kaira har fastnat i glitchen. Detta betyder att ni har tagit er igenom första delen och spelet är officiellt igång. Som ni kan se uppe i höger hörn så går spelet på tid. Tiden går inte att pausa eller stanna på något sätt. Det betyder att när tiden är ute så avslutas spelet oavsett om ni har klarat spelet eller inte, därför är det extra viktigt att ni nu är uppmärksamma på allt runt omkring er och var inte blyga för att anteckna. <br><br>
                Under klockan på höger sida hittar ni en meny. Högst upp i menyn finner ni spelregler, i mitten finner ni olika medier som kan behövas och längst ner hittar ni information om oss och kontaktuppgifter om ni stöter på problem i spelet. <br><br>
                Var inte rädda för att testa er fram, klicka er genom appen och utforska. Om ni har tur så kan det under spelets gång dyka upp ledtrådar som kan vara användbara. Lycka till...</p>
                <button id="stepTwoButton">STEG 2</button>
            </div>
        </div>
    `;

    pageContainer.append(opacityBackground);
}
