let country = prompt("Введите название страны");

// базова реалізація
/*
switch (country) {
    case "USA":
    case "Great Britain":
        alert("Английский язык");
        break;
    case "Germany":
        alert("Немецкий язык");
        break;
    case "France":
        alert("Французский язык");
        break;
    default:
        alert("Указанной страны нет в списке");
        break;
}
*/
let mes;

if (country == "USA" || country == "Great Britain") {
    mes = "Английский язык";
}
else if (country == "Germany") {
    mes = "Немецкий язык";
}
else if (country == "France") {
    mes = "Французский язык";
}
else {
    mes = "Указанной страны нет в списке";
}

alert(mes);
