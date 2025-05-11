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

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    backDropLeader.append(textContainer);

    let headerText = document.createElement("h2")
    headerText.id = "headerText"
    headerText.textContent= "LEADERBOARD"
    textContainer.append(headerText)


    let groupList = document.createElement("ol");
    groupList.id = "groupList";
    textContainer.append(groupList); // append group list to DOM

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