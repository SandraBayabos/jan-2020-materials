// const header = document.getElementById("header");

// header.addEventListener("click", () => {
//   header.style.backgroundColor = "red";
// });

$("#header").click(function() {
  $("#header").css({ "background-color": "red" });
});

//vs

// Animation

// const paragraph = document.querySelector("p");
// let opacity = 1;

// function fadeOut(element) {
//   element.style.opacity = opacity;
//   if (element.style.opacity > 0) {
//     setTimeout(function() {
//       opacity = opacity - 0.1;
//       fadeOut(element);
//     }, 100);
//   }
// }

// paragraph.addEventListener("click", function(event) {
//   fadeOut(event.target);
// });

// clicks and fadeout
$("p").click(function() {
  $(this).fadeOut(1000);
});

// other examples

$("#second-para").mouseenter(function() {
  $(this)
    .css({ "font-size": "1.5rem" })
    .mouseleave(function() {
      $(this).css({ "font-size": "1rem" });
    });
});

// const secondPara = document.getElementById("second-para");

// secondPara.addEventListener("mouseover", () => {
//   secondPara.style.fontSize = "1.5rem";
// });

// secondPara.addEventListener("mouseleave", () => {
//   secondPara.style.fontSize = "1rem";
// });
