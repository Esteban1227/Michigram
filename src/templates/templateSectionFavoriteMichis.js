
import { smoothscroll } from "../utils/animationScrollTop.js";
import { deleteFavoriteMichi } from "../michigram-service/loadFavoriteMichis/loadFavoriteMichis.service"
import h from 'hyperscript'
import { favoriteButton } from "../buttons/buttonFunctions.js";

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
                    src:"./assets/image/ant-design_delete-filled.svg",
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
                    /* src:`${michi.image.url}`, */
                    "data-set":`${michi.image.url}`,
                    alt: "Foto de michi en favoritos",
                    loading: "lazi"
                }
            )
        ),
)

//title "Tus Michis Favoritos:"
export const createTitle = () =>
    h(
        "div.mainContainerFavorites__container-h2",
        h(
            "h2",
            "Tus Michis Favoritos:",
        )
)
//Cards Favorites no cat
export const createCardFavoriteMichisNoMichi = () =>
        h(
            "div.mainContainerFavorites__noMichi",
            h(
                "img.mainContainerFavorites__noMichi--imgMichiSad",{
                    src:"./assets/image/emojione_crying-cat-face.svg",
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