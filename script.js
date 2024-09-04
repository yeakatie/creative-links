console.log("Hello World, Page Loaded");

const countdownElement = document.querySelector(".countdown-timer");
const countdown = new Date("2024-12-31T23:59:59").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdown - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "Countdown finished!";
  }
};

const countdownInterval = setInterval(updateCountdown, 1000);

// function getRandomEmoji() {
//   var emojis = [
//     "❤️",
//     "😍",
//     "💖",
//     "😊",
//     "🥰",
//     "🫶",
//     "💜",
//     "💛",
//     "🖤",
//     "💚",
//     "🧡",
//     "😻",
//     "🤍",
//     "🩷",
//     "🩶",
//     "🩵",
//     "💙",
//     "😎",
//     "♥",
//     "♡",
//     "❤",
//   ]; // Add more emojis as needed
//   var randomIndex = Math.floor(Math.random() * emojis.length);
//   return emojis[randomIndex];
// }

// Set a random emoji on page load
// document.getElementById("random-emoji").innerText = getRandomEmoji();

// copyright-year should always be the current year i.e. 2023

// const currentYear = new Date().getFullYear();
// document.getElementById("copyright-year").innerHTML = currentYear;
