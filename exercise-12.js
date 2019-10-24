function konversiMenit(menit) {
    var jam = (menit/60);
    var jam_integer = Math.floor(jam);
    var mnt = (jam - jam_integer) * 60;
    var mnt_integer = Math.round(mnt);

    if (mnt_integer<10){
        return jam_integer + ':0' + mnt_integer;
    }
    else {
    return jam_integer + ':' + mnt_integer;
    }
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 

