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

const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
}

function generarCarta(numeroAleatorio: number): number {
    return numeroAleatorio > 7 ? numeroAleatorio += 2 : numeroAleatorio;
}


function obtenerValorCarta(carta: number): number {
    return carta > 7 ? 0.5 : carta;
}

function obtenerUrlCarta(carta: number): string {
    const baseURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";
    switch (carta) {
        case 1: return `${baseURL}1_as-copas.jpg`;
        case 2: return `${baseURL}2_dos-copas.jpg`;
        case 3: return `${baseURL}3_tres-copas.jpg`;
        case 4: return `${baseURL}4_cuatro-copas.jpg`;
        case 5: return `${baseURL}5_cinco-copas.jpg`;
        case 6: return `${baseURL}6_seis-copas.jpg`;
        case 7: return `${baseURL}7_siete-copas.jpg`;
        case 10: return `${baseURL}10_sota-copas.jpg`;
        case 11: return `${baseURL}11_caballo-copas.jpg`;
        case 12: return `${baseURL}12_rey-copas.jpg`;
        default: return `${baseURL}back.jpg`;
    }
}


function pintarCarta(urlCarta: string) {
    const elementoImagen = document.getElementById("cartaImage") as HTMLImageElement;
    if (elementoImagen) {
        elementoImagen.src = urlCarta;
        elementoImagen.style.display = 'block';
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
    let mostrarCartaDiv = document.getElementById('cartaImage') as HTMLImageElement;
    if (mostrarCartaDiv) {
        mostrarCartaDiv.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }

    document.getElementById('game-over')!.style.display = 'none';
    document.getElementById('dameCarta')!.removeAttribute('disabled');
    document.getElementById('mePlanto')!.removeAttribute('disabled');
    document.getElementById('nuevaPartida')!.style.display = 'none';
}

const gestionarPartida = () => {
    if (puntuacion === 7.5) {
      finalizarJuego("He ganado la partida");
    }
  
    if (puntuacion > 7.5) {
      finalizarJuego("Game Over: Te has pasado de 7.5 puntos.");
    }
  };

document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion();
    const elementoDameCarta = document.getElementById("dameCarta");

    if (elementoDameCarta && elementoDameCarta instanceof HTMLButtonElement) {
        elementoDameCarta.addEventListener("click", () => {
            const numeroAleatorio = generarNumeroAleatorio();
            let carta = generarCarta(numeroAleatorio);
            const urlCarta = obtenerUrlCarta(carta);
            pintarCarta(urlCarta);
            let valorCarta = obtenerValorCarta(carta);
            puntuacion += valorCarta;
            muestraPuntuacion();
            obtenerUrlCarta(carta);
            gestionarPartida();
        });
    }

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
