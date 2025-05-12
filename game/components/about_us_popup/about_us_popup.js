function renderAboutUsPopup (wrapper) {

    let aboutUsPopupContainer = document.createElement("div");
    aboutUsPopupContainer.id = "popup-container-aboutus";
    aboutUsPopupContainer.classList.remove("hidden");
    aboutUsPopupContainer.classList.add("visible");
    aboutUsPopupContainer.classList.add("longerPopup");
    wrapper.appendChild(aboutUsPopupContainer);

    let headTextAboutUs = document.createElement("h2");
    headTextAboutUs.id = "head-text-popup";
    headTextAboutUs.textContent = "OM OSS & KONTAKT";
    aboutUsPopupContainer.appendChild(headTextAboutUs);

    let popupContentContainer2 = document.createElement("div");
    popupContentContainer2.id = "popup-content-container-aboutus";
    aboutUsPopupContainer.appendChild(popupContentContainer2);

    let contactHeadline = document.createElement("h3");
    contactHeadline.id = "popup-text-headline-contact";
    contactHeadline.textContent = "☎ KONTAKTA OSS";
    popupContentContainer2.appendChild(contactHeadline);

    let aboutUsHeadline = document.createElement("h3");
    aboutUsHeadline.id = "popup-text-headline-about";
    aboutUsHeadline.textContent = "VILKA ÄR VI BAKOM SPELET?"
    popupContentContainer2.appendChild(aboutUsHeadline);

    let creatersContainer = document.createElement("div");
    creatersContainer.id = "creaters-container";
    popupContentContainer2.appendChild(creatersContainer);

    let creatersArray = [
        {name: "Hedda Åberg", nameID: 1, program: "MMA", programID: 1, picID: 1},
        {name: "Amir Hamed", nameID: 2, program: "MMA", programID: 2, picID: 2},
        {name: "Elna Ressner", nameID: 3, program: "MMA", programID: 3, picID: 3},
        {name: "Mikaela Rasmusson", nameID: 4, program: "WDU", programID: 4, picID: 4},
        {name: "Johannes Dyk Strömberg", nameID: 5, program: "WDU", programID: 5, picID: 5}
    ];

    creatersArray.forEach((element) => {
        let createrPic = document.createElement("div");
        createrPic.id = `creater-pic-${element.picID}`;
        creatersContainer.appendChild(createrPic);

        let createrName = document.createElement("p");
        createrName.id = `creater-name-${element.nameID}`;
        createrName.textContent = `${element.name}`;
        creatersContainer.appendChild(createrName);

        let createrProgram = document.createElement("p");
        createrProgram.id = `creater-program-${element.programID}`;
        createrProgram.textContent = `${element.program}`;
        creatersContainer.appendChild(createrProgram);
    });

    let textContainer = document.createElement("div");
    textContainer.id = "popup-text-container-aboutus";
    popupContentContainer2.appendChild(textContainer);

    let aboutUsText = document.createElement("p");
    aboutUsText.id = "popup-text";
    aboutUsText.innerHTML = 
                            `Vi är en blandad grupp av studenter från Malmö universitet. Vi studerar medieteknik programmen; Media Management & Webbdesign och utveckling. Under detta crossmedia projekt har vi kombinerat våra kompetenser som vi har samlat på oss under de olika utbildningarna som våra program innehåller. <br><br>
                            Tillsammans har vi kokat ihop spelprojektet The Glitch som är en spelupplevelse med både digitala och analoga inslag. Vi har försökt få in så många delar som möjligt som representerar våra respektive program: berättande, olika medieformer (bild, ljud, video), programmering, design och marknadsföring. <br><br>
                            Syftet med kursen crossmedia är att vi studenter ska testa våra vingar genom att skapa ett levande projekt som innehåller stora delar av det vi har fått lära oss från tidigare kurser, samt att få känna på lite hur liknande projekt kan fungera i det riktiga arbetslivet. <br><br>
                            Målet med The Glitch är att sprida spelglädje genom ett spännande, mystiskt och klurigt spel. Vi vill också höja en röst för kvinnor inom teknik som allt för ofta hamnar i skymundan i en mansdominerad bransch. <br><br>
                            Om du spelar vårt spel så hoppas vi att du har fått/får känna den känsla som vi vill sprida. Främst så hoppas vi att du har lyckats ta dig igenom alla uppdrag och att du/ni lyckas lösa systemfel 22884.
    `;
    textContainer.appendChild(aboutUsText);

    let closePopupButtonContainerAboutUs = document.createElement("div");
    closePopupButtonContainerAboutUs.id = "close-popup-button-container-rules";
    aboutUsPopupContainer.append(closePopupButtonContainerAboutUs);
    let closePopupButton4 = document.createElement("button");
    closePopupButton4.id = "close-popup-button";
    closePopupButton4.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
        <path d="M20.1149 18L29.5649 8.56503C29.8474 8.28258 30.006 7.89949 30.006 7.50003C30.006 7.10058 29.8474 6.71749 29.5649 6.43503C29.2825 6.15258 28.8994 5.9939 28.4999 5.9939C28.1005 5.9939 27.7174 6.15258 27.4349 6.43503L17.9999 15.885L8.56491 6.43503C8.28245 6.15258 7.89936 5.9939 7.49991 5.9939C7.10046 5.9939 6.71736 6.15258 6.43491 6.43503C6.15245 6.71749 5.99377 7.10058 5.99377 7.50003C5.99377 7.89949 6.15245 8.28258 6.43491 8.56503L15.8849 18L6.43491 27.435C6.29432 27.5745 6.18272 27.7404 6.10657 27.9232C6.03042 28.106 5.99121 28.302 5.99121 28.5C5.99121 28.6981 6.03042 28.8941 6.10657 29.0769C6.18272 29.2597 6.29432 29.4256 6.43491 29.565C6.57435 29.7056 6.74025 29.8172 6.92304 29.8934C7.10583 29.9695 7.30189 30.0087 7.49991 30.0087C7.69793 30.0087 7.89398 29.9695 8.07677 29.8934C8.25956 29.8172 8.42546 29.7056 8.56491 29.565L17.9999 20.115L27.4349 29.565C27.5744 29.7056 27.7403 29.8172 27.923 29.8934C28.1058 29.9695 28.3019 30.0087 28.4999 30.0087C28.6979 30.0087 28.894 29.9695 29.0768 29.8934C29.2596 29.8172 29.4255 29.7056 29.5649 29.565C29.7055 29.4256 29.8171 29.2597 29.8932 29.0769C29.9694 28.8941 30.0086 28.6981 30.0086 28.5C30.0086 28.302 29.9694 28.106 29.8932 27.9232C29.8171 27.7404 29.7055 27.5745 29.5649 27.435L20.1149 18Z" fill="white"/>
    </svg>
    `;

    closePopupButton4.addEventListener("click", () => {
        aboutUsPopupContainer.classList.remove("visible");
        aboutUsPopupContainer.classList.add("hidden");
        aboutUsPopupContainer.remove();
    });

    closePopupButtonContainerAboutUs.append(closePopupButton4);
}