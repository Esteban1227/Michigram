import { API_BASE, API_KEY, API_URL_FAVORITES_DELETE } from "../Apis.js"
import { favoriteMichisSection } from "../../nodos.js";
import { createCardFavoriteMichis, createCardFavoriteMichisNoMichi, createTitle } from "../../templates/templateSectionFavoriteMichis.js"
import { counterFav } from "./counterMichisInFavorites.js";
import { registerImg } from "../../utils/lazyLoading.js";
//Load Favorites Michis
export let arrayMichiFav = [];
export async function loadFavoriteMichis() {
    const res = await fetch(`${API_BASE}/favourites`, {
        method: 'GET',
        headers:{
            "X-API-KEY":API_KEY
        },
    });
    const data = await res.json();
        favoriteMichisSection.innerHTML = ""
        favoriteMichisSection.append(createTitle())
        const arrayMichi = []
        arrayMichiFav = [...data]
        /* console.log(arrayMichiFav) */
        if(data.length === 0){
            favoriteMichisSection.append(createCardFavoriteMichisNoMichi())
        }else{
            data.forEach(michi =>{
                arrayMichi.push(createCardFavoriteMichis(michi))
            })
            arrayMichi.forEach(card =>{
            const img = card.children[1].children[0]
            img.addEventListener("error", () =>{
                img.setAttribute("src", "./assets/image/image0011.jpg")
            })
            registerImg(img)
    })
            favoriteMichisSection.append(...arrayMichi)
        }
        counterFav(arrayMichi)
}

//Save Michis in Favorites
export async function saveFavoriteMichi(id) {
    const arrayMichiFavImg = []
    arrayMichiFav.forEach(michiFav =>{
        arrayMichiFavImg.push(michiFav.image_id)
    })
    if(arrayMichiFavImg.includes(id)){
        /* console.log("ya esta") */
    }else{
        const res = await fetch(`${API_BASE}/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-API-KEY": API_KEY
            },
            body: JSON.stringify({
                image_id: id
            }),
        });
        const data = await res.json();
        /* console.log(data) */
        loadFavoriteMichis();
    }
}

//Delete michis in favorites
export async function deleteFavoriteMichi(id) {
    const res = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
        headers:{
            "X-API-KEY":API_KEY
        },
    });
    const data = await res.json();
    loadFavoriteMichis();
}