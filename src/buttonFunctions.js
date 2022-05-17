import { menuMobilContainer,btnMenuMobil, randomMichisSection, favoriteMichisSection } from "./nodos.js";
//menu Mobile
export function openMenu(){
    menuMobilContainer.classList.remove("inactive")
    btnMenuMobil.removeEventListener("click", openMenu)
    btnMenuMobil.addEventListener("click", closeMenu)
}
export function closeMenu(){
    menuMobilContainer.classList.add("inactive")
    btnMenuMobil.removeEventListener("click",closeMenu)
    btnMenuMobil.addEventListener("click", openMenu)
}

//navigator
export function favoritePage() {
    randomMichisSection.classList.add("inactive")
    favoriteMichisSection.classList.remove("inactive")
}

export function homePage() {
    randomMichisSection.classList.remove("inactive")
    randomMichisSection.classList.remove("smoothTopToBottom")
    favoriteMichisSection.classList.add("inactive")
}
