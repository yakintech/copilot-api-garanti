
//Dışarıdan iki adet string alan(ad ve soyad) ve bu stringin baş harflerini büyük yaparak döndüren bir fonksiyon yazınız.


/**
 * Capitalizes the first letter of the given name and surname.
 * @example capitalizeName('john', 'doe') => 'John Doe'
 */
function capitalizeName(name, surname) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${surname.charAt(0).toUpperCase()}${surname.slice(1)}`;
}


/**
 * Capitalizes the first letter of each word in the given full name.
 * @example capitalizeFullName('john doe') => 'John Doe'
 */
function capitalizeFullName(fullName) {
    return fullName
        .split(' ')
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' ');
}