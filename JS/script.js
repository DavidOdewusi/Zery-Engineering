// const dropDownNav = document.querySelectorAll(".drop-down-nav");
// const dropDown = document.querySelector(".drop-down");

// dropDownNav[0].addEventListener("mouseover", function () {
//   dropDown.style.display = "flex";
//   dropDown.style.top = "11.5rem";
// });
// dropDownNav[0].addEventListener("mouseout", function () {
//   dropDown.style.display = "none";
//   dropDown.style.top = "10.5rem";
// });

// const header = document.querySelector("header");
// const slider = document.querySelectorAll(".header__foot-itm div");
// const headerFoot = document.querySelectorAll(".header__foot-itm");

// function heroSlider() {
//   setTimeout(() => {
//     header.style.backgroundImage = `url(../img/14-min.jpg)`;
//     slider[0].className = "#";
//     slider[1].className = "slider";
//     console.log("present");
//   }, 8000);
// }

// heroSlider();
// for (i = 0; i < slider.length; i++) {
//   setInterval(() => {
//     if (slider[i].className == "slider") {
//       slider[i].className = "#";
//       slider[i + 1].className = "slider";
//       console.log();
//     }
//   }, 8000);
// }

const slider = document.querySelectorAll(".sli-el");
const h1El = document.querySelector("#slider-head");
const pEl = document.querySelector("#slider-text");
const btnEl = document.querySelector("#slider-btn");

function sliderChange() {
  // 1. Check for element with the slider class
  // 2. When found, the slider class should be removed and added to the next element
  for (let i = 0; i < slider.length; i++) {
    let next = i + 1;
    setInterval(() => {
      if (slider[i].className.includes("slider")) {
        setTimeout(() => {
          slider[i].classList.remove("slider");
          slider[next].classList.add("slider");

          console.log(i + " has a slider class and " + next + " is next");
        }, 2000);
      }

      if (i === slider.length - 1) {
        next = 0;
      }
    }, 15000);

    console.log(next);
  }
}

sliderChange();
