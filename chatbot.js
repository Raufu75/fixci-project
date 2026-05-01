const chatBtn = document.getElementById("chat-btn");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

// Open / close chat
chatBtn.onclick = () => {
  chatBox.classList.toggle("open");
};

// Send message
function sendMessage() {
  const message = chatInput.value.trim();
  if (message === "") return;

  addMessage("You", message);
  chatInput.value = "";

  setTimeout(() => {
    botReply(message);
  }, 600);
}

// Add message to UI
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender === "You" ? "user-msg" : "bot-msg";
  msg.innerText = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Bot responses (simple demo AI)
function botReply(message) {
  let reply = "Sorry, I didn't understand that.";

  if (message.toLowerCase().includes("electric")) {
    reply = "You can find trusted electricians in the Services page.";
  } else if (message.toLowerCase().includes("plumb")) {
    reply = "Need a plumber? Go to Services and choose a verified provider.";
  } else if (message.toLowerCase().includes("price")) {
    reply = "Prices depend on the provider. You can compare options before booking.";
  } else if (message.toLowerCase().includes("book")) {
    reply = "To book a service, select a provider and click 'Book now'.";
  } else {
    reply = "Try asking about services like plumbing, electrician, or booking.";
  }

  addMessage("Bot", reply);
}
