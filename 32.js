//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. (посмотрите replace например)

let str="aaa@bbb@ccc";
alert(str.replace(/@/g, '!'));