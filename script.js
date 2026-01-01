document.addEventListener("DOMContentLoaded", () => {
    const sobre = document.getElementById("sobre");
    const carta = document.getElementById("carta");
    const tiempoElemento = document.getElementById("tiempo");
    const musica = document.getElementById("musica"); // audio

    // 👉 CAMBIAR ESTA FECHA POR LA REAL DE USTEDES
    const fechaInicio = new Date("2025-07-30");

    function actualizarTiempo() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        const segundosTotales = Math.floor(diferencia / 1000);
        const minutos = Math.floor(segundosTotales / 60);
        const horas = Math.floor(minutos / 60);
        const dias = Math.floor(horas / 24);
        const meses = Math.floor(dias / 30.44);
        const años = Math.floor(meses / 12);

        const segundos = segundosTotales % 60;
        const minutosR = minutos % 60;
        const horasR = horas % 24;
        const diasR = Math.floor(dias % 30.44);
        const mesesR = meses % 12;

        tiempoElemento.textContent =
    `‼️ ${mesesR} meses, ${diasR} dias, ${horasR} horas, ${minutosR} minutos y ${segundos} segundos ‼️`;
    }

    setInterval(actualizarTiempo, 1000);
    actualizarTiempo();

    sobre.addEventListener("click", () => {
        sobre.classList.add("abierto");

        // Reproducir la fokin musica al interactuar con la pagina (ojala funcione)
        musica.play().catch(() => {
            console.log("El navegador requiere interacción para reproducir audio");
        });

        setTimeout(() => {
            sobre.style.display = "none";
            carta.style.display = "block";
        }, 1000);
    });
});
