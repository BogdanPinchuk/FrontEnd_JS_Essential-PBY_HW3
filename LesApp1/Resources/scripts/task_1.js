let value = Number(prompt("Введете любое цифровое значение:"));
// знак введеного числа
let sign;

// Це завдання схоже на функцію sign()
if (value < 0) {
    sign = -1;
} else if (value == 0) {
    sign = 0;
} else if (value > 0) {
    sign = +1;
} else {
    alert("Неверный ввод значения.");
}

// не пропускаємо до виконання, через:
// Boolean(undefined) = false;
if (Boolean(sign)) {
    alert(`Знак введеного Вами числа: sign(${value}) = ${sign};`);
}
