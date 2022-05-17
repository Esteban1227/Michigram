/* const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const loadImg = (entry) =>{
    const container = entry.target
    const img = container;
    const url = img.dataset.src
    img.src = url;

    observer.unobserve(container)
}

const observer = new IntersectionObserver((entry) =>{
    entry.filter(isIntersecting).forEach(loadImg)
})

const registerImg = (img) =>{
    observer.observe(img)
} */