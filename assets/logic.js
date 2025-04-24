
  // TYPEWRITER
  const text = "Systemfel 224488, Jag behöver dig!\n Lössningen finns i allt, håll koll!";
  const speed = 80;
  let index = 0;
  const typewriter = document.getElementById("typewriter");
  let cursorVisible = true;
  let blinkInterval;

  // Function that types out the text dynamically
  function type() {
    if (index <= text.length) {
      let visibleText = text.slice(0, index).replace(/\n/g, "<br>");
      typewriter.innerHTML = visibleText + '<span class="cursor">|</span>';
  
      let currentChar = text[index - 1]; // get the last character added
      index++;
  
      let delay = speed;
      if (currentChar === '\n') {
        delay = 800; // pause for 500ms on line break
      }
  
      setTimeout(type, delay);
    } else {
      startCursorBlinking();
    }
  }


// Function that makes the | blink
  function startCursorBlinking() {
    blinkInterval = setInterval(() => {
      const cursor = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.visibility = cursorVisible ? "hidden" : "visible";
        cursorVisible = !cursorVisible;
      }
    }, 500); // blink every 0.5s
  }

  type();


// Makes the dots blink
  const dots = document.getElementById('dots');
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 4;
    dots.textContent = '.'.repeat(count);
  }, 500);

  // /TYPEWRITER

// TIMER
  function Timer(durationInSeconds, displayElement, shouldSave = true) {
    let timer = durationInSeconds;
  
    if (shouldSave) {
      const endTime = Date.now() + durationInSeconds * 1000;
      localStorage.setItem("glitchTimerEnd", endTime);
    }
  
    const interval = setInterval(() => {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;
  
      displayElement.textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
        if (--timer < 0) {
          clearInterval(interval);
          displayElement.textContent = "Tiden är slut!";
          
          // Remove from localStorage
          localStorage.removeItem("glitchTimerEnd");
          
          const currentGroup = localStorage.getItem("glitchGroup");
          if (currentGroup) {
            const grupp = JSON.parse(currentGroup);
            
            // Send DELETE request to server to remove the group
            fetch("/api/grupper", {
              method: "DELETE",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({ id: grupp.id })
            });
        
            // Remove group from local storage
            localStorage.removeItem("glitchGroup");
          }
        }
        
    }, 1000);
  }
  
  function startTimer() {
    const timerDisplay = document.querySelector("#timerDisplay");
    const savedEndTime = localStorage.getItem("glitchTimerEnd");
  
  if (savedEndTime) {
    const remaining = Math.floor((savedEndTime - Date.now()) / 1000);
    if (remaining > 0) {
      Timer(remaining, timerDisplay, false);
    } else {
      // Timer expired while user was away
      timerDisplay.textContent = "Tiden är slut!";
      localStorage.removeItem("glitchTimerEnd");
    }
  } else {
    
    Timer(2 * 60 * 60, timerDisplay);
  }
  }

// /Timer

const currentGroup = JSON.parse(localStorage.getItem("glitchGroup"));
if (currentGroup) {
  console.log("Welcome back,", currentGroup.name);

}



