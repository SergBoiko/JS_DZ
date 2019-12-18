//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [3, -4, 12, -6, 0, 2, -8, 1, 17, 9, -5];
let sumOfEvenNumbers=0;
for (const value of arr) {
  if (value > 0) {
    sumOfEvenNumbers+=value;
  }
}
console.log(sumOfEvenNumbers);