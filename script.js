const mascota = document.getElementById('mascota');

document.addEventListener('mousemove', (evento) => {

    mascota.style.left = `${evento.clientX}px`;
    mascota.style.top = `${evento.clientY}px`;
});
