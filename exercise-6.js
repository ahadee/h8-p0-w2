var i= 1;
console.log('1. Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA')

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i + ' - I love coding');
    }
    i++;
}

var j=20;

console.log('LOOPING KEDUA')

while (j>0) {
    if (j % 2 == 0) {
        console.log(j + ' - I will become fullstack developer');
    }
    j--;
}

console.log('\n');

console.log('2. Melakukan Looping Menggunakan For')
console.log('LOOPING PERTAMA');

for (var k = 1; k<=20; k++) {
     console.log(k + '- I love coding');
}

console.log('LOOPING KEDUA');

for (var l = 20; l>0; l--) {
    console.log(l + '- I will become fullstack developer');
}

console.log('\n');

console.log('3. Angka Ganjil dan Genap');
console.log('Problem 1');

var counter;

for (counter = 1; counter <= 100; counter++) {
    if (counter%2 == 0){
        console.log('GENAP');
    }
    else {
        console.log('GANJIL');
    }
}

console.log('\n');
console.log('Problem 2');

for (var counter1 = 1; counter1 <= 100; counter1+=2) {
    if (counter1%3 == 0) {
        console.log(counter1 + ' KELIPATAN 3');
    }
    else {
        console.log('""');
    }
}

console.log('\n');
console.log('Problem 3');

for (var counter2 = 1; counter2 <= 100; counter2+=5) {
    if (counter2%6 == 0){
        console.log(counter2 + ' KELIPATAN 6');
    }
    else {
        console.log('""');
    }
}

console.log('\n');
console.log('Problem 4');

for (var counter3 = 1; counter3 <=100; counter3+=9) {
    if (counter3%10 == 0) {
    console.log(counter3 + ' KELIPATAN 10');
    }
    else {
        console.log('""');
    }
}