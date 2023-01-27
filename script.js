const minimizeButton = document.getElementById("minimize-button");
const sidebar = document.getElementById("sidebar");

minimizeButton.addEventListener("click", function(){
  sidebar.classList.toggle("minimize");
  if(sidebar.classList.contains("minimize")){
    minimizeButton.innerHTML = "+";
  }else{
    minimizeButton.innerHTML = "-";
  }
});

  