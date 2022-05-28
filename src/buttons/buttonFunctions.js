import { menuMobilContainer,btnMenuMobil, btnMenuMobilClose, randomMichisSection, favoriteMichisSection } from "../nodos.js";
import { smoothscroll } from "../utils/animationScrollTop.js";
import { homeBtn, favoriteBtn,iconLogo } from "../nodos.js"; 

//menu Mobile
export function openMenu(e){
    menuMobilContainer.classList.remove("inactive")
    menuMobilContainer.classList.add("fadeInDown")
    menuMobilContainer.classList.remove("fadeInUp")
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
        menuMobilContainer.classList.remove("fadeInDown")
        menuMobilContainer.classList.add("fadeInUp")
        btnMenuMobil.removeEventListener("click",closeMenu)
        btnMenuMobil.addEventListener("click", openMenu)
        btnMenuMobilClose.style.display = "none"
        btnMenuMobil.style.display = "block"
        setTimeout(() => {
            menuMobilContainer.classList.add("inactive")
        }, 500);
    }

}

btnMenuMobil.addEventListener("click", openMenu)

//navigator
export function favoritePage() {
    smoothscroll()
    randomMichisSection.classList.add("inactive")
    favoriteMichisSection.classList.remove("inactive")
    randomMichisSection.classList.remove("smoothTopToBottom")
}
export function homePage() {
    smoothscroll()
    randomMichisSection.classList.remove("inactive")
    favoriteMichisSection.classList.add("inactive")
}

favoriteBtn.forEach(btn =>{
    btn.addEventListener("click", e =>{
        e.preventDefault()
        location.hash ="favorite"
        smoothscroll()
        closeMenu(e)
    })
})

homeBtn.forEach(btn =>{
    btn.addEventListener("click", e =>{
        e.preventDefault()
        location.hash ="home"
        smoothscroll()
        closeMenu(e)
    })
})

iconLogo.addEventListener("click", e =>{
    e.preventDefault()
    location.hash ="home"
    smoothscroll()
    closeMenu(e)
})

document.body.addEventListener("click", e => closeMenu(e));
document.body.addEventListener("keyup", e => {
    if(e.keyCode === 27){
        closeMenu(e)
    }
});
