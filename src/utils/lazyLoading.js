const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const loadImg = (entry) =>{
    const container = entry.target
    const url = entry.target.getAttribute("data-set")
    entry.target.setAttribute("src", url)
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entry) =>{
    entry.filter(isIntersecting).forEach(loadImg)
})

export const registerImg = (img) =>{
    observer.observe(img)
}
