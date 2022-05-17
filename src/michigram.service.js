import { API_BASE, API_KEY, API_URL_FAVORITES_DELETE, API_USER } from "./Apis.js"
import { randomMichisSection, favoriteMichisSection } from "./nodos.js";
import { createTitle, createCardMichis, createCardFavoriteMichis, counterFav, createCardFavoriteMichisNoMichi } from "./templates.js";

export async function loadRandomMichis() {
    const res = await fetch(`${API_BASE}/images/search?limit=10`, {
        method: 'GET',
        headers:{
            "X-API-KEY": API_KEY
        },
    });
    const data = await res.json();
    const resUser = await fetch(`${API_USER}`);
    const { results } = await resUser.json();
    randomMichisSection.innerHTML = ""
    const arrayMichi = []
    data.forEach(michi =>{
        createCardMichis(michi,arrayMichi,results)
    })
    randomMichisSection.append(...arrayMichi)
}
export async function loadFavoriteMichis() {
    const res = await fetch(`${API_BASE}/favourites`, {
        method: 'GET',
        headers:{
            "X-API-KEY":API_KEY
        },
    });
    const data = await res.json();
        favoriteMichisSection.innerHTML = ""
        createTitle()
        const arrayMichi = []
        data.forEach(michi =>{
            createCardFavoriteMichis(michi, arrayMichi)
        })
        favoriteMichisSection.append(...arrayMichi)
        createCardFavoriteMichisNoMichi(arrayMichi)
        counterFav(arrayMichi)
}
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
    loadFavoriteMichis();

}
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
export async function uploadMichiPhoto(){
    const form = document.getElementById("uploandingFrom");
    const formData = new FormData(form);
   /*  console.log(formData.get("file")) */
    const res =  await fetch(`${API_BASE}/images/upload`,{
        method:"POST",
        headers:{
            "X-API-KEY":API_KEY
        },
        body:formData,
    })
    const data = await res.json();
    saveFavoriteMichi(data.id)
}