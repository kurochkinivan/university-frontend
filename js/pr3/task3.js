{
     // ваш код
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;

    const calculate = (x, y, op) => {
        return op(x, y);
    }

    console.log("-----------")
    console.log(calculate(1, 2, add))
}



