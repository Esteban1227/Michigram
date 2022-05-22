import { menuMobilContainer,btnMenuMobil, btnMenuMobilClose, randomMichisSection, favoriteMichisSection } from "./nodos.js";
//menu Mobile
export function openMenu(e){
    menuMobilContainer.classList.remove("inactive")
    btnMenuMobil.removeEventListener("click", openMenu)
    btnMenuMobil.addEventListener("click", closeMenu)
    btnMenuMobilClose.style.display = "block"
    btnMenuMobil.style.display = "none"
}
export function closeMenu(e){
    if(e.target.id === "btnMenuMobile" ||
    e.target.id === "menuMobilContainer"){
    return
    }else{
        menuMobilContainer.classList.add("inactive")
        btnMenuMobil.removeEventListener("click",closeMenu)
        btnMenuMobil.addEventListener("click", openMenu)
        btnMenuMobilClose.style.display = "none"
        btnMenuMobil.style.display = "block"
    }

}

//navigator
export function favoritePage() {
    randomMichisSection.classList.add("inactive")
    favoriteMichisSection.classList.remove("inactive")
    randomMichisSection.classList.remove("smoothTopToBottom")
}

export function homePage() {
    randomMichisSection.classList.remove("inactive")
    favoriteMichisSection.classList.add("inactive")
}
