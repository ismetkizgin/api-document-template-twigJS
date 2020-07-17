function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  var x = window.matchMedia("(max-width: 680px)")
  if (x.matches) {
    slideBar_close();
  }
}

function slideBar_open() {
  document.getElementById("mySidebar").className = "sidebar left-menu display-block";
}
function slideBar_close() {
  document.getElementById("mySidebar").className = "sidebar left-menu display-none";
}