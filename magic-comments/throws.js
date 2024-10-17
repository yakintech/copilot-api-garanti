


//Dışarıdan fiyat ve vergi oranı alan ve toplam fiyatı hesaplayan bir fonksiyon yazınız. Eğer vergi oranı 0 dan küçükse hata fırlatınız.

/**
 * Calculates the total price including tax.
 * @param {number} price - The initial price of the item.
 * @param {number} taxRate - The tax rate to be applied.
 * @throws {Error} If tax rate is less than 0.
 * @returns {number} The total price including tax.
 */
function calculateTotalPrice(price, taxRate) {
    if (taxRate < 0) {
        throw new Error('Tax rate must be greater than or equal to 0');
    }
    return price + price * taxRate;
}