const btnSuccess = document.querySelector('.btn-success')
const btnInfo = document.querySelector('.btn-info')
const btnWarning = document.querySelector('.btn-warning')
const btnDanger = document.querySelector('.btn-danger')


const toastContainer = document.querySelector('.toasts');

const toastTime = 10 * 1000 //sec
let timerId;

btnSuccess.addEventListener('click', (event) => {
    showToast('success', 'valam egy kcis hosszabb szöveg ... i')
});

btnInfo.addEventListener('click', (event) => {
    showToast('info', 'valami')
});

btnDanger.addEventListener('click', (event) => {
    showToast('danger', 'Valami hosszab szöveg')
});


function showToast(type, message) {

    //legyártjuk a toastot


    const toastElement = document.createElement('div')
    toastElement.classList.add('toast', 'toast-' + type);
    const toastMessage = document.createElement('div');
    toastMessage.innerText = message;
    toastElement.appendChild(toastMessage);
    const toastCloseBtn = document.createElement('a');
    toastCloseBtn.classList.add('btn-toast-close')
    toastCloseBtn.setAttribute('href', '#')
    toastCloseBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    toastCloseBtn.addEventListener('click', closeToast)
    toastElement.appendChild(toastCloseBtn);
    toastContainer.appendChild(toastElement);

    timerId = setTimeout(() => {
        closeToast(event, toastElement);
    }, toastTime)
}


//van egy hiba amikor kézzel zárom-be akkor az időzítő a nem létező elemt akarja törölni
function closeToast(event, toastElement) {
    try {

        if (toastElement) {
            toastContainer.removeChild(toastElement);
        } else {
            toastContainer.removeChild(event.target.parentElement.parentElement)
            clearTimeout(timerId);
        }
        /*
                for (let child of toastContainer.children) {
                    if (toastElement === child) {
                        
        
                    } else {
        
                    }
                }
               */
    } catch (err) {
        console.log(err)
    }

}