/*09. Обратите внимание на те или иные расчеты, нужные вам в обычной жизни. Это может быть оплата за электричество, количество километров, пройденных за месяц (если вы, например, ходите по одному и тому же маршруту каждый день), количество батонов, кофе, масла, всего чего угодно и так далее. Так же можете написать любую калькуляцию, нужную вам в работе. Представьте это в форме кода, подобного следующему:

var firstParameter = 5; //смысл переменной
var secondParameter = 10; //иной комментарий, поясняющий переменную

var somePartialResult = firstParameter*5; //суть переменной и формулы
var someOtherPartialResult = secondParameter/100500; //

var result = somePartialResult + someOtherPartialResult; //суть результата и переменной

То есть, напишите калькуляцию, которая из входных данных подсчитывает результат, с осмысленными названиями переменных и комментариями к ним и формулам, использованным в калькуляции.

Суть - научиться правильно и осмысленно называть переменные и не только 😉*/


function sportSupplimentsInMonth(){
    let vitaminsPerDay = 3; //количество выпитых витаминов в день
    let omega3PerDay = 2; // количество Омега 3 выпитых  в день
    let amountOfSupplimentsPerDay =  vitaminsPerDay + omega3PerDay; //общая сумма добавок выпитых  за день
    let amountOfSupplimentsInMonth = amountOfSupplimentsPerDay * 30;

    result = "";
    result+= "Result:" + amountOfSupplimentsInMonth;
}

