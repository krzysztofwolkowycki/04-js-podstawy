console.group('Operacje na string');

    var text = 'Ala ma kota';
    console.log(text.length);
    console.log(text[0]);
console.groupEnd();

console.group('Operacje na number');
    console.log(isNaN('5')); //false 
    console.log(isNaN('asd')); //true - to nie jest liczba
    console.log(isNaN('52asd'));

    var input = '1234';
    input = parseInt(input);
    console.log(input, typeof input);

    var input = '12.34';
    input = parseFloat(input);
    console.log(input, typeof input);
console.groupEnd();