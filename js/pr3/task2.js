{
     // ваш код
    function statsArray() {

    }
}

function ArrayInfo(...args) {
    console.log('length', args.length)
    console.log('min', Math.min(...args))
    console.log('max', Math.max(...args))
} 

console.log("-----------")

ArrayInfo(...[1, 2, 3, 4, 5])
