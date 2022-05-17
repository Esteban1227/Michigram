//Random Number
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//scroll Animation
export function smoothscroll(){
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};