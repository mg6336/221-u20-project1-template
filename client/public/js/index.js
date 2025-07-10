function gotolocation(path) {
  window.locationhref = path;
}

function checkKeyPress(e) {
  if (e.keyCode == 32) {
      e.preventDefault();
    goToLocation('/feed');
  }
}
window.onload = function() {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  document.body.addEventListener("keyup", checkKeyPress);
  const clickTarget = document.getElementById("fade_text");
  if(clickTarget) {
    clickTarget.style.cursor = "pointer";
    clickTarget.addEventListener("click" , () => {
      goToLocation("/feed");
    });
  }
};

