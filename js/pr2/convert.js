function stringToInteger(str) {
    // Преобразует строку в целое число
    return parseInt(str);
}

function floatToFixed(num, decimals) {
    // Округляет число с плавающей точкой до указанного количества десятичных знаков
    return parseFloat(num.toFixed(decimals));
}

function numberToString(num) {
    // Преобразует число в строку
    return num.toString();
}

function booleanToString(bool) {
    // Преобразует логическое значение в строку
    return bool.toString();
}

function stringToBoolean(str) {
    // Преобразует строку в логическое значение
    return str.toLowerCase() === 'true';
}

function formatCurrency(num) {
    // Форматирует число как валюту
    return new Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'RUB' }).format(num);
}

function toBoolean(value) {
    // Преобразует значение в логическое с помощью двойного отрицания
    return !!value;
}

function invertBoolean(value) {
    // Инвертирует логическое значение с помощью отрицания
    return !value;
}

function toNumber(value) {
    // Преобразует значение в число с помощью унарного оператора +
    return +value;
}

console.log(stringToInteger("42.5"));
console.log(floatToFixed(3.14159, 2));
console.log(booleanToString(true));
console.log(stringToBoolean("false"));
console.log(formatCurrency(1234.56));
console.log(toNumber("123.45"));
console.log(booleanToString(5>3));
console.log(toBoolean("hello"));
console.log(toBoolean(0));
console.log(invertBoolean(10 > 5));
console.log(invertBoolean(stringToBoolean("false")));
console.log(toBoolean([]))