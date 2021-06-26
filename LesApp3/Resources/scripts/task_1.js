let value = Number(prompt("Введите число 1 или 2"));

// базова умова
/*
if (value == 1) {
    alert("Вы ввели число 1");
}
else if (value == 2) {
    alert("Вы ввели число 2");
}
else {
    alert("Вы ввели неправильное значение");
}
*/

let mes;

// варіант 1
switch (value) {
    case 1:
        mes = `Вы ввели число ${value}`;
        break;
    case 2:
        mes = `Вы ввели число ${value}`;
        break;
    default:
        mes = "Вы ввели неправильное значение";
        break;
}

// варіант 2 - більш спрощений
/*
switch (value) {
    case 1:
    case 2:
        mes = `Вы ввели число ${value}`;
        break;
    default:
        mes = "Вы ввели неправильное значение";
        break;
}
*/

alert(mes);
