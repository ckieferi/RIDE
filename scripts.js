/* fade in the next section when scrolling */

function isElementInViewport(element) {
 var rect = element.getBoundingClientRect();
 return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
 rect.right <= (window.innerWidth || document.documentElement.clientWidth)
 );
}

var elements = document.querySelectorAll(".fade");
 
function callbackFunc() {
 for (var i = 0; i < elements.length; i++) {
  if (isElementInViewport(elements[i])) {
 elements[i].classList.add("visible");
}

 /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. 
  else { 
   elements[i].classList.remove("visible");
  }
   */
 }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

/* mobile menu slide from the left - does not currently work */
$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});

/* scroll button - does not currently work */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopButton").style.display = "block";
    } else {
        document.getElementById("goToTopButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
