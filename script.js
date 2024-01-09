console.log("Hello World, Page Loaded 🧚‍♂️✨👍");

function getRandomEmoji() {
  var emojis = [
    "❤️",
    "😍",
    "💖",
    "😊",
    "🥰",
    "🫶",
    "💜",
    "💛",
    "🖤",
    "💚",
    "🧡",
    "😻",
    "🤍",
    "🩷",
    "🩶",
    "🩵",
    "💙",
    "😎",
    "♥",
    "♡",
    "❤",
  ]; // Add more emojis as needed
  var randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Set a random emoji on page load
document.getElementById("random-emoji").innerText = getRandomEmoji();

// copyright-year should always be the current year i.e. 2023

const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").innerHTML = currentYear;
