import { navigatorSpa } from "./utils/navigator.js";
import { loadRandomMichis } from "./michigram-service/loadRandomMichis/loadRandomMichis.service.js";
import { loadFavoriteMichis } from "./michigram-service/loadFavoriteMichis/loadFavoriteMichis.service.js";
import { selectCategory } from "./michigram-service/loadCategoryMichis/loadCategoryMichis.service.js"
import "./assets/sass/styles.scss"


window.addEventListener("DOMContentLoaded", navigatorSpa, false)
window.addEventListener("hashchange", navigatorSpa, false)
location.hash = "#home"

loadRandomMichis()
loadFavoriteMichis()
selectCategory()