
const form = document.querySelector("#gruppForm")

const gruppInput = document.querySelector("#gruppInput")
let gruppNamn

// function insertGroup(grupp){
//   const li = document.createElement("li")

//   li.innerHTML=`
//    ${grupp.name} ${grupp.time}
//   `

//   groupList.appendChild(li)
// }



// form.addEventListener("submit", async (event) => {
//   event.preventDefault()
  
//   gruppNamn = gruppInput.value
//   console.log(gruppNamn)
//   const grupp = {
//     name: gruppNamn
//   }

//   const request = new Request("/api/grupper", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(grupp)
//   })

//   const response = await fetch(request)

//   if (response.ok){
//     const grupp = await response.json()
    
//     localStorage.setItem("glitchGroup", JSON.stringify(grupp));
//     console.log("Saved group to localStorage:", grupp);
//   }

//   form.reset()
// })

async function fetchAllGroups(params) {
  const response = await fetch("/api/grupper")
  

  if (response.ok){
    const groups = await response.json()
    groups.forEach(insertGroup)
    
  }
}




