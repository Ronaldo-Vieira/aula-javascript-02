var num1 = new Number(10) 
console.log(num1)

var num2 = new Number(3)
console.log(num2)

var num3 = new Number(9)
console.log(num3)

var num4 = new Number(99.9)
console.log(num4)

var num5 = new Number(721)
console.log(num5)

console.log(num1 < Number.MAX_VALUE ? "É menor" : "É maior")
console.log(num2 == Number.NaN ? "É igual" : "Não é igual")
console.log(num5 <= num3 ? "É menor ou igual" : "É maior")
