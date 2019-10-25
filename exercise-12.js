function konversiMenit(menit) {
    
    var mnt = menit % 60;
    var mnt_integer = Number(mnt);
    var jam = (menit - mnt) / 60;
    var jam_integer = Number(jam);

    if (mnt_integer<10){
        return jam_integer + ':0' + mnt;
    }
    else {
    return jam_integer + ':' + mnt;
    }
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 

