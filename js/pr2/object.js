const object1 = {
    name: 'Student1',
    money: 100,
    toString() {
        return `У студента ${this.name} в кошельке: ${this.money} рублей`;
    },
    valueOf() {
        return ''
    }
}

const object2 = {
    name: 'Student2',
    money: 200,
    toString() {
        return `У студента ${this.name} в кошельке: ${this.money} рублей`;
    },
        valueOf() {
        return ''
    }
}

const object3 = {
    name: 'Student3',
    money: 300,
    toString() {
        return `У студента ${this.name} в кошельке: ${this.money} рублей`;
    },
    valueOf() {
        return ''
    }
}
const divider = () => {
    return ' | ';
}

divider.toString = () => {
    return ' | ';
}

const result = (`${object1}` + object1) + divider + (`${object2}` + object2) + divider + (`${object3}` + object3)
console.log(result)
