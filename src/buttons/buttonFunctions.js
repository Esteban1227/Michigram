import { menuMobilContainer,btnMenuMobil, btnMenuMobilClose, randomMichisSection, favoriteMichisSection, containerCounter, categoryMichiSection } from "../utils/nodos.js";
import { smoothscroll } from "../utils/animationScrollTop.js";
import { homeBtn, favoriteBtn,iconLogo } from "../utils/nodos.js"; 
import { arrayMichiFav, saveFavoriteMichi } from "../michigram-service/loadFavoriteMichis/loadFavoriteMichis.service.js";
import { getMoreRandomMichis } from "../michigram-service/loadRandomMichis/loadRandomMichis.service.js";
import { getMoreMichisCategory, loadCategory } from "../michigram-service/loadCategoryMichis/loadCategoryMichis.service.js";


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
        }, 300);
    }

}
btnMenuMobil.addEventListener("click", openMenu)
document.body.addEventListener("click", e => closeMenu(e));
document.body.addEventListener("keyup", e => {
    if(e.keyCode === 27){
        closeMenu(e)
    }
});
//


//navigator
//fav
export function favoritePage() {
    smoothscroll()
    randomMichisSection.classList.add("inactive")
    favoriteMichisSection.classList.remove("inactive")
    randomMichisSection.classList.remove("smoothTopToBottom")
    categoryMichiSection.classList.add("inactive")
    window.removeEventListener("scroll", getMoreRandomMichis)
}
favoriteBtn.forEach(btn =>{
    btn.addEventListener("click", e =>{
        e.preventDefault()
        location.hash ="favorite"
        smoothscroll()
        closeMenu(e)
    })
})
//

//home
export function homePage() {
    smoothscroll()
    randomMichisSection.classList.remove("inactive")
    favoriteMichisSection.classList.add("inactive")
    categoryMichiSection.classList.add("inactive")
    window.addEventListener("scroll", getMoreRandomMichis, false)
}
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
    smoothscroll()
    closeMenu(e)
})
//

//category
export function categoryPage(){
    smoothscroll()
    randomMichisSection.classList.add("inactive")
    favoriteMichisSection.classList.add("inactive")
    categoryMichiSection.classList.remove("inactive")
    randomMichisSection.classList.remove("smoothTopToBottom")
    window.removeEventListener("scroll", getMoreRandomMichis)
    setTimeout(() => {
        window.addEventListener("scroll", getMoreMichisCategory)
    }, 1500);
}

/* const searchBtn = document.getElementById("search")
searchBtn.addEventListener("click", () =>{
    location.hash = "#category="
}) */



//Btn Save Michi Favorite

export function favoriteButton(e, michi){
    const buttonSaveFavorite = e.target
    const arrayMichiFavImg = []
    arrayMichiFav.forEach(michiFav =>{
        arrayMichiFavImg.push(michiFav.image_id)
    })
    if(arrayMichiFavImg.includes(michi.id)){
        buttonSaveFavorite.src = "./assets/image/fluent_save-copy-24-filled.svg"
    }else if(buttonSaveFavorite.attributes.src.value === "./assets/image/fluent_save-copy-24-filled.svg"){
        buttonSaveFavorite.src = "./assets/image/fluent_save-copy-20-regular.svg"
    }else{
        buttonSaveFavorite.src = "./assets/image/fluent_save-copy-24-filled.svg"
        saveFavoriteMichi(michi.id)
        containerCounter.forEach(item =>{
            item.classList.add("hardMoveRotate")
            setTimeout(() => {
                item.classList.remove("hardMoveRotate")
            }, 1500);
        })
    }
}

//btn like michi
export function likeButton(e){
    const buttonLikeMichi = e.target
    if(buttonLikeMichi.attributes.src.value === "./assets/image/heartLikedVector.svg"){
        buttonLikeMichi.src = "./assets/image/heartLikeVector.svg"
    }else{
        buttonLikeMichi.src = "./assets/image/heartLikedVector.svg"
    }
}
