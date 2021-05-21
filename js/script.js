var images = document.querySelectorAll('.img');

images.forEach((e) => {
    e.style.backgroundImage = `url(${e.dataset.src})`;
})