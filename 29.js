/*Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - пропускаем итерацию*/

arr = [1, 2, 5, 9, 4, 13, 4, 10];
for(let number of arr){
    if(number === 4){
        result = "Есть!";
        break;
    }
}