const groupList = document.querySelector("#group_list")

function insertGroup(grupp){
  const li = document.createElement("li")

  li.innerHTML=`
   ${grupp.name} ${grupp.time}
  `

  groupList.appendChild(li)
}

async function fetchAllGroups(params) {
  const response = await fetch("/api/grupper")
  

  if (response.ok){
    const groups = await response.json()
    groups.forEach(insertGroup)
    
  }
}

fetchAllGroups()
