"use strict"

function renderHeader (wrapper) {
    let headerContainer = document.createElement("div");
    headerContainer.id = "header-container";
    wrapper.append(headerContainer);

    let logo = document.createElement("div");
    logo.id = "logo";
    headerContainer.append(logo);

    let timerDisplay = document.createElement("p");
    timerDisplay.id = "timerDisplay";
    headerContainer.append(timerDisplay)
    startTimer()
}