'use strict';

var NUM_PRODUCT = 18;
var DISCOUNT = 1.15;
var MIN_PRICE = 5000;
var MAX_PRICE = 20000;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function calculateDiscount(price) {
  return Math.floor(price * DISCOUNT / 100) * 100; 
}

function roundToHundredths(number) {
  return Math.floor(number / 100) * 100;
}


function generateProductCards() {
  var names = ['bosch-2000', 'bosch-3000', 'bosch-6000', 'bosch-9000', 'makita-td-110'];
  var brands = ['BOSCH', 'Makita', 'Vagner', 'Mega', 'Proline'];
  var titles = [
    'Перфоратор BOSCH BFG 2000',
    'Перфоратор BOSCH BFG 3000',
    'Перфоратор BOSCH BFG 6000',
    'Перфоратор BOSCH BFG 9000',
    'Шуруповерт Makita TD-110'
  ];
  var categories = ['Перфораторы', 'Шуруповерты', 'Ключи', 'Отвертки'];
  var flag = ['new', 'promo', ''];
  var products = [];

  for (var i = 0; i < NUM_PRODUCT; i++) {
    var product = {};

    product.url = 'img/catalog/' + getRandomElement(names) + '.jpg';
    product.brand = getRandomElement(brands);
    product.title = getRandomElement(titles);
    product.price = roundToHundredths(getRandomNumber(MIN_PRICE, MAX_PRICE));
    product.category = getRandomElement(categories);
    product.discount = calculateDiscount(product.price);
    product.flag = getRandomElement(flag);
    product.isElectric = getRandomElement([true, false]);

    products.push(product);
  }

  return products;
}

var productCards = generateProductCards();

console.log(productCards);



