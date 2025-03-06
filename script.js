// Particle Effects
particlesJS.load("particles-js", "particles.json", function () {
  console.log("Particles loaded!");
});

// Sound Effects
const hoverSound = document.getElementById("hover-sound");
const clickSound = document.getElementById("click-sound");

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Bot Status
const onlineStatus = document.getElementById("online-status");
const serverCount = document.getElementById("server-count");
const userCount = document.getElementById("user-count");

// Simulate fetching bot status (replace with actual API calls)
function fetchBotStatus() {
  setTimeout(() => {
    onlineStatus.textContent = "Online 🟢";
    serverCount.textContent = "125";
    userCount.textContent = "100,000+";
  }, 1000);
}

fetchBotStatus();

// Live Chat Widget
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

// Toggle chat window
chatToggle.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
});

// Send message
chatSend.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "user");
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
  }
});

// Send message on pressing Enter
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    chatSend.click();
  }
});
