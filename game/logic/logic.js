
  // TYPEWRITER
  const text = "Systemfel 22884, Jag behöver dig!\n Lösningen finns i allt, håll koll!";
  const speed = 80;
  let index = 0;
  const typewriter = document.getElementById("typewriter");
  let cursorVisible = true;
  let blinkInterval;

  // Function that types out the text dynamically
  function type() {
    if (index < text.length) {
      const currentChar = text[index];
      const visibleText = text.slice(0, index + 1).replace(/\n/g, "<br>");
      typewriter.innerHTML = visibleText + '<span class="cursor">|</span>';
  
      index++;
  
      let delay = speed;
      if (currentChar === '\n') {
        delay = 800;
      }
  
      setTimeout(type, delay);
    } else {
      startCursorBlinking();
    }
  }
  
  // Start typing after 5 seconds
  setTimeout(() => {
    type(); // Start typing for real
  }, 7000);


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




// Makes the dots blink
  const dots = document.getElementById('dots');
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 4;
    dots.textContent = '.'.repeat(count);
  }, 900);

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
          
          renderGameOver(document.querySelector("#wrapper"))
          
          // // Remove from localStorage
          // localStorage.removeItem("glitchTimerEnd");
          
          // const currentGroup = localStorage.getItem("glitchGroup");
          // if (currentGroup) {
          //   const grupp = JSON.parse(currentGroup);
            
          //   // Send DELETE request to server to remove the group
          //   fetch("/api/grupper", {
          //     method: "DELETE",
          //     headers: {"Content-Type": "application/json"},
          //     body: JSON.stringify({ id: grupp.id })
          //   });
        
          //   // Remove group from local storage
          //   localStorage.removeItem("glitchGroup");
          // }
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
      localStorage.removeItem("glitchTimerEnd");
      Timer(2 * 60 * 60, timerDisplay);
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

function inputShake(input) {
  input.classList.add("input-error");

  // Remove the class after animation completes to allow retriggering
  setTimeout(() => {
      input.classList.remove("input-error");
  }, 600); // match the longest animation duration
}

// QUIZ

const questions = 
[
  {
    question: "When was Grace Hopper born?",
    multipleChoise: false,
    answers: 
    [
      {
        answer: "December 9, 1906",
        correct: false
      },
      {
        answer: "December 9, 2020",
        correct: false
      },
      {
        answer: "January 1, 1999",
        correct: false
      },
      {
        answer: "February, 1888",
        correct: true
      }
    ]
  },
  {
    question: "LMAO",
    multipleChoise: true,
    answers: 
    [
      {
        answer: "text1",
        correct: false
      },
      {
        answer: "text2",
        correct: true
      },
      {
        answer: "text3",
        correct: true
      },
      {
        answer: "text4",
        correct: false
      }
    ]
  }

]

