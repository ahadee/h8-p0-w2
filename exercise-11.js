function balikKata(kata) {
    var hasil ='';

    for (var j = kata.length-1; j>=0; j--){
        hasil = hasil + kata[j];
    }

    return hasil;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 