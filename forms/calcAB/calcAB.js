
//Preparing to return the products of the numbers
function product(n1,n2) {
  return n1 * n2
  }

//Creating an array with the numbers to be multiplied
let myNumbers = [123,433,54326,2234,1919,1123,1928,3374,23,190,33874]
let calculate = 1

//Returning the products of the numbers
for (i = 0; i < myNumbers.length; i++)
  calculate = myNumbers[i] * calculate

console.log(calculate)
