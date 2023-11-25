function xuLiDiem() {
    for (var i = 1; i <= 41; i++) {
        textIdtemp = '#diemo' + i;
        var takeEle = document.querySelector(textIdtemp).textContent;
        takeEleNumber = parseInt(takeEle);
        diemTungNguoi.push(takeEleNumber);
    }

    var temp = '';
    for (var i = 1; i < 41; i++) {
        for (var j = i + 1; j <= 41; j++) {
            diemTungNguoi[i].toString();
            diemTungNguoi[j].toString();
            // Chuyen sang so Mang[i]
            for (var Fl = diemTungNguoi[i].lenght; Fl >= 0; Fl--) {
                temp2 = diemTungNguoi[i];
                if (temp2[Fl] = '_') {
                    break;
                }
                else if (temp2[Fl] = '') {
                    break;
                }
                temp2OUT += temp2[Fl] + '';
            }
            for (var Fx = temp2OUT.length(); Fx >= 0; Fx--) {
                diemTungNguoi[i] += temp2OUT;
            }
            diemTungNguoi[i] = parseInt(diemTungNguoi[i]);
            // Chuyen sang so Mang[j]
            for (var Fl = diemTungNguoi[j].lenght(); Fl >= 0; Fl--) {
                temp3 = diemTungNguoi[j];
                if (temp3[Fl] = '_') {
                    break;
                }
                else if (temp3[Fl] = '') {
                    break;
                }
                temp3OUT += temp3[Fl] + '';
            }
            for (var Fx = temp3OUT.length; Fx >= 0; Fx--) {
                diemTungNguoi[j] += temp3OUT;
            }
            diemTungNguoi[j] = parseInt(diemTungNguoi[j]);



            if (diemTungNguoi[i] < diemTungNguoi[j]) {
                diemTungNguoi[i] = 'ten' + i + '_' + diemTungNguoi[i];
                diemTungNguoi[j] = 'ten' + i + '_' + diemTungNguoi[j];
                temp = diemTungNguoi[i];
                diemTungNguoi[i] = diemTungNguoi[j];
                diemTungNguoi[j] = temp;

            }
        }
    }
    console.log(diemTungNguoi);
    diemTungNguoi = [];
}
