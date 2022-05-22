import { API_BASE, API_KEY, API_URL_FAVORITES_DELETE, API_USER } from "./Apis.js"
import { randomMichisSection, favoriteMichisSection } from "./nodos.js";
import { createTitle, createCardMichis, createCardFavoriteMichis, counterFav, createCardFavoriteMichisNoMichi, SectionTitle } from "./templates.js";

//Load Radom Michis
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
        arrayMichi.push(createCardMichis(michi,results))
        randomMichisSection.append(...arrayMichi)
    })
}

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

//...
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