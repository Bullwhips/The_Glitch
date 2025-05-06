
  // TYPEWRITER
  function startTypewriter({
    text,
    elementId,
    speed = 80,
    initialDelay = 0,
    onComplete = null
  }) {
    let index = 0;
    const typewriter = document.getElementById(elementId);
    let cursorVisible = true;
    let blinkInterval;
  
    function type() {
      if (index < text.length) {
        const currentChar = text[index];
        const visibleText = text.slice(0, index + 1).replace(/\n/g, "<br>");
        typewriter.innerHTML = visibleText + '<span class="cursor">|</span>';
  
        index++;
        let delay = currentChar === '\n' ? 800 : speed;
        setTimeout(type, delay);
      } else {
        startCursorBlinking();
        if (onComplete) onComplete();
      }
    }
  
    function startCursorBlinking() {
      blinkInterval = setInterval(() => {
        const cursor = document.querySelector(".cursor");
        if (cursor) {
          cursor.style.visibility = cursorVisible ? "hidden" : "visible";
          cursorVisible = !cursorVisible;
        }
      }, 500);
    }
  
    setTimeout(() => {
      type();
    }, initialDelay);
  }
  
  // Example usage:
  startTypewriter({
    text: "Systemfel 224488, Jag behöver dig!\nLössningen finns i allt, håll koll!",
    elementId: "typewriter",
    speed: 80,
    initialDelay: 7000
  });
  
  // Blinking dots (remains unchanged)
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
    question: "När var Grace Hopper född?",
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
        answer: "Januari 1, 1999",
        correct: false
      },
      {
        answer: "Februari 29, 1888",
        correct: true
      }
    ]
  },
  {
    question: "Vilka jobb hade Grace Hopper?",
    multipleChoise: true,
    answers: 
    [
      {
        answer: "Amerikanska flottan",
        correct: true
      },
      {
        answer: "Pilot",
        correct: false
      },
      {
        answer: "Lärare",
        correct: false
      },
      {
        answer: "Dataprogrammerare",
        correct: true
      }
    ]
  },
  {
    question: "Hur påverkade Grace världen?",
    multipleChoise: false,
    answers: 
    [
      {
        answer: "Hon var med i skapandet av den första mobiltelefonen",
        correct: false
      },
      {
        answer: "Hon var den första kvinnliga programmeraren som också var lärare",
        correct: false
      },
      {
        answer: "Hon var pilot under andra världskriget",
        correct: false
      },
      {
        answer: "Hon var den första som utarbetade teorin om maskinoberoende programmeringsspråk",
        correct: true
      }
    ]
  },
  {
    question: "Vad gjorde Grace med familjens väckarklockor när hon var sju år?",
    multipleChoise: false,
    answers: 
    [
      {
        answer: "Hon kastade ner dem från fönstret för att förstöra dem",
        correct: false
      },
      {
        answer: "Hon tog isär dem för att ta reda på hur de fungerade",
        correct: true
      },
      {
        answer: "Hon gömde dem för att hon hatade ljudet av dem",
        correct: false
      },
      {
        answer: "Hon sålde dem för att tjäna pengar",
        correct: false
      }
    ]
  },
  {
    question: "Vilket av dessa är ett av Grace Hoppers citat?",
    multipleChoise: false,
    answers: 
    [
      {
        answer: "Ett fartyg i hamn är säkert, men det är inte vad fartyg är byggda för",
        correct: true
      },
      {
        answer: "Var alltid glad",
        correct: false
      },
      {
        answer: "Ju hårdare konflikten är, desto större triumf",
        correct: false
      },
      {
        answer: "Livet i sig är den mest underbara sagan",
        correct: false
      }
    ]
  },
  {
    question: "Uppfann Grace Hopper datorn?",
    multipleChoise: false,
    answers: 
    [
      {
        answer: "Ja",
        correct: false
      },
      {
        answer: "Nej",
        correct: false
      },
      {
        answer: "Hon var involverad i skapandet av datorn",
        correct: true
      },
      {
        answer: "",
        correct: false
      }
    ]
  },
  {
    question: "Grace Hopper krediteras för att mynta vilken datorterm",
    multipleChoise: false,
    answers: 
    [
      {
        answer: "Bug och de-bug, relaterat till datorfel",
        correct: true
      },
      {
        answer: "Binary Code, en serie av 1:or och 0:or:",
        correct: false
      },
      {
        answer: "Gamer, en person som spelar datorspel",
        correct: false
      },
      {
        answer: "Ping, överföring (i tid) av data ",
        correct: false
      }
    ]
  }

]

