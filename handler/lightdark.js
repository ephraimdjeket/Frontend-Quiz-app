// Select elements
const lightDarkSwitch = document.querySelector(".purple-slider");
const mainHeadline = document.querySelector(".frontend-head");
const mainHeadlineQuiz = document.querySelector(".frontend-head-quiz");
const smallHeadline = document.querySelector(".small-text");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const subjectBoxes = document.querySelectorAll(".subject");
const h2Elements = document.querySelectorAll(".h2-title");
const subjectTitle = document.querySelector(".subjecth2");


export function lightDarkToggle() {
    let currentFlexMode = localStorage.getItem("theme") || "flex-end";
    
    if (currentFlexMode === "flex-end") {
        document.body.style.backgroundColor = "#313E51";
        lightDarkSwitch.style.justifyContent = "flex-end";
        mainHeadline.style.color = "#FFFF";
        mainHeadlineQuiz.style.color = "#FFFF";
        smallHeadline.style.color = "#ABC1E1";
        h2Elements.forEach((h2) => {
            h2.style.color = "#FFFF";
        });
        subjectBoxes.forEach((box) => {
            box.style.backgroundColor ="#3B4D66"
            
        })
        sunIcon.src = "./assets/images/icon-sun-light.svg";
        moonIcon.src = "./assets/images/icon-moon-light.svg";
        if (window.innerWidth > 1440) {
            document.body.style.backgroundImage = "url('./assets/images/pattern-background-desktop-dark.svg')";
        } else if (window.innerWidth <= 1440 && window.innerWidth > 768) {
            document.body.style.backgroundImage = "url('./assets/images/pattern-background-tablet-dark.svg')";
        } else {
            document.body.style.backgroundImage = "url('./assets/images/pattern-background-mobile-dark.svg')";
        }
    } else {
        document.body.style.backgroundColor = "#f4f6fa";
        lightDarkSwitch.style.justifyContent = "flex-start";
        mainHeadline.style.color = "#313e51";
        mainHeadlineQuiz.style.color = "#313e51";
        smallHeadline.style.color = "#626c7f";
        h2Elements.forEach((h2) => {
            h2.style.color = "#313E51";
        });
        subjectBoxes.forEach((box) => {
            box.style.backgroundColor ="#FFFF";

        })
        document.body.style.backgroundImage = "url('./assets/images/pattern-background-desktop-light.svg')";
        sunIcon.src = "./assets/images/icon-sun-dark.svg";
        moonIcon.src = "./assets/images/icon-moon-dark.svg";
        if (window.innerWidth > 1440) {
            document.body.style.backgroundImage = "url('./assets/images/pattern-background-desktop-light.svg')";
        } else if (window.innerWidth <= 1440 && window.innerWidth > 768) {
            document.body.style.backgroundImage = "url('./assets/images/pattern-background-tablet-light.svg')";
        } else {
            document.body.style.backgroundImage = "url('./assets/images/pattern-background-mobile-light.svg')";
        }
    }
}

lightDarkSwitch.addEventListener("click", function() {
    let currentFlexMode = localStorage.getItem("theme") || "flex-end";
    currentFlexMode = currentFlexMode === "flex-end" ? "flex-start" : "flex-end";
    
    localStorage.setItem("theme", currentFlexMode);

    lightDarkToggle();
});

window.addEventListener("resize", lightDarkToggle);
