// Select elements
const lightDarkSwitch = document.querySelector(".purple-slider");
const mainHeadline = document.querySelector(".frontend-head");
const smallHeadline = document.querySelector(".small-text");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const subjectBoxes = document.querySelectorAll(".subject")


export function lightDarkToggle() {
    let currentFlexMode = localStorage.getItem("theme") || "flex-end";

    if (currentFlexMode === "flex-end") {
        document.body.style.backgroundColor = "#313E51";
        lightDarkSwitch.style.justifyContent = "flex-end";
        mainHeadline.style.color = "#FFFF";
        smallHeadline.style.color = "#ABC1E1";
        subjectBoxes.forEach((box) => {
            box.style.backgroundColor ="#3B4D66"

        })
        document.body.style.backgroundImage = "url('./assets/images/pattern-background-desktop-dark.svg')";
        sunIcon.src = "./assets/images/icon-sun-light.svg";
        moonIcon.src = "./assets/images/icon-moon-light.svg";
    } else {
        document.body.style.backgroundColor = "#f4f6fa";
        lightDarkSwitch.style.justifyContent = "flex-start";
        mainHeadline.style.color = "#313e51";
        smallHeadline.style.color = "#626c7f";
        subjectBoxes.forEach((box) => {
            box.style.backgroundColor ="#FFFF";

        })
        document.body.style.backgroundImage = "url('./assets/images/pattern-background-desktop-light.svg')";
        sunIcon.src = "./assets/images/icon-sun-dark.svg";
        moonIcon.src = "./assets/images/icon-moon-dark.svg";
    }
}

lightDarkSwitch.addEventListener("click", function() {
    let currentFlexMode = localStorage.getItem("theme") || "flex-end";
    currentFlexMode = currentFlexMode === "flex-end" ? "flex-start" : "flex-end";
    
    localStorage.setItem("theme", currentFlexMode);

    lightDarkToggle();
});

lightDarkToggle();
