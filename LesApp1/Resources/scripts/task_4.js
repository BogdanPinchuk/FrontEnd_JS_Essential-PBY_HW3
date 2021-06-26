let productPrice = 101.5, // цена товара
    productQuantity = 50;  // количество единиц товара на складе

let mes = `На складе ${productQuantity} единиц товара.\n`

let count = Number(prompt(mes + "Сколько единиц товара Вы хотите приобрести?", 1));

if (isNaN(count)) {
    mes = "Некоректный ввод значения.";
    alert(mes);
} else if (count <= 0) {
    mes = "Значение должно быть больше нуля!";
    alert(mes);
} else {
    // згода на покупку
    let access = true;

    if (count > productQuantity) {
        mes = "Внимание, Вы хотите заказать больше единиц товара чем есть в данный момент на складе!\n";
        access = confirm(mes + "На данный момент, мы не можем предоставить Вам такое количество.\nХотите ли Вы купить весь имеющийся товар?");
    }

    // покупка товару
    if (access) {
        let totalSum, leftInStorage;

        // варіант 1
        // припускаємо, що поки тернарний оператор невідомий
        if (count <= productQuantity) {
            totalSum = productPrice * count;
            leftInStorage = productQuantity - count;
        } else {
            totalSum = productPrice * productQuantity;
            leftInStorage = productQuantity - productQuantity;
        }

        // варіант 2
        // totalSum = productPrice * ((count <= productQuantity) ? count : productQuantity);
        // leftInStorage = productQuantity - ((count <= productQuantity) ? count : productQuantity);

        mes = `Общая стоимость Вашего заказа ${totalSum}\n`;
        alert(mes);
        mes = `Количество товара останется на складе после покупки ${leftInStorage}`;
        alert(mes);
    } else {
        mes = "Зайдите вдругой раз, мы подвезем больше единиц товара!";
        alert(mes);
    }
}
