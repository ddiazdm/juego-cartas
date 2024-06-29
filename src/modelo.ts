export const modelo = {
    puntuacion: 0,
    muestraPuntuacion: function () {
        const scoreDisplay = document.getElementById('score-display') as HTMLDivElement;
        if (this.puntuacion <= 7.5) {
            scoreDisplay.innerText = `Puntuación: ${this.puntuacion}`;
        } else {
            scoreDisplay.innerText = `Puntuación: ${this.puntuacion} (¡Te has pasado de la puntuación!)`;
        }
    }
};
