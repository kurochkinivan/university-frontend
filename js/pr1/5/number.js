const val1 = '2575.312';
const val2 = '9321.753';

const num1 = Number(val1);
const num2 = Number(val2);

const res = num1 + num2;

const formattedRes = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
}).format(res);

console.log(formattedRes);