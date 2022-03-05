const draggables = document.querySelectorAll('.draggable');
const file = document.querySelector('.file');
const download = document.querySelector('.download');
const images = document.querySelector('.images');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('opacity');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('opacity')
    });
});
file.addEventListener('dragenter', e => {
    file.classList.add('changeView');
    download.style.opacity = '.3';
    const select = document.querySelector('.opacity');
    file.appendChild(select);
});
file.addEventListener('dragleave', e => {
    file.classList.remove('changeView')
    download.style.opacity = '1'
});
images.addEventListener('dragenter', e => {
    const select = document.querySelector('.opacity');
    images.appendChild(select);
});