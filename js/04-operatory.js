console.group('Operatory arytmetyczne');
    var numA = 6 + 10;

    console.log(numA);

    numA = numA - 4;
    console.log(numA);

    numA = numA * 5;
    console.log(numA);

    numA = numA / 2;
    console.log(numA);

    numA = numA % 7;
    console.log(numA);
console.groupEnd();
    
console.group('Skrócone operatory arytmetyczne');

    var numB = 10;
    console.log(numB);

    numB += 6;
        console.log(numB);

    numB -= 4;
    console.log(numB);

    numB *= 5;
    console.log(numB);

    numB /= 2;
    console.log(numB);

    numB %= 7;
    console.log(numB);   
console.groupEnd();

console.group('Konkatenacja');

    var text1 = 'Ala';
    var text2 = 'ma';
    var text3 = 'kota';

    var fullText = text1 + ' ' + text2 + ' ' + text3;
    console.log(fullText);

    var testA = 10;
    var testB = '20';
    console.log(testA + testB);

console.groupEnd();

console.group('Operatory porówniania');
    
    var testX = "10";
    var testY = 20;
    console.log(testX > testY);
    console.log(testX >= testY);
    console.log(testX < testY);
    console.log(testX <= testY);
    console.log(testX == testY);
    console.log(testX === testY);
console.groupEnd();

console.group('Operatory logiczne');

    var age = 18;
    var role = 'admin';

    // 1 && 0 -> 0 false
    console.log(age >= 18 && 'mode' == role); // koniunkcja (logiczna)
    
    // 1 || 0 -> 1 true
    console.log(age >= 18 || 'mode' == role); // alternatywa 

    // false
    console.log(!(age >= 18));
console.groupEnd();

console.group('Inkrementacja i dekrementacja (post i pre)');
    var numZ = 10;
    console.log(numZ);
    console.log(numZ++); //post inkrementacja
    console.log(++numZ); //pre inkrementacja
    console.log(numZ);
    console.log(numZ--); // post dekrementacje
    console.log(--numZ); // pre dekremendacje
console.groupEnd();