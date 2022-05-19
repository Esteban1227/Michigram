import { navigatorSpa } from "./navigator.js";
import "./sass/styles.scss"

window.addEventListener("DOMContentLoaded", navigatorSpa, false)
window.addEventListener("hashchange", navigatorSpa, false)
location.hash = ""