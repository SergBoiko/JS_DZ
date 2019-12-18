/*Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().*/

let randomArr= [];
let randomArrSize = 4;
let arrPower = [];
let powerToCalc = 5;

//generate array
for (let i = 0; i < randomArrSize; i++) {
  randomArr.push((Math.random() * 10).toFixed(2));
}

for (let i = 0; i < randomArr.length; i++) {
  let itemPow = 1;
  for (let pow = 0; pow < powerToCalc; pow++) {
    itemPow *= randomArr[i];
  }
  arrPower.push(itemPow.toFixed(2));
}