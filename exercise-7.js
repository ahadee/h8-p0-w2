var rows1 = 5;
var str2 = '';

for (var i = 1; i <=rows1; i++) {
    str2 += '*';
    str2 += '\n';
}
console.log(str2);

console.log('\n');


var rows2 = 5;
var str = '';

for (var j = 1; j <=rows2; j++){
    for (var k = 1; k <=rows2; k++) {
        str = str + '*';    
    }
    str += '\n'; 
}
console.log(str);
console.log('\n');


var rows3 = 5;
var str1 = '';

for (var x = 0; x < rows3; x++){
    for (var y = 0; y <= x; y++){
        str1 += '*';
    }
    str1 += '\n';
}
console.log(str1);
