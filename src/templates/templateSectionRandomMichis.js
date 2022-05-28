import { containerCounter } from "../nodos.js";
import { getRandomInt } from "../utils/numberRandom.js";
import { saveFavoriteMichi } from "../michigram-service/loadFavoriteMichis/loadFavoriteMichis.service"
import h from 'hyperscript'
addEventListener
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
                    "data-set":`${michi.url}`,
                    alt: "Foto de michi",
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
                    /* onclick: function(){  
                    } */
                }
            ),
            h(
                "img",{
                    classList: "mainContainer__containerButtons--iconFav iconSizeBig",
                    src: "./assets/image/saveVector.svg",
                    alt: "Icono para darle like a la foto del michi",
                    onclick:() =>{
                        saveFavoriteMichi(michi.id)
                        containerCounter.forEach(item =>{
                            item.classList.add("hardMoveRotate")
                            setTimeout(() => {
                                item.classList.remove("hardMoveRotate")
                            }, 1500);
                        })
                    }
                }
            )
        )
)