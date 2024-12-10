{
  function createGreeter(language) {
    return function (name) {
      return language === "en" ? `Hello, ${name}!` : `Привет, ${name}!`;
    }
  }
}


console.log("-----------")

function ModifyName(name) {
  return String(name).toUpperCase()
}

const RemoveSpaces = function (name) {
  return String(name).replaceAll(' ', '')
}

const FirstThreeLetters = (name) => {
  return String(name).substring(0, 3)
}
const FirstTwoLetters = (name) =>
  String(name).substring(0, 2)

const russianGreeter = createGreeter('ru')
function fn1(name) {
  return russianGreeter(name)
}

const englishGreeter = createGreeter('en')
function fn2(name) {
  return englishGreeter(name)
}

console.log(ModifyName('ivan'))
console.log(RemoveSpaces('   ivan   '))
console.log(FirstThreeLetters('ivan'))
console.log(FirstTwoLetters('ivan'))
console.log(fn1('ivan'))
console.log(fn2('ivan'))




