import { modelo } from './modelo';

export function pintarCarta(urlCarta: string) {
    const elementoImagen = document.getElementById("cartaImage") as HTMLImageElement;
    if (elementoImagen) {
        elementoImagen.src = urlCarta;
        elementoImagen.style.display = 'block';
    }
}

export function finalizarJuego(mensaje: string) {
    const gameOverDiv = document.getElementById('game-over') as HTMLDivElement;
    gameOverDiv.style.display = 'block';
    gameOverDiv.innerText = mensaje;
    document.getElementById('dameCarta')?.setAttribute('disabled', 'true');
    document.getElementById('mePlanto')?.setAttribute('disabled', 'true');
    document.getElementById('nuevaPartida')!.style.display = 'block';
}

export function nuevaPartida() {
    modelo.puntuacion = 0;
    modelo.muestraPuntuacion();
    let mostrarCartaDiv = document.getElementById('cartaImage') as HTMLImageElement;
    if (mostrarCartaDiv) {
        mostrarCartaDiv.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }

    document.getElementById('game-over')!.style.display = 'none';
    document.getElementById('dameCarta')!.removeAttribute('disabled');
    document.getElementById('mePlanto')!.removeAttribute('disabled');
    document.getElementById('nuevaPartida')!.style.display = 'none';
}
