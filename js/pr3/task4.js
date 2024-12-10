{
     function calculate(a) {
          return function(b) {
               return function(c) {
                    console.log(a + b + c)
               }
          }
     }
}

console.log(calculate(1)(2)(3))