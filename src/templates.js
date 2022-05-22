import { containerCounter } from "./nodos.js";
import { getRandomInt, smoothscroll } from "./utils.js";
import { deleteFavoriteMichi, saveFavoriteMichi } from "./michigram.service.js";
import h from 'hyperscript'

//title "Tus Michis Favoritos:"
export const createTitle = () =>
    h(
        "div.mainContainerFavorites__container-h2",
        h(
            "h2",
            "Tus Michis Favoritos:",
        )
)
//Cards
export const createCardMichis = (michi,results) =>
    h(
        "article.mainContainer__containerCard",
        h(
            "div.mainContainer__containerInfoUser",
            h(
                "img.mainContainer__containerInfoUser--iconUser",{
                    src:`${results[getRandomInt(1,20)].picture.thumbnail}`,
                    alt: "Icono del usuario"
                },
            ),
            h(
                "span.mainContainer__containerInfoUser--nameUser",
                `${results[getRandomInt(1,20)].name.first}`
            )
        ),
        h(
            "div.mainContainer__containerImgUser",
            h(
                "img.mainContainer__containerImgUser--imgMichi",{
                    src:`${michi.url}`,
                    alt: "Foto de michi",
                    loading: "lazi"
                }
            )
        ),
        h(
            "div.mainContainer__containerButtons",
            h(
                "img",{
                    classList: "mainContainer__containerButtons--iconLike iconSizeBig",
                    src: "./assets/heartLikeVector.svg",
                    alt: "Icono para darle like a la foto del michi",
                    /* onclick: function(){  
                    } */
                }
            ),
            h(
                "img",{
                    classList: "mainContainer__containerButtons--iconFav iconSizeBig",
                    src: "./assets/saveVector.svg",
                    alt: "Icono para darle like a la foto del michi",
                    onclick:() =>{
                        saveFavoriteMichi(michi.id)
                        containerCounter.forEach(item =>{
                            item.classList.add("hardMove")
                            setTimeout(() => {
                                item.classList.remove("hardMove")
                            }, 1000);
                        })
                    }
                }
            )
        )
)
//Cards Favorites 
export const  createCardFavoriteMichis = (michi) =>
    h(
        "article",{
            classList:"mainContainer__containerCard mainContainer__containerCards--cardFav",
        },
        h(
            "div",{
                classList:"mainContainer__containerInfoUser mainContainer__infoUser--flex-end"
            },
            h(
                "img",{
                    classList:"mainContainer__containerInfoUser--iconDelete iconSizeBig",
                    src:"./assets/ant-design_delete-filled.svg",
                    alt: "Icono de borrar tus michis favoritos",
                    onclick:() =>{
                        deleteFavoriteMichi(michi.id)
                    }
                },
            ),
        ),
        h(
            "div",{
                classList:"mainContainer__containerImgUser mainContainer__containerImgUser--height"
            },
            h(
                "img",{
                    classList:"mainContainer__containerImgUser--imgMichi mainContainer__containerImgUser--imgMichi--size",
                    src:`${michi.image.url}`,
                    alt: "Foto de michi en favoritos",
                    loading: "lazi"
                }
            )
        ),
)
//Cards Favorites no cat
export const createCardFavoriteMichisNoMichi = () =>
        h(
            "div.mainContainerFavorites__noMichi",
            h(
                "img.mainContainerFavorites__noMichi--imgMichiSad",{
                    src:"./assets/emojione_crying-cat-face.svg",
                    alt:"Emoji de michi triste"
                }
            ),
            h(
                "span.mainContainerFavorites__noMichi--spanText",
                "Al parecer no tienes ningun michi favorito"
            ),
            h(
                "button.mainContainerFavorites__noMichi--btn",
                "Buscar Michis",{
                            onclick: function(){
                                location.hash ="home"
                                smoothscroll()
                            },
                }
                ),
)

//Counter
export const counterFav = (array) => {
    const counterFavNodeList = document.querySelectorAll(".counterFav")
        const counterFav = []
        counterFav.push(...counterFavNodeList)
        counterFav.forEach(counter =>{
            counter.innerHTML = array.length
        })
}
