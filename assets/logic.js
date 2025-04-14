  const text = "Systemfel 224488, Jag behöver dig!\n Lössningen finns i allt, håll koll!";
  const speed = 80;
  let index = 0;
  const typewriter = document.getElementById("typewriter");
  let cursorVisible = true;
  let blinkInterval;

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

  const dots = document.getElementById('dots');
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 4;
    dots.textContent = '.'.repeat(count);
  }, 500);

  // document.getElementById('gruppForm').addEventListener('submit', function (e) {
  //   e.preventDefault(); // prevent page reload
  
  //   const input = document.getElementById('gruppInput').value;
  
  //   fetch('./grupper.json', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ message: input })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //     // optionally clear the input or show a message
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // });