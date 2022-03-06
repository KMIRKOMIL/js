//              while (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
//                  n1 = +prompt('Son bu raqam degani');
//                  n2 = +prompt('Son bu raqam degani');
//                  n3 = +prompt('Son bu raqam degani')
//              }

let n1 = +prompt("Birinchi sonni kiriting");
while (isNaN(n1) || n1 == 0) {
    n1 = +prompt ('XATO');
}
let n2 = +prompt("Ikkinchi sonni kiriting");
while (isNaN(n2) || n2 == 0) {
    n2 = +prompt ('XATO');
}
let n3 = +prompt("Uchinchi sonni kiriting");
while (isNaN(n3) || n3 == 0) {
    n3 = +prompt ('XATO');
}
if ((n1 >= n2 && n1 <= n3) || (n1 >= n3 && n1 <= n2)) {
    alert('O`rtadagi son ' + n1);
    console.log('O`rtadagi son ' + n1);
} else if ((n2 >= n1 && n2 <= n3) || (n2 >= n3 && n2 <= n1)) {
    alert('O`rtadagi son ' + n2);
    console.log('O`rtadagi son ' + n2);
} else if ((n3 >= n2 && n3 <= n1) || (n3 >= n1 && n3 <= n2)) {
    alert('O`rtadagi son ' + n3);
    console.log('O`rtadagi son ' + n3);
}