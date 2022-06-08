import { categoryMichiSection, categoryMichiSectionGrid, categoryMichiTitle } from "../../utils/nodos";
import { createCardCategory, createTitleCategory } from "../../templates/templateSectionCaregoryMichis";
import { API_BASE, API_KEY, API_USER } from "../Apis";
import { registerImg } from "../../utils/lazyLoading";
let categoryId

export async function selectCategory(){
    const selectCategory = document.getElementById("selectCategory")
    selectCategory.addEventListener("change", (e) =>{
        /* console.log(e.target.value) */
        switch (e.target.value) {
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
                location.hash = "#category=MichisConGafas"
            break;
            case "7":
                console.log("7")
                categoryId = e.target.value
                loadCategory(categoryId,{
                    title:"Michis con corbata:",
                    clean:true
                })
                location.hash = "#category=MichisConGafas"
            break;
            case "14":
                console.log("1")
            break;
            case "15":
                console.log("1")
            break;
            default:
                break;
        }
    })
}

let limit = 9
let page = 1
export async function loadCategory(id,
    {
        title = "",
        clean = false,
        infiniteScroll = false,
    } = {},){
    const resUser = await fetch(`${API_USER}`);
    const { results } = await resUser.json();
    const res = await fetch(`${API_BASE}/images/search?category_ids=${id}&limit=${limit}&page=${page}&order=Desc`, {
        method: 'GET',
        headers:{
            "X-API-KEY": API_KEY,
        },
    }); 
    console.log(page)
    page++
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

export  function getMoreMichisCategory(){
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const scrollIsBottom = (scrollTop + clientHeight ) >= (scrollHeight -10)
    console.log(scrollIsBottom)
    if(scrollIsBottom){
        loadCategory(categoryId)
    }
} 