//Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите сумму всех charCode этой переменной
let str="Привет, Мир!";
let charCodeSum = 0;
for (let i = 0; i < str.length; i++) {
charCodeSum += str.charCodeAt(i);
  console.log( str.charCodeAt(i));
}
alert("Char codes sum is: " + sumCharCode);
