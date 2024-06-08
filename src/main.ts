import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style.css";

let puntuacion = 0;
let juegoTerminado = false;

function muestraPuntuacion() {
    const scoreDisplay = document.getElementById('score-display') as HTMLDivElement;
    if (puntuacion <= 7.5) {
        scoreDisplay.innerText = `Puntuación: ${puntuacion}`;
    } else {
        scoreDisplay.innerText = `Puntuación: ${puntuacion} (¡Te has pasado de la puntuación!)`;
    }
}

function dameCarta() {
    let random = Math.floor(Math.random() * 10) + 1;
    if (random > 7) {
        random += 2;
    }
    return random;
}

function obtenerValorCarta(carta: number): number {
    switch (carta) {
        case 10:
        case 11:
        case 12:
            return 0.5;
        default:
            return carta;
    }
}

function mostrarCarta(carta: number) {
    const cartaDiv = document.getElementById('mostrarCarta') as HTMLDivElement;

    switch (carta) {
        case 1:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg" alt="1 de copas">`;
            break;
        case 2:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg" alt="2 de copas">`;
            break;
        case 3:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg" alt="3 de copas">`;
            break;
        case 4:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg" alt="4 de copas">`;
            break;
        case 5:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg" alt="5 de copas">`;
            break;
        case 6:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg" alt="6 de copas">`;
            break;
        case 7:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg" alt="7 de copas">`;
            break;
        case 10:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg" alt="sota de copas">`;
            break;
        case 11:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg" alt="caballo de copas">`;
            break;
        case 12:
            cartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg" alt="rey de copas">`;
            break;
    }
}

function finalizarJuego(mensaje: string) {
    juegoTerminado = true;
    const gameOverDiv = document.getElementById('game-over') as HTMLDivElement;
    gameOverDiv.style.display = 'block';
    gameOverDiv.innerText = mensaje;
    document.getElementById('dameCarta')?.setAttribute('disabled', 'true');
    document.getElementById('mePlanto')?.setAttribute('disabled', 'true');
    document.getElementById('nuevaPartida')!.style.display = 'block';
}

function nuevaPartida() {
    puntuacion = 0;
    juegoTerminado = false;
    muestraPuntuacion();
    let mostrarCartaDiv = document.getElementById('mostrarCarta');
    if (mostrarCartaDiv) {
        mostrarCartaDiv.innerHTML = `<img src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" alt="hidden">`;
    }

    document.getElementById('game-over')!.style.display = 'none';
    document.getElementById('dameCarta')!.removeAttribute('disabled');
    document.getElementById('mePlanto')!.removeAttribute('disabled');
    document.getElementById('nuevaPartida')!.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion();

    document.getElementById("dameCarta")?.addEventListener("click", () => {
        if (juegoTerminado) return;
        let carta = dameCarta();
        let valorCarta = obtenerValorCarta(carta);
        puntuacion += valorCarta;
        muestraPuntuacion();
        mostrarCarta(carta);
        if (puntuacion > 7.5) {
            finalizarJuego("Game Over: Te has pasado de 7.5 puntos.");
        }
    });

    document.getElementById("mePlanto")?.addEventListener("click", () => {
        if (juegoTerminado) return;
        let mensaje = "";
        if (puntuacion < 4) {
            mensaje = "Has sido muy conservador.";
        } else if (puntuacion === 5) {
            mensaje = "Te ha entrado el canguelo eh?";
        } else if (puntuacion > 5 && puntuacion < 7.5) {
            mensaje = "Casi casi...";
        } else if (puntuacion === 7.5) {
            mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        }
        finalizarJuego(mensaje);
    });

    document.getElementById("nuevaPartida")?.addEventListener("click", () => {
        nuevaPartida();
    });
});
