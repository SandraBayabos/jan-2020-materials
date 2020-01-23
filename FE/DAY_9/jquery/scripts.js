$("#header").click(function() {
  $("#header").css({ "background-color": "red" });
});

//vs

const header = document.getElementById("header");

header.addEventListener("click", () => {
  header.style.backgroundColor = "red";
});

// Animation

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

const secondPara = document.getElementById("second-para");
secondPara.addEventListener("mouseover", () => {
  secondPara.style.fontSize = "1.5rem";
});
secondPara.addEventListener("mouseleave", () => {
  secondPara.style.fontSize = "1rem";
});
