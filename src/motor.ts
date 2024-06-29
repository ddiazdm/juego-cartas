import { modelo } from './modelo';
import {
    finalizarJuego,
} from './ui'

export const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
}

export function generarCarta(numeroAleatorio: number): number {
    return numeroAleatorio > 7 ? numeroAleatorio += 2 : numeroAleatorio;
}

export function obtenerValorCarta(carta: number): number {
    return carta > 7 ? 0.5 : carta;
}

export function obtenerUrlCarta(carta: number): string {
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

export function gestionarPartida() {
    if (modelo.puntuacion === 7.5) {
        finalizarJuego("He ganado la partida");
    }

    if (modelo.puntuacion > 7.5) {
        finalizarJuego("Game Over: Te has pasado de 7.5 puntos.");
    }
}
