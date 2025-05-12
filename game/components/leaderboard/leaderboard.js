function renderLeaderboard(wrapper) {
    wrapper.innerHTML = ""

    renderHeader(wrapper);
    

    // let pageContainer = document.createElement("div");
    // pageContainer.id = "page-container";
    // wrapper.append(pageContainer);

    let opacityBackground = document.createElement("div");
    opacityBackground.classList.add("noScroll");
    opacityBackground.id = "opacityBackground";
    wrapper.append(opacityBackground);

    let backDropLeader = document.createElement("div");
    backDropLeader.id = "backDropLeader";
    opacityBackground.append(backDropLeader);

    let textContainerLeader = document.createElement("div");
    textContainerLeader.id = "textContainerLeader";
    backDropLeader.append(textContainerLeader);

    let leaderText = document.createElement("h2")
    leaderText.id = "leaderText"
    leaderText.textContent= "LEADERBOARD"
    textContainerLeader.append(leaderText)

    let explainText = document.createElement("p")
    explainText.id = "explainText"
    explainText.textContent = "Tiden representerar tid kvar när spelet klarades."
    textContainerLeader.append(explainText)


    let groupList = document.createElement("ol");
    groupList.id = "groupList";
    textContainerLeader.append(groupList); // append group list to DOM

    fetchAllGroups();

    async function fetchAllGroups() {
        const response = await fetch("/api/grupper");
        if (response.ok) {
            const groups = await response.json();
            
            function timeToSeconds(timeStr) {
                const [hours, minutes, seconds] = timeStr.split(":").map(Number);
                return (hours * 3600) + (minutes * 60) + seconds;
            }
    
            const sortedGroups = groups
                .filter(g => g.time && g.time.includes(":"))
                .sort((a, b) => timeToSeconds(b.time) - timeToSeconds(a.time)); // descending
    
            sortedGroups.forEach(insertGroup);
        
        }
    }

    function insertGroup(grupp) {
        const li = document.createElement("li");
        li.innerHTML = `${grupp.name} ${grupp.time || ""}`;
        groupList.appendChild(li);
    }
}