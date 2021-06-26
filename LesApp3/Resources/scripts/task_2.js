let mes = "Введите номер времени года:";

let season = Number(prompt(mes));

let result;

switch (season) {
    case 1:
        result = "зима";
        break;
    case 2:
        result = "весна";
        break;
    case 3:
        result = "лето";
        break;
    case 4:
        result = "осень";
        break;
    default:
        result = "Ошибка ввода!";
        break;
}

alert(result);
