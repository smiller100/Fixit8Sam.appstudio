function product(n1,n2) {
  return n1 * n2
  }

let numbers = [123,433,54326,2234,1919,1123,1928,3374,23,190,33874]
let runningTotal = 1
for (i = 0; i < numbers.length; i++)
  runningTotal = numbers[i] * runningTotal

console.log(runningTotal)
