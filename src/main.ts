import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style.css";


import { modelo } from './modelo';
import { generarNumeroAleatorio, generarCarta, obtenerUrlCarta, obtenerValorCarta, gestionarPartida } from './motor';
import { pintarCarta, finalizarJuego, nuevaPartida } from './ui';



document.addEventListener('DOMContentLoaded', () => {
    modelo.muestraPuntuacion();
    const elementoDameCarta = document.getElementById("dameCarta");

    if (elementoDameCarta && elementoDameCarta instanceof HTMLButtonElement) {
        elementoDameCarta.addEventListener("click", () => {
            const numeroAleatorio = generarNumeroAleatorio();
            let carta = generarCarta(numeroAleatorio);
            const urlCarta = obtenerUrlCarta(carta);
            pintarCarta(urlCarta);
            let valorCarta = obtenerValorCarta(carta);
            modelo.puntuacion += valorCarta;
            modelo.muestraPuntuacion();
            obtenerUrlCarta(carta);
            gestionarPartida();
        });
    }

    document.getElementById("mePlanto")?.addEventListener("click", () => {
        let mensaje = "";
        if (modelo.puntuacion < 4) {
            mensaje = "Has sido muy conservador.";
        } else if (modelo.puntuacion === 5) {
            mensaje = "Te ha entrado el canguelo eh?";
        } else if (modelo.puntuacion > 5 && modelo.puntuacion < 7.5) {
            mensaje = "Casi casi...";
        } else if (modelo.puntuacion === 7.5) {
            mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        }
        finalizarJuego(mensaje);
    });

    document.getElementById("nuevaPartida")?.addEventListener("click", () => {
        nuevaPartida();
    });
});
