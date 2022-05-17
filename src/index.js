import { navigatorSpa } from "./navigator.js";

window.addEventListener("DOMContentLoaded", navigatorSpa, false)
window.addEventListener("hashchange", navigatorSpa, false)
location.hash = ""