import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

const crearDeck = ( tiposCartas, cartasEspeciales ) => {

    if ( !tiposCartas || tiposCartas.length === 0 ) throw new Error('tiposCarta es obligatorio y debe ser un arreglo de string');
    if ( !cartasEspeciales || cartasEspeciales.length === 0 ) throw new Error('cartasEspeciales es obligatorio y debe ser un arreglo de string');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of cartasEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );
}

export default crearDeck;