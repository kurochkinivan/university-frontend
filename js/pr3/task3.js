{
     // ваш код
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;

    const calculate = (x, y, op) => {
        return op(x, y);
    }

    globalThis.add = add; 
    globalThis.subtract = subtract;
    globalThis.multiply = multiply;
    globalThis.divide = divide;
    globalThis.calculate = calculate;
}



console.log("-----------")

console.log(calculate(1, 2, add))
