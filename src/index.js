import { navigatorSpa } from "./navigator.js";
import { closeMenu } from "./buttons/buttonFunctions.js";
import { loadRandomMichis } from "./michigram-service/loadRandomMichis/loadRandomMichis.service.js";
import { loadFavoriteMichis } from "./michigram-service/loadFavoriteMichis/loadFavoriteMichis.service.js";
import "./assets/sass/styles.scss"


window.addEventListener("DOMContentLoaded", navigatorSpa, false)
window.addEventListener("hashchange", navigatorSpa, false)
location.hash = "#home"
document.body.addEventListener("click", e => closeMenu(e));
document.body.addEventListener("keyup", e => {
    if(e.keyCode === 27){
        closeMenu(e)
    }
});

loadRandomMichis()
loadFavoriteMichis()