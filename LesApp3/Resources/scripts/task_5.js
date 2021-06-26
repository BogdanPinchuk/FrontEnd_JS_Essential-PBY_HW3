let age = Number(prompt("Введите ваш возраст")),
    technology = prompt("Ведите 1 или 2.\n1 - JavaScript.\n2 - C#"),
    expirience = Number(prompt("Введите опыт работы в годах."));

let adult, specialization, position;

// базова умова
/*
if (age > 18) {
    adult = "совершеннолетний";
}
else {
    adult = "несовершеннолетний"
}
*/

// заміна
adult = (age > 18) ? "совершеннолетний" : "несовершеннолетний";

// базова умова
/*
if (technology == 1) {
    specialization = "Frontend";
}
else {
    specialization = "Backend";
}
*/

// заміна
specialization = (technology == 1) ? "Frontend" : "Backend";

// базова умова - помилка в умові, 
// не витримані математичні вимоги включених значень
// тобто десь має бути 1.5 і 3, а за даним прикладом це призведе до помилки 
/*
if (expirience == 0) {
    position = "Без опыта работы";
}
else if (expirience > 0 && expirience < 1.5) {
    position = "Junior";
}
else if (expirience > 1.5 && expirience < 3) {
    position = "Middle";
}
else if (expirience > 3) {
    position = "Senior";
}
else {
    position = "error";
}
*/

// заміна - немає нічого неможливого (тільки погано читається)
position = (isNaN(expirience) || expirience < 0) ? "error" :
    (expirience == 0) ? "Без опыта работы" : 
    (expirience > 0 && expirience < 1.5) ? "Junior" : 
    (expirience >= 1.5 && expirience < 3)? "Middle" : "Senior";

let result = `Возраст: ${adult}\nСпециализация: ${specialization}\nПозиция: ${position}`;

alert(result);
