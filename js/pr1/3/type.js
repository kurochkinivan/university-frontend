// Примитивы:
const undefVal = undefined;
console.log("undefVal", undefVal);
console.log("type:", typeof undefVal);
console.dir(undefVal);
console.log('------------------')

const nullVal = null;
console.log("nullVal", nullVal);
console.log("type:", typeof nullVal);
console.dir(nullVal);
console.log('------------------')

const numberVal = 42;
console.log("numberVal", numberVal);
console.log("type:", typeof numberVal);
console.dir(numberVal);
console.log('------------------')

const stringVal = 'My name is Ivan';
console.log("stringVal", stringVal);
console.log("type:", typeof stringVal);
console.dir(stringVal);
console.log('------------------')

const booleanVal = true;
console.log("booleanVal", booleanVal);
console.log("type:", typeof booleanVal);
console.dir(booleanVal);
console.log('------------------')

const bigIntVal = 9007199254740991n;
console.log("bigIntVal", bigIntVal);
console.log("type:", typeof bigIntVal);
console.dir(bigIntVal);
console.log('------------------')

const symbolValue = Symbol('description');
console.log("symbolValue", symbolValue);
console.log("type:", typeof symbolValue);
console.dir(symbolValue);
console.log('------------------')

// Объекты:
const person = {
    name: 'Ivan',
    age: 20
}
console.log("person", person);
console.log("type:", typeof person);
console.dir(person);
console.log('------------------')

const arr = [1, 3, 5, 10];
console.log("arr", arr);
console.log("type:", typeof arr);
console.dir(arr);
console.log('------------------')

const fn = function () { console.log('Hello') };
console.log("fn", fn);
console.log("type:", typeof fn);
console.dir(fn);
console.log('------------------')

const date = new Date();
console.log("date", date); 
console.log("type:", typeof date);  
console.dir(date);
console.log('------------------')