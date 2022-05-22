import { navigatorSpa } from "./navigator.js";
import { closeMenu } from "./buttonFunctions.js";
import { loadFavoriteMichis, loadRandomMichis } from "./michigram.service.js";
import "./sass/styles.scss"

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