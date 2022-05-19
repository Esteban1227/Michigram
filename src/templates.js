import { favoriteMichisSection } from "./nodos.js";
import { getRandomInt } from "./utils.js";
import { deleteFavoriteMichi, saveFavoriteMichi } from "./michigram.service.js";
/* import { h } from "hyperscript" */
//Container Michis

//title "Tus Michis Favoritos:"
export function createTitle(){
    const divTitle = document.createElement("div")
    divTitle.classList.add("mainContainerFavorites__container-h2")
    const h2Title = document.createElement("h2")
    h2Title.textContent = "Tus Michis Favoritos:"
    divTitle.appendChild(h2Title)
    favoriteMichisSection.appendChild(divTitle)
}

//Cards
export function createCardMichis(michi,array,results){
            const article = document.createElement("article")
                article.classList.add("mainContainer__containerCard")
            const divInfoUser = document.createElement("div")
                divInfoUser.classList.add("mainContainer__containerInfoUser")
            const imgUser = document.createElement("img")
                imgUser.setAttribute("src",`${results[getRandomInt(1,20)].picture.thumbnail}`)
                imgUser.alt = "Icono del usuario"
                imgUser.classList.add("mainContainer__containerInfoUser--iconUser")
            const h3 = document.createElement("p")
                h3.textContent = (`${results[getRandomInt(1,20)].name.first}`)
                h3.classList.add("mainContainer__containerInfoUser--nameUser")
                divInfoUser.appendChild(imgUser)
                divInfoUser.appendChild(h3)
            const divImgUser = document.createElement("div")
                divImgUser.classList.add("mainContainer__containerImgUser")
            const imgPublic = document.createElement("img")
                /* imgPublic.dataset.src = `${michi.url}` */
                imgPublic.setAttribute("src",`${michi.url}`)
                imgPublic.setAttribute("loading","lazy")
                imgPublic.alt = "Foto de michi"
                imgPublic.classList.add("mainContainer__containerImgUser--imgMichi")
                /* registerImg(imgPublic) */
                divImgUser.appendChild(imgPublic)
            const divButtons = document.createElement("div")
                divButtons.classList.add("mainContainer__containerButtons")
            const imgLike = document.createElement("img")
                imgLike.setAttribute("src","../src/assets/heartLikeVector.svg")
                imgLike.classList.add("mainContainer__containerButtons--iconLike", "iconSizeBig")
                imgLike.alt = "Icono para darle like a la foto del michi"
            const imgSave = document.createElement("img")
                imgSave.setAttribute("src","../src/assets/saveVector.svg")
                imgSave.classList.add("mainContainer__containerButtons--iconFav", "iconSizeBig")
                imgSave.alt = "Icono para guardar la foto del michi en favoritos"
                const containerCounterNodeList = document.querySelectorAll(".nav__right--containerCounter")
                const containerCounter = [...containerCounterNodeList]
                imgSave.addEventListener("click", () =>{
                    saveFavoriteMichi(michi.id)
                    containerCounter.forEach(item =>{
                        item.classList.add("hardMove")
                        setTimeout(() => {
                            item.classList.remove("hardMove")
                        }, 1000);
                    })
                })
                divButtons.appendChild(imgLike)
                divButtons.appendChild(imgSave)
                article.appendChild(divInfoUser)
                article.appendChild(divImgUser)
                article.appendChild(divButtons)
                array.push(article)
}

//Cards Favorites 
export function createCardFavoriteMichis(michi,array){
        const article = document.createElement("article")
                article.classList.add("mainContainer__containerCard",   "mainContainer__containerCards--cardFav")
                const divInfoUser = document.createElement("div")
                divInfoUser.classList.add("mainContainer__containerInfoUser", "mainContainer__infoUser--flex-end")
                const imgDeleteFav = document.createElement("img")
                imgDeleteFav.setAttribute("src","../src/assets/ant-design_delete-filled.svg")
                imgDeleteFav.classList.add("mainContainer__containerInfoUser--iconUser", "iconSizeBig")
                divInfoUser.appendChild(imgDeleteFav)
                imgDeleteFav.alt = "Icono de borrar tus michis favoritos"
                const divImgUser = document.createElement("div")
                divImgUser.classList.add("mainContainer__containerImgUser","mainContainer__containerImgUser--height")
                const imgPublic = document.createElement("img")
                imgPublic.classList.add("mainContainer__containerImgUser--imgMichi", "mainContainer__containerImgUser--imgMichi--size")
                /* imgPublic.dataset.src = `${michi.image.url}`
                registerImg(imgPublic) */
                imgPublic.setAttribute("src",`${michi.image.url}`)
                imgPublic.setAttribute("loading","lazy");
                imgPublic.alt = "Foto de michi"
                divImgUser.appendChild(imgPublic)
                imgDeleteFav.addEventListener("click", () =>{
                    deleteFavoriteMichi(michi.id)
                })
                article.appendChild(divInfoUser)
                article.appendChild(divImgUser)
                array.push(article)
}

//Cards Favorites no cat
export function createCardFavoriteMichisNoMichi(array){
    if(array.length == 0){
        const divNoMichi = document.createElement("div")
        divNoMichi.classList.add("mainContainerFavorites__noMichi")
        const imgNoMichi = document.createElement("img");
        imgNoMichi.setAttribute("src","./src/assets/emojione_crying-cat-face.svg")
        imgNoMichi.classList.add("mainContainerFavorites__noMichi--imgMichiSad")
        imgNoMichi.alt = "Foto de michi triste"
        const spanNoMichi = document.createElement("span");
        spanNoMichi.classList.add("mainContainerFavorites__noMichi--spanText")
        spanNoMichi.textContent = "Al parecer no tienes ningun michi favorito"
        const buttonNoMichi = document.createElement("button");
        buttonNoMichi.classList.add("mainContainerFavorites__noMichi--btn")
        buttonNoMichi.textContent = "Buscar Michis"
        buttonNoMichi.addEventListener("click", () =>{
            location.hash ="Home"
        })
        divNoMichi.appendChild(imgNoMichi)
        divNoMichi.appendChild(spanNoMichi)
        divNoMichi.appendChild(buttonNoMichi)
        favoriteMichisSection.appendChild(divNoMichi)
    }
}

//Counter
export function counterFav(array){
    const counterFavNodeList = document.querySelectorAll(".counterFav")
        const counterFav = []
        counterFav.push(...counterFavNodeList)
        counterFav.forEach(counter =>{
            counter.innerHTML = array.length
        })
}
