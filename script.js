
// Sticky nav bar
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");
var navBarFix = document.getElementById("navbar_fix");
var contentElt = document.getElementsByTagName("footer");
var sticky = navBarFix.offsetTop;
console.log("navbar" + navBarFix.offsetTop);
console.log("page" + window.pageYOffset);

function stickyFunction() {
  if (window.pageYOffset >= sticky+10) {
    navbar.classList.add("sticky");
    navbar.classList.remove("sticky_hidden");
    navbar.classList.remove("d-none");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("sticky_hidden");
  }
}

stickyFunction(); //load start

// Open Curtain Menu 
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }