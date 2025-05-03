function renderAboutUsPopup (wrapper) {

    let aboutUsPopupContainer = document.createElement("div");
    aboutUsPopupContainer.id = "popup-container";
    aboutUsPopupContainer.classList.remove("hidden");
    aboutUsPopupContainer.classList.add("visible");
    wrapper.appendChild(aboutUsPopupContainer);

    let headTextAboutUs = document.createElement("h2");
    headTextAboutUs.id = "head-text-popup";
    headTextAboutUs.textContent = "OM OSS & KONTAKT";
    aboutUsPopupContainer.appendChild(headTextAboutUs);

    let popupContentContainer2 = document.createElement("div");
    popupContentContainer2.id = "popup-content-container";
    aboutUsPopupContainer.appendChild(popupContentContainer2);

    let contactHeadline = document.createElement("h3");
    contactHeadline.id = "popup-text-headlines";
    contactHeadline.textContent = "☎ KONTAKTA OSS";
    popupContentContainer2.appendChild(contactHeadline);

    let aboutUsHeadline = document.createElement("h3");
    aboutUsHeadline.id = "popup-text-headlines";
    aboutUsHeadline.textContent = "OM OSS- VILKA ÄR VI BAKOM SPELET?"
    popupContentContainer2.appendChild(aboutUsHeadline);

    let creatersContainer = document.createElement("div");
    creatersContainer.id = "creaters-container";
    popupContentContainer2.appendChild(creatersContainer);

    let creatersArray = [
        {name: "Hedda Åberg", program: "MMA"},
        {name: "Amir Hamed", program: "MMA"},
        {name: "Elna Ressner", program: "MMA"},
        {name: }
    ]

}