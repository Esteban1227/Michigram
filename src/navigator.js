import { favoritePage, homePage } from "./buttons/buttonFunctions.js";


//navigator
export function navigatorSpa(){
    if(location.hash.startsWith("#favorite")){
        favoritePage()
    }else if(location.hash.startsWith("#home")){
        homePage()
    }else{
        //Coming soon
        /* notPage() */
    }
}

