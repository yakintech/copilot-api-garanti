//Dışarıdan fiyat ve vergi oranı alan ve toplam fiyatı hesaplayan bir fonksiyon yazınız.


/**
 * Calculates the total price including tax.
 * 
 * @param {number} price - The initial price of the item.
 * @param {number} taxRate - The tax rate to be applied.
 * @returns {number} The total price including tax.
 */
function calculateTotalPrice(price, taxRate) {
    return price + price * taxRate;
}


/**
 * Calculates the average of three numbers.
 * 
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {number} num3 - The third number.
 * @returns {number} The average of the three numbers.
 */
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
