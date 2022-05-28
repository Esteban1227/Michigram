import { API_BASE, API_KEY, API_USER } from "../Apis.js"
import { randomMichisSection} from "../../nodos.js";
import { createCardMichis } from "../../templates/templateSectionRandomMichis.js";
import { registerImg} from "../../utils/lazyLoading.js";

//Load Radom Michis
export async function loadRandomMichis() {
    const res = await fetch(`${API_BASE}/images/search?limit=3`, {
        method: 'GET',
        headers:{
            "X-API-KEY": API_KEY
        },
    }); 
    const data = await res.json();
    const resUser = await fetch(`${API_USER}`);
    const { results } = await resUser.json();
    /* randomMichisSection.innerHTML = "" */
    const arrayMichi = []
    data.forEach(michi =>{
        arrayMichi.push(createCardMichis(michi,results))
    })
    arrayMichi.forEach(card =>{
        const img = card.children[1].children[0]
        img.addEventListener("error", () =>{
            img.setAttribute("src", "./assets/image/image0011.jpg")
        })
        registerImg(img)
    })
    randomMichisSection.append(...arrayMichi)
}

export async function getMoreMichis(){
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    const scrollIsBottom = (scrollTop + clientHeight ) >= (scrollHeight -15)

    if(scrollIsBottom){
        loadRandomMichis()
    }
}