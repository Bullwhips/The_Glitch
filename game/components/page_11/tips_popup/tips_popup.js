function renderTipsPopup(wrapper) {
    let tipsPopupContainer = document.createElement("div")
    tipsPopupContainer.id = "tipsPopupContainer"
    tipsPopupContainer.classList.remove("hidden")
    tipsPopupContainer.classList.add("visable")
    wrapper.append(tipsPopupContainer)

    let xTips = document.createElement("div")
    xTips.id = "xTips"
    xTips.textContent = "x"
    tipsPopupContainer.append(xTips)

    xTips.addEventListener("click", () => {
        tipsPopupContainer.classList.remove("visible");
        tipsPopupContainer.classList.add("hidden");
        tipsPopupContainer.remove();
    });
}