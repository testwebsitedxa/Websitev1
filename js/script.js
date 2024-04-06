window.addEventListener("load", function(e) {
  var container = document.querySelector(".pricing-cards");
  var middle = container.children[Math.floor((container.children.length - 1) / 2)];
  container.scrollLeft = middle.offsetLeft +
    middle.offsetWidth / 2 - container.offsetWidth / 2;
    
    // Go to middle of pricing-cards div on page load

});


function myFunction() {
  var x = document.getElementById("mobile-nav");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function closeNav() {
  document.getElementById("mobile-nav").style.display = "none";
  
}
