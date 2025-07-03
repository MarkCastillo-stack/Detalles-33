const messages = [
  "Te amo muchooo mi bebita ❤️",
  "Gracias por estar en mi vida 🌟",
  "Muuuuaaaaaaa!😍",
  "Para mi princesita hermosa 💖",
  "¡Te Amo! 💘",
  "Que no haria por tí, vida mia 💕",
  "Eres la mejor ✨",
  "Muuuuaaaaaaa!😍",
  "TE EXTRAÑOO!!! 🪄",
  "Siempre pienso en ti 💭",
  "Eres el amor de mi vida💓"
];

function createTextBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'text-bubble';
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;
  bubble.style.left = left + 'vw';
  bubble.style.top = top + 'vh';

  document.getElementById('bubbles-text').appendChild(bubble);

  setTimeout(() => bubble.remove(), 8000);
}

setInterval(createTextBubble, 1000);
