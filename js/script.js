window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const height = window.innerHeight;
    let progress = Math.min(scroll / height, 1);
    const fastProg = Math.pow(progress, 0.4);

    const earth = document.getElementById('tierra-img');
    const sun = document.getElementById('sol-img');
    const moon = document.getElementById('luna-img');
    const mark = document.getElementById('mark-img');
    const asteroids = document.getElementById('asteroides');

    // tierra se hace pequeña y desaparece al 70% del scroll del viewport
    earth.style.transform = `scale(${1 - fastProg * 0.9}) translateY(${scroll * 1.5}px)`;
    earth.style.opacity = progress > 0.7 ? 0 : 1 - (progress * 1.4);

    // sol desaparece al 60% del scroll del viewport
    sun.style.transform = `scale(${1 - fastProg * 0.8}) translate(${scroll * 0.2}px, -${scroll * 0.1}px)`;
    sun.style.opacity = progress > 0.6 ? 0 : 1 - (progress * 1.6);

    // luna se hace pequeña y desaparece al 70% del scroll del viewport
    moon.style.transform = `scale(${1 - fastProg * 0.7}) translateX(${scroll * 0.4}px)`;
    moon.style.opacity = progress > 0.7 ? 0 : 1 - (progress * 1.4);

    // es para evitar que mark sea tocado por el cuadro negro
    const scaleMark = 1 + (fastProg * 13);
    mark.style.transform = `scale(${scaleMark}) translateY(-${scroll * 0.4}px)`;
    // si el scroll pasa de 0.7, Mark se desvanece rápido
    mark.style.opacity = progress > 0.7 ? (1 - progress) * 4 : 1;

    // aquí desaparecen los asteroides por completo
    asteroids.style.transform = `translateY(${scroll * 2.5}px)`;
    asteroids.style.opacity = progress > 0.6 ? 0 : 1 - (progress * 1.6);
});