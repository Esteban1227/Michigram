import { openMenu } from "./buttonFunctions.js";

//section random Michis
export const randomMichisSection = document.getElementById("randomMichis");

//section favorites Michis
export const favoriteMichisSection = document.getElementById("favoriteMichis");

//menu Mobile
export const menuMobilContainer = document.getElementById("menuMobilContainer")
export const btnMenuMobil = document.getElementById("btnMenuMobile")
btnMenuMobil.addEventListener("click", openMenu)

//navigator
const homeBtnNodeList = document.querySelectorAll(".nav__right--iconHome")
export const homeBtn = [...homeBtnNodeList]

const favoriteBtnNodeList = document.querySelectorAll(".nav__right--iconFav")
export const favoriteBtn = [...favoriteBtnNodeList]