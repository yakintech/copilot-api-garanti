
//Dışarıdan gelen stringin mail formatında olup olmadığını kontrol eden bir fonksiyon yazınız.
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

//Dışarıdan gelen stringin kredi kartı numarası formatında olup olmadığını kontrol eden bir fonksiyon yazınız.
function isCreditCardValid(creditCard) {
    const creditCardRegex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;
    return creditCardRegex.test(creditCard);
}

console.log(isCreditCardValid('1234-1234-1234-1234')); //true
console.log(isCreditCardValid('1234123412341234')); //true


//Dışarıdan gelen stringin url formatında olup olmadığını kontrol eden bir fonksiyon yazınız.
function isUrlValid(url) {
    const urlRegex = /^(https?:\/\/)?(www\.)?[\w\.-]+\.\w{2,6}(\/)?$/;
    return urlRegex.test(url);
}

console.log(isUrlValid('https://www.google.com')); //true
console.log(isUrlValid('www.google.com')); //true


//Dışarıdan gelen stringin tarih formatında olup olmadığını kontrol eden bir fonksiyon yazınız.
function isDateValid(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    return dateRegex.test(date);
}

console.log(isDateValid('12.12.2020')); //true
console.log(isDateValid('12.12.20')); //false

//Dışarıdan gelecek olan stringin telefon numarası formatında olup olmadığını kontrol eden bir fonksiyon yazınız.
function isPhoneNumberValid(phoneNumber) {
    const phoneNumberRegex = /^\+?\d{1,3}?\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    return phoneNumberRegex.test(phoneNumber);
}

console.log(isPhoneNumberValid('+90 555 555 55 55')); //true
console.log(isPhoneNumberValid('555 555 55 55')); //true

//Dışarıdan gelen stringin IBAN formatında olup olmadığını kontrol eden bir fonksiyon yazınız.
function isIBANValid(iban) {
    const ibanRegex = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;
    return ibanRegex.test(iban);
}

console.log(isIBANValid('TR 3200 0000 0000 0000 0000 00')); //true
console.log(isIBANValid('TR3200000000000000000000')); //true

//Dışarıdan gelen stringin BTC adresi olup olmadığını kontrol eden bir fonksiyon yazınız.
function isBTCAddressValid(btcAddress) {
    const btcAddressRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
    return btcAddressRegex.test(btcAddress);
}