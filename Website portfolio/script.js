
        let text = document.getElementById("text");
        let bird1 = document.getElementById("bird1");
        let bird2 = document.getElementById("bird2");
        let forest = document.getElementById("forest");
        let rocks = document.getElementById("rocks");
        let water = document.getElementById("water");

        window.addEventListener("scroll", function (){
          let value = window.scrollY;
          text.style.top = 80 + value * -0.5 + "inch";
          bird1.style.top = value * -1.5 + "inch";
          bird1.style.right = value * 0.1 + "px";
          bird2.style.top = value * -1.5 + "inch";
          bird2.style.right = value * 5 + "px";
        });
// js for skill section
const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", ()=>{
    arr.classList.add("active_arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});
clc.addEventListener("click", ()=>{
    arr.classList.remove("active_arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
});
// Js for skills section

/* scroll part js */

//Get the button:
scroll_top = document.getElementById("scroll-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* scroll part js end*/

