{
     // ваш код
    function statsArray() {

    }
}

function arrayInfo(...args) {
    console.log('length', args.length)
    console.log('min', Math.min(...args))
    console.log('max', Math.max(...args))
} 

console.log("-----------")

arrayInfo(1, 2, 3, 4, 5)
