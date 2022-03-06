let ism = prompt("Ismingiz");
while (!isNaN(ism) || ism <= 0) {
    ism = prompt('Ism raqam bilan kiritilmaydi')
}
console.log("Mening ismim " + ism);
alert("Mening ismim " + ism);

//

var son = +prompt("Yoshingiz");
while (isNaN(son) || son <= 0) {
    son = +prompt('Yosh raqam bilan kiritiladi')
}
console.log("Yoshim " + son + " da");
alert("Yoshim " + son + " da");

//

var son = +prompt("7 + 13 = ?")
while (isNaN(son) || son <= 0 || son !== (7 + 13)) {
    son = +prompt('Yana o`ylab ko`ring 7 + 13')
}
console.log("1. Javobingiz to`g`ri 7 + 13 = " + son);
alert("1. Javobingiz to`g`ri 7 + 13 = " + son)

//

var son = +prompt("81 + 19 = ?")
while (isNaN(son) || son <= 0 || son !== (81 + 19)) {
    son = +prompt('Yana o`ylab ko`ring 81 + 19')
}
console.log("2. Javobingiz to`g`ri 82 + 19 = " + son);
alert("2. Javobingiz to`g`ri 81 + 19 = " + son)

//

var son = +prompt("5 * 3 = ?")
while (isNaN(son) || son <= 0 || son !== (5 * 3)) {
    son = +prompt('Yana o`ylab ko`ring 5 * 3')
}
console.log("3. Javobingiz to`g`ri 5 * 3 = " + son);
alert("3. Javobingiz to`g`ri 5 * 3 = " + son)

//

var son = +prompt("7 * 11 = ?")
while (isNaN(son) || son <= 0 || son !== (7 * 11)) {
    son = +prompt('Yana o`ylab ko`ring 7 * 11')
}
console.log("4. Javobingiz to`g`ri 7 * 11 = " + son);
alert("4. Javobingiz to`g`ri 7 * 11 = " + son)

//

var son = +prompt("9 : 3 = ?")
while (isNaN(son) || son <= 0 || son !== (9 / 3)) {
    son = +prompt('Yana o`ylab ko`ring 9 : 3')
}
console.log("5. Javobingiz to`g`ri 9 : 3 = " + son);
alert("5. Javobingiz to`g`ri 9 : 3 = " + son)

//

var son = +prompt("480 : 40 = ?")
while (isNaN(son) || son <= 0 || son !== (480 / 40)) {
    son = +prompt('Yana o`ylab ko`ring 480 : 40')
}
console.log("6. Javobingiz to`g`ri 480 : 40 = " + son);
alert("6. Javobingiz to`g`ri 480 : 40 = " + son)

//

var son = +prompt("20 % 3 = ?")
while (isNaN(son) || son <= 0 || son !== (20 % 3)) {
    son = +prompt('Yana o`ylab ko`ring 20 % 3')
}
console.log("7. Javobingiz to`g`ri 20 % 3 = " + son);
alert("7. Javobingiz to`g`ri 20 % 3 = " + son)