alert("Вычисление объема цилиндра.");
//  V=π * r в квадрате * h
let V;
const Pi = 3.1415926535;
let r = Number(prompt("Введите радиус цилиндра"));
let h = Number(prompt("Введите высоту цилиндра"));

let a = r <= 0;
let b = h <= 0;
let c = a || b;

if (!(Boolean(r) && Boolean(h))) {
    alert("Некоректный ввод значения.");
} else if (r <= 0 || h <= 0) {
    alert("Значение должно быть больше нуля!");
} else {
    V = Pi * r ** 2 * h;
    alert(`Объем цилинда с высотой ${h} и радиуосом ${r} = ${V}`);
}
