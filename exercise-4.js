var day = '30', // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
    month = '1', // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
    year = '2300'; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


switch (month)
{
    case "1":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)){
        console.log(day + ' Januari ' + year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "2":
        if ((day>0 && day<=29) && (year>=1900 && year<=2200)){
        console.log(day +' Februari '+ year);
        }
        else {
            console.log('Anda memasukkan format date yang salah! jumlah hari di bulan Februari hanya 29');
        }
        break;
    case "3":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)){
        console.log(day +' Maret '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "4":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)){
        console.log(day +' April '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "5":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {    
        console.log(day +' Mei '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "6":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' Juni '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "7":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' Juli '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "8":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' Agustus '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "9":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' September '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "10":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' Oktober '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "11":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' November '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    case "12":
        if ((day>0 && day<=31) && (year>=1900 && year<=2200)) {
        console.log(day +' Desember '+ year);
        }
        else {
        console.log('Anda memasukkan format date yang salah');
        }
        break;

    default:
        console.log('Anda memasukkan format date yang salah');
        break;
}


