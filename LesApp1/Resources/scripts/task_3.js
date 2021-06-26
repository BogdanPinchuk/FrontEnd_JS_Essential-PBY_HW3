let product1 = "Бумага офисная А4, 80 г/м2, 500 л",
    product2 = "Биндеры для бумаги 51 мм",
    product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25,
    productPrice2 = 56,
    productPrice3 = 12.50;

let productQuantity1 = Number(prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0)),
    productQuantity2 = Number(prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0)),
    productQuantity3 = Number(prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0));

let isNotCorrectEnter = isNaN(productQuantity1) || isNaN(productQuantity2) || isNaN(productQuantity3),
    isLessThan0 = productQuantity1 < 0 || productQuantity2 < 0 || productQuantity3 < 0;

if (isNotCorrectEnter) {
    console.log("Некоректный ввод значения.");
    alert("Некоректный ввод значения.");
} else if (isLessThan0) {
    console.log("Значение должно быть больше нуля!");
    alert("Значение должно быть больше нуля!");
} else {
    // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отедльности и всего за все продукты
    // используйте форматированный вывод
    let totalPriceProduct1 = productPrice1 * productQuantity1,
        totalPriceProduct2 = productPrice2 * productQuantity2,
        totalPriceProduct3 = productPrice3 * productQuantity3;

    let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
    console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
    console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
    console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
    console.log("Всего " + total);
}
