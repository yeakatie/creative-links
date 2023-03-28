const minimizeButton = document.getElementById("minimize-button");
const topbar = document.getElementById("topbar");

minimizeButton.addEventListener("click", function () {
  topbar.classList.toggle("minimize");
  if (topbar.classList.contains("minimize")) {
    minimizeButton.innerHTML = "+";
  } else {
    minimizeButton.innerHTML = "-";
  }
});

document.getElementById("year").innerHTML = new Date().getFullYear();
