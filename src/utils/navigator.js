import { categoryPage, favoritePage, homePage } from "../buttons/buttonFunctions.js";


//navigator
export function navigatorSpa(){
    if(location.hash.startsWith("#favorite")){
        favoritePage()
    }else if(location.hash.startsWith("#home")){
        homePage()
    }else if(location.hash.startsWith("#category=")){
        categoryPage()
    }else{
        //Coming soon
        /* notPage() */
    }
}

