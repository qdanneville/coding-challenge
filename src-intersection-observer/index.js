const boxes = document.querySelectorAll('.box');

function showElem(entries) {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) entry.target.classList.add('visible');
    })
}

let observer = new IntersectionObserver(showElem);

boxes.forEach(box => {
    observer.observe(box);
})

const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL');
console.log(url);