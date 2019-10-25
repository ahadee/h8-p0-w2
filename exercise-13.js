function xo(str) {
    //var a = str.length;
    var hasilX;
    var hasilO;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            hasilX += 'x' 
        } else {
            hasilO += 'o';
        }
    }
    if (hasilX.length == hasilO.length) {
        return true
    } else {
        return false
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true