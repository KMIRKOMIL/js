let yosh = +prompt('Yoshingizni kiriting')
    while(isNaN(yosh) || yosh >= 151 || yosh <= 0) {
       yosh = +prompt('Xozirgi yildan tug`ilgan yilingizni ayirib kiriting!!!');
    }
    if (yosh <= 18) {
        alert('Yoshsiz! O`qishingiz kerak.');
        console.log('Yoshsiz! O`qishingiz kerak.');
    } else if (yosh <= 50) {
        alert('Ishlashingiz kerak.');
        console.log('Ishlashingiz kerak.');
    } else if (yosh <= 60) {
        alert('Yaqinda nafaqaga chiqasiz.');
        console.log('Yaqinda nafaqaga chiqasiz.');
    } else {
        alert('Nafaqa yoshidasiz.');
        console.log('Nafaqa yoshidasiz.');
    }