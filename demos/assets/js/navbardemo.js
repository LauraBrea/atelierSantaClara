var prevScrollpos = window.scrollY;
let nav = document.getElementById("navbardemo");
var isMobileVersion = document.getElementsByClassName('opendemo');

window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos ||  window.scrollY < 50 || isMobileVersion.length > 0) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-98px";
  }
  prevScrollpos = currentScrollPos;
}