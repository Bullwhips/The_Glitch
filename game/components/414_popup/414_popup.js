function render414Popup(wrapper) {
    wrapper.innerHTML = "";

 

    let fouronefourContainer = document.createElement("div");
    fouronefourContainer.id = "fouronefour";
    fouronefourContainer.classList.add("noScroll")
    wrapper.append(fouronefourContainer);

    let x414 = document.createElement("div")
    x414.id = "x414"
    x414.textContent = "x"
    fouronefourContainer.append(x414)
    x414.addEventListener("click", () => {renderPage9(wrapper)})
}