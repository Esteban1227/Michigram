import { categoryMichiSection, categoryMichiSectionGrid, categoryMichiTitle } from "../../utils/nodos";
import { createCardCategory, createTitleCategory } from "../../templates/templateSectionCaregoryMichis";
import { API_BASE, API_KEY, API_USER } from "../Apis";
import { registerImg } from "../../utils/lazyLoading";
import { loadRandomMichis } from "../loadRandomMichis/loadRandomMichis.service";
let categoryId

export async function selectCategory(){
    const selectCategory = document.getElementById("selectCategory")
    selectCategory.addEventListener("change", (e) =>{
        /* console.log(e.target.value) */
        switch (e.target.value) {
            case"0":
                location.hash = "#home"
            break
            case "1":
                console.log("1")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis con sombreros:",
                    clean:true,
                    infiniteScroll: false,
                })
                location.hash = "#category=MichisConSombreros"
            break;
            case "2":
                console.log("2")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis en el espacio:",
                    clean:true,
                    infiniteScroll: false,
                })
                location.hash = "#category=MichisEnElEspacio"
            break;
            case "4":
                console.log("4")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis con gafas:",
                    clean:true
                })
                location.hash = "#category=MichisConGafas"
            break;
            case "5":
                console.log("5")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis adentro de cajas:",
                    clean:true
                })
                location.hash = "#category=MichisAdentroDeCajas"
            break;
            case "7":
                console.log("7")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis con corbata:",
                    clean:true
                })
                location.hash = "#category=MichisConCorbatas"
            break;
            case "14":
                console.log("14")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis en el lava manos:",
                    clean:true
                })
                location.hash = "#category=MichisConGafas"
            break;
            case "15":
                console.log("15")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis con corbata:",
                    clean:true
                })
                location.hash = "#category=MichisConRopa"
            break;
            default:
                break;
        }
    })
}

let limit = 10
export async function loadCategory(id,
    {
        title = "",
        clean = false,
        infiniteScroll = false,
    } = {},){
    const resUser = await fetch(`${API_USER}`);
    const { results } = await resUser.json();
    const res = await fetch(`${API_BASE}/images/search?category_ids=${id}&limit=${limit}&order=Desc`, {
        method: 'GET',
        headers:{
            "X-API-KEY": API_KEY,
        },
    }); 
    /* console.log(res.headers.get('pagination-count')) */
    const data = await res.json();
    console.log(data)
    const arrayMichi = []
    if(clean){
        categoryMichiSectionGrid.innerHTML = ""
        categoryMichiTitle.innerHTML= ""
    }
    if(title.length >= 1){
        categoryMichiTitle.innerHTML = title
    }
        data.forEach(michi => {
            arrayMichi.push(createCardCategory(michi, results))
        });
        categoryMichiSectionGrid.append(...arrayMichi)
}

/* export  function getMoreMichisCategory(){
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const scrollIsBottom = (scrollTop + clientHeight ) >= (scrollHeight -10)
    console.log(scrollIsBottom)
    if(scrollIsBottom){
        loadCategory(categoryId)
    }
}  */