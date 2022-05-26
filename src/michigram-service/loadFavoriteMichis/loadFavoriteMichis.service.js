import { API_BASE, API_KEY, API_URL_FAVORITES_DELETE } from "../Apis.js"
import { favoriteMichisSection } from "../../nodos.js";
import { createCardFavoriteMichis, createCardFavoriteMichisNoMichi, createTitle } from "../../templates/templateSectionFavoriteMichis.js"
import { counterFav } from "./counterMichisInFavorites.js";
//Load Favorites Michis
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
        const arrayMichiFav = []
        data.forEach(michiId =>{
            if(arrayMichiFav.includes(michiId.image_id)){
                console.log("ya esta el michi")
            }else{
                arrayMichiFav.push(michiId.image_id)        
            }
        })
        console.log(arrayMichiFav)
        if(data.length === 0){
            favoriteMichisSection.append(createCardFavoriteMichisNoMichi())
        }else{
            data.forEach(michi =>{
                arrayMichi.push(createCardFavoriteMichis(michi))
            })
            favoriteMichisSection.append(...arrayMichi)
        }
        counterFav(arrayMichi)
}

//Save Michis in Favorites
export async function saveFavoriteMichi(id) {
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
    console.log(data)
/*     arrayMichiFav.push(id)
    console.log(arrayMichiFav) */
    loadFavoriteMichis();
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