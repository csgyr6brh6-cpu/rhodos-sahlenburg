// Эффект для кнопок меню
document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('mouseenter', () => a.style.scale = '1.05');
    a.addEventListener('mouseleave', () => a.style.scale = '1');
});

// Галерея
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

if (images.length && lightbox && lightboxImg && close) {

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

}