//Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. Через for of

result = "";
arr = [2, 3, 4, 5];
let prod = 1;
for(let element of arr){
    prod *= element;
}
result = prod;