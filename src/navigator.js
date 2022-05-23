import { smoothscroll } from "./utils.js";
import { homeBtn, favoriteBtn,iconLogo } from "./nodos.js";
import { favoritePage, homePage, closeMenu } from "./buttonFunctions.js";

export function navigatorSpa(){
    if(location.hash.startsWith("#favorite")){
        favoritePage()
    }else if(location.hash.startsWith("#home")){
        homePage()
    }else{
        //Coming soon
        /* notPage() */
    }
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

