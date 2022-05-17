import { smoothscroll } from "./utils.js";
import { homeBtn, favoriteBtn } from "./nodos.js";
import { loadFavoriteMichis, loadRandomMichis } from "./michigram.service.js";
import { favoritePage, homePage } from "./buttonFunctions.js";

export function navigatorSpa(){
    if(location.hash.startsWith("#favorite")){
        favoritePage()
    }else if(location.hash.startsWith("#Home")){
        homePage()
    }else{
        loadFavoriteMichis()
        loadRandomMichis()
    }
}

favoriteBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        location.hash ="favorite"
        smoothscroll()
    })
})

homeBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        location.hash ="Home"
        smoothscroll()
    })
})

