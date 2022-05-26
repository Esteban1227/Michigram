import { API_BASE, API_KEY, API_USER } from "../Apis.js"
import { randomMichisSection} from "../../nodos.js";
import { createCardMichis } from "../../templates/templateSectionRandomMichis.js";

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
    })
    randomMichisSection.append(...arrayMichi)
}