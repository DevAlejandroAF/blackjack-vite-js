/**
 * Función que extrae el valor de la carta para su uso como puntaje
 * @param {String} carta Ejemplo: 2H
 * @returns {Number} Retorna un número para su posterior uso como puntaje
 */

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

export default valorCarta;