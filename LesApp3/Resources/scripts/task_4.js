let product1 = "Бумага офисная А4, 80 г/м2, 500 л",
    product2 = "Биндеры для бумаги 51 мм",
    product3 = "Ручка шариковая синяя";

let productPrice1 = 280.25,
    productPrice2 = 56,
    productPrice3 = 12.50;

let productQuantity1 = Number(prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0)),
    productQuantity2 = Number(prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0)),
    productQuantity3 = Number(prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0));

let totalPriceProduct1 = productPrice1 * productQuantity1,
    totalPriceProduct2 = productPrice2 * productQuantity2,
    totalPriceProduct3 = productPrice3 * productQuantity3;

let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;

// знижка
let discont = 0;

if (500 <= total && total < 1000) {
    discont = 5;
}
else if (1000 <= total && total < 1500) {
    discont = 10;
}
else if (total >= 1500) {
    discont = 15;
}

console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);

// врахування знижки
if (discont > 0) {
    total -= total * discont / 100;
    console.log("Стоимость заказа с учетем скидки " + total.toFixed(3));
}
else {
    console.log("Стоимость заказа " + total);
}

if (discont < 15) {
    let shipping = confirm("Заказываете доставку курьером?");

    if (shipping) {
        total += 40;
        console.log("Доставка 40.");
    }
}
else {
    console.log("Доставка бесплатная.");
}

console.log("Всего " + total.toFixed(3));
