# JavaScript 

**Прототип** — это объект-делегат, используемый для реализации прототипного наследования. Можно сказать, что в js все является объектами. Массивы, строчки, числа, функции и так далее. Любой объект может быть использован в качестве прототипа другого объекта, и сам прототип может иметь свой собственный прототип. Если прототип имеет непустую ссылку на свой прототип и т.д., такая связка называется цепью прототипов.
Создавать цепь прототипов можно с помощью Object.setPrototypeOf(...).
```js
const arr1 = [5, 5, 5 ,5, 5]
const arr2 = [1, , 2, 3, 4]
arr2[1] // undefined
Object.setPrototypeOf(arr2, arr1)
arr2[1] // 5
```

В том случае, если метод не найден у какого-либо объекта, то он ищется выше по цепочке и так до undefined.
```js
const numberObj = new Number(100);
numberObj.hasOwnProperty('toString') // false
Object.getPrototypeOf(numberObj).hasOwnProperty('toString') // true
```

Метод **console.dir()** используется для отображения JavaScript-объектов в виде дерева, позволяя исследовать их свойства и методы. Это особенно полезно для анализа сложных объектов, таких как DOM-элементы или пользовательские объекты.

Итого:
* В JavaScript’е все является объектами.
* Наследование работает через прототипы.
* Нет копирования по значению и по ссылке.
* Нет примитивных типов и нет типа ссылочных типов.
* Передача параметров в функцию для всех типов одинакова.