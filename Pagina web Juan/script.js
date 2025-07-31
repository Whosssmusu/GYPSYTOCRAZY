window.addEventListener('load', () => {
    // Espera 3 segundos para mostrar la animación
    setTimeout(() => {
        document.getElementById('main-title').style.opacity = 0; // Desaparece el título
        document.getElementById('main-title').style.transition = "opacity 1s ease"; // Añadimos una transición suave

        // Mostrar el carrusel después de ocultar el título
        setTimeout(() => {
            document.getElementById('carousel').style.display = 'block';
            startCarousel(); // Inicia el carrusel
        }, 1000); // Espera un segundo antes de mostrar el carrusel
    }, 3000);
});

function startCarousel() {
    const images = document.querySelectorAll('.carousel img');
    const photoName = document.getElementById('photo-name');
    let currentIndex = 0;

    setInterval(() => {
        // Desactivar la imagen actual y su nombre
        images[currentIndex].classList.remove('active');
        photoName.style.opacity = 0;

        setTimeout(() => {
            // Cambiar a la siguiente imagen
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
            photoName.textContent = 'Foto ' + (currentIndex + 1);

            // Asegurarse de que la imagen activa sea visible y su nombre se muestre
            images[currentIndex].style.opacity = 1;
            photoName.style.opacity = 1;
        }, 1000); // Espera 1 segundo para cambiar la imagen
    }, 4000); // Cambia de imagen cada 4 segundos
}
