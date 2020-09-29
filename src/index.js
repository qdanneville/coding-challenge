
function createStar() {
    const elem = document.createElement('div');
    elem.classList.add('star');
    elem.style.cssText = `left:${Math.floor(Math.random() * Math.floor(100))}%; animation-delay:${Math.floor(Math.random() * Math.floor(3.9))}s; animation-duration:${Math.floor(Math.random() * Math.floor(5))}s;`
    elem.innerText = "★";

    document.body.appendChild(elem);
    setTimeout(() => {
        elem.remove();
    }, 5000)
}
setInterval(createStar, 300);