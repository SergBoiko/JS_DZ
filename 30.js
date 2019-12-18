//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

arr = [10, 20, 30, 50, 235, 3000];
for(let number of arr){
    if(String(number).startsWith("1") || String(number.startsWith("2") || String(number).startsWith("5")){
        result += " " + number;
    }
}