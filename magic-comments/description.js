


/**
 * 
 * @description This function calculates the tax amount based on the given amount and tax rate
 */
function calcTax(amount, taxRate) {
    if (typeof amount !== 'number' || typeof taxRate !== 'number') {
        throw new Error('Both amount and taxRate should be numbers');
    }
    // calculate the tax
    return amount * taxRate;
}
