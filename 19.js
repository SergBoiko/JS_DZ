<<<<<<< HEAD
//Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
var number;
do {
  number = prompt("Enter number");
} while (isNaN(number));
=======
//Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
var number;
do {
  number = prompt("Enter number");
} while (isNaN(number));
>>>>>>> origin/master
alert("Square of " + number + " is " + Math.pow(number, 2));