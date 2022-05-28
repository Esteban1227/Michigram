import { navigatorSpa } from "./navigator.js";
import { loadRandomMichis, getMoreMichis } from "./michigram-service/loadRandomMichis/loadRandomMichis.service.js";
import { loadFavoriteMichis } from "./michigram-service/loadFavoriteMichis/loadFavoriteMichis.service.js";
import "./assets/sass/styles.scss"


window.addEventListener("DOMContentLoaded", navigatorSpa, false)
window.addEventListener("hashchange", navigatorSpa, false)
window.addEventListener("scroll", getMoreMichis, false)
location.hash = ""

loadRandomMichis()
loadFavoriteMichis()