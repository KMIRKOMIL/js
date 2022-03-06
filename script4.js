let son1 = +prompt('Sonni kiriting')
while (isNaN(son1) || son1 == 0) {
    son1 = +prompt('Son degandan keyin son kiritingda')
}
let son2 = +prompt('Daraja sonini kiriting')
while (isNaN(son2) || son2 == 0) {
    son2 = +prompt('Son degandan keyin son kiritingda')
}
alert(son1 + ' ning ' + son2 + ' darajasi ' + son1 ** son2 + ' bo`ladi.')