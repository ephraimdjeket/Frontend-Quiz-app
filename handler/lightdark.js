export const lightDarkSwitch = document.querySelector(".purple-slider");


export function lightDarkToggle() {

    let currentJustifyContent = lightDarkSwitch.style.justifyContent;

    if(currentJustifyContent === "flex-end") {
        lightDarkSwitch.style.justifyContent = "flex-start";
    } else {
        lightDarkSwitch.style.justifyContent = "flex-end";
    }
}

