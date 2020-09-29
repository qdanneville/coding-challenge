const openToastBtnEl = document.getElementById('btn');

openToastBtnEl.addEventListener('click', () => createToast());

function createToast(message = 'default toast message') {
    const toastEl = document.createElement('div');
    toastEl.innerText = message
    document.body.appendChild(toastEl);
    setTimeout(() => {
        toastEl.remove();
    },3000)
}

