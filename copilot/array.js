const { v4: uuidv4 } = require('uuid');

//Türkiye'den 10 tane şehir olan bir dizi oluştur.

const cities = [
    'Adana', 'Antalya', // Akdeniz Bölgesi
    'Ankara', 'Aksaray', // İç Anadolu Bölgesi
    'İstanbul', 'Edirne', // Marmara Bölgesi
    'İzmir', 'Manisa', // Ege Bölgesi
    'Trabzon', 'Rize', // Karadeniz Bölgesi
    'Diyarbakır', 'Mardin', // Güneydoğu Anadolu Bölgesi
    'Erzurum', 'Kars' // Doğu Anadolu Bölgesi
];


//Japonya'dan 10 tane şehir olan bir dizi oluştur.
const japanCities = [
    '東京', '大阪', '京都', '広島', '長崎', '福岡', '横浜', '神戸', '奈良', '札幌'
];

//5 tane Arapça kelime olan bir dizi oluştur.
const arabicWords = [
    'السلام', 'عليكم', 'وعليكم', 'السلام', 'مرحبا'
];

//5 tane Yunan şehri olan bir dizi oluştur
const greekCities = [
    'Αθήνα', 'Θεσσαλονίκη', 'Πάτρα', 'Ηράκλειο', 'Λάρισα'
];


//Ben bir object array oluşturmak istiyorum. 10 tane user olsun. User alanları: id, name, age, country olsun.
const users = [
    {
        id: uuidv4(),
        name: 'Hiroshi Tanaka',
        age: 25,
        country: 'Japan'
    },
    {
        id: uuidv4(),
        name: 'Mei Wong',
        age: 22,
        country: 'China'
    },
    {
        id: uuidv4(),
        name: 'Ananya Sharma',
        age: 30,
        country: 'India'
    },
    {
        id: uuidv4(),
        name: 'Siti Nurhaliza',
        age: 35,
        country: 'Malaysia'
    },
    {
        id: uuidv4(),
        name: 'Kim Min-ji',
        age: 40,
        country: 'South Korea'
    },
    {
        id: uuidv4(),
        name: 'Nguyen Van A',
        age: 28,
        country: 'Vietnam'
    },
    {
        id: uuidv4(),
        name: 'Aung Aung',
        age: 32,
        country: 'Myanmar'
    },
    {
        id: uuidv4(),
        name: 'Ali Khan',
        age: 27,
        country: 'Pakistan'
    },
    {
        id: uuidv4(),
        name: 'Nusrat Jahan',
        age: 24,
        country: 'Bangladesh'
    },
    {
        id: uuidv4(),
        name: 'Sakura Yamamoto',
        age: 29,
        country: 'Japan'
    }
];
// Helper function to generate a random date in the first 3 months of 2024, excluding weekends
function getRandomDate() {
    let date;
    do {
        const month = Math.floor(Math.random() * 3); // 0: January, 1: February, 2: March
        const day = Math.floor(Math.random() * 31) + 1; // Day of the month
        date = new Date(2024, month, day);
    } while (date.getDay() === 0 || date.getDay() === 6); // Exclude Sundays (0) and Saturdays (6)
    return date;
}

// Add createdDate to each user
users.forEach(user => {
    user.createdDate = getRandomDate();
});