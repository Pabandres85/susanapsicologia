function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";

  // Hacer scroll al inicio cuando se abre el chat
  if (chatBox.style.display === "block") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function responder(pregunta) {
  const chat = document.getElementById("chatMessages");
  const respuesta = document.createElement("div");
  respuesta.classList.add("user");
  respuesta.innerText = pregunta;
  chat.appendChild(respuesta);

  const bot = document.createElement("div");
  bot.classList.add("bot");

  if (pregunta.includes("agendar")) {
    bot.innerHTML = `
      Puedes agendar una cita escribiendo a: 
      <a href="mailto:susana.hurtado.psi@gmail.com" target="_blank">susana.hurtado.psi@gmail.com</a> 
      o directamente por 
      <a href="https://wa.me/573136456560" target="_blank">WhatsApp aquí 📲</a>`;
  } else if (pregunta.includes("servicios")) {
    bot.innerHTML = `
      Ofrecemos terapia individual, de pareja, consultas online y talleres de psicoeducación 🧠✨<br>
      <a href="servicios.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; color: #8b5cf6; font-weight: 600; text-decoration: none;">
        Ver más sobre nuestros servicios →
      </a>`;
  } else if (pregunta.includes("horarios")) {
    bot.innerHTML = "Atendemos de lunes a viernes de 8:00 a.m. a 6:00 p.m. ¡Agenda tu espacio! 🕒";
  } else {
    bot.innerHTML = "Lo siento, no tengo una respuesta para eso aún.";
  }

  chat.appendChild(bot);
  chat.scrollTop = chat.scrollHeight;
}

// Cerrar el chatbot al hacer clic fuera
document.addEventListener("click", function (event) {
  const chatBox = document.getElementById("chatBox");
  const toggleButton = document.querySelector(".chatbot-toggle");

  if (
    chatBox &&
    chatBox.style.display === "block" &&
    !chatBox.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    chatBox.style.display = "none";
  }
});

document.getElementById('chatbot-icon').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
