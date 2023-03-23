/**
 *Esta función selecciona una carta
 *@param {Array<String>} deck 
 * @returns {String} Retorna String con la carta a mostrar
 */

const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

export default pedirCarta;