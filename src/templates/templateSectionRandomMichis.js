import { getRandomInt } from "../utils/numberRandom.js";
import h from 'hyperscript'
import { favoriteButton, likeButton } from "../buttons/buttonFunctions.js";
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
                    /* "data-set":`${michi.url}`, */
                    src:`${michi.url}`,
                    alt: "Foto de michi",
                    draggable: false,
                }
            )
        ),
        h(
            "div.mainContainer__containerButtons",
            h(
                "img",{
                    classList: "mainContainer__containerButtons--iconLike iconSizeBig",
                    src: "./assets/image/heartLikeVector.svg",
                    alt: "Icono para darle like a la foto del michi",
                    onclick:(e) => {
                        likeButton(e)
                    }
                }
            ),
            h(
                "img",{
                    classList: "mainContainer__containerButtons--iconFav iconSizeBig",
                    src: "./assets/image/fluent_save-copy-20-regular.svg",
                    alt: "Icono para darle like a la foto del michi",
                    onclick:(e) =>{
                        favoriteButton(e, michi)
                    }
                }
            )
        )
)