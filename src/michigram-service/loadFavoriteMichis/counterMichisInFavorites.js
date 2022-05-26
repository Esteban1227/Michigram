//Counter
export const counterFav = (array) => {
    const counterFavNodeList = document.querySelectorAll(".counterFav")
        const counterFav = []
        counterFav.push(...counterFavNodeList)
        counterFav.forEach(counter =>{
            counter.innerHTML = array.length
        })
}