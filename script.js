// Create floating hearts on every page
function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = ["❤️", "💖", "💕", "💗", "✨"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 25 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 700);


// Funny moving button
function moveButton() {
  const button = document.querySelector(".no-btn");
  const message = document.querySelector("#funnyMessage");

  if (!button) return;

  const messages = [
    "Nice try 😜",
    "You cannot escape the surprise!",
    "The surprise is waiting for you ❤️",
    "Please choose the correct answer 😄"
  ];

  button.style.position = "absolute";
  button.style.left = Math.random() * 60 + "%";
  button.style.top = Math.random() * 50 + "px";

  message.textContent =
    messages[Math.floor(Math.random() * messages.length)];
}


// Typing effect on the final page
const typingText = document.querySelector("#typingText");

if (typingText) {
  const text = "You make my world brighter every day! 💕";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 80);
    }
  }

  typeText();
  celebrate();
}


// Confetti celebration
function celebrate() {
  const container = document.querySelector("#confetti-container");

  if (!container) return;

  const colors = [
    "#ff4d8d",
    "#ffe16b",
    "#ffffff",
    "#58e6ff",
    "#a7ff83"
  ];

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}