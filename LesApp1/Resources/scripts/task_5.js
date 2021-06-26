let login = "admin",
    password = "12345";

let inputLogin = prompt("Введите логин"),
    inputPassword = prompt("Введите пароль");

// базовий приклад
/*
if (inputLogin == login) {
    if (inputPassword == password) {
        alert("Вы авторизованы!");
    }
}
else {
    alert("Логин или пароль введены неправильно");
}
*/

// для кон'юнкції - варіант 1
if (inputLogin == login && inputPassword == password) {
    alert("Вы авторизованы!");
}
else {
    alert("Логин или пароль введены неправильно.");
}

// для диз'юнкції - варіант 2
// https://uk.wikipedia.org/wiki/Алгебра_логіки
// правило Булевої алгебри
// x ^ y = !(!x v !y)
// x v y = !(!x ^ !y)
/*
if (!(!(inputLogin == login) || !(inputPassword == password))) {
    alert("Вы авторизованы!");
}
else {
    alert("Логин или пароль введены неправильно.");
}
*/