// console.group('Pętla while');
//     var i = 1;
//     while (i <= 100) {
//         // if (!(i % 2)){
//         //     i++;
//         //     continue;
//         // }
//         if (i>25){
//             break;
//         }
//         console.log(i);
//         i++;
//     }
//     console.log(i);
//     console.log('koniec programu');
// console.groupEnd();

// console.group('pętla do while');
//     var j = 1;
//     do {
//         console.log(j);
//         j++;
//     } while (j <= 20);
//     console.log(j);
//     console.log('koniec programu');
// console.groupEnd();

console.group('pętla for');
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
console.groupEnd();

console.group('petla for i tablice');
    var members = [
        'Jacek',
        'Adam',
        'Joanna',
        'Zuzanna',
        'Beata',
        'Agnieszka',
        'Wacek'
    ];

    for (let i = 0, l = members.length; i < l; i++) {
        console.log((i+1) + '. ' + members[i]);
    }
console.groupEnd();

console.group('pętla for in i obiekty');
    var user = {
        firstName: 'Jan',
        lastName: 'Kowalski',
        age: 38,
        role: 'admin',
        active: true,
        footSize: 42.5
    };
    for (let key in user) {
        console.log(key + ': ' + user[key]);
    }
console.groupEnd();

console.group('petle zagnieżdzone');
    var max = 10;
    var x, y;

    for (x = 1; x <= max; x++){
        for (y = 1; y <= max; y++){
            console.log(x + ' x ' + y + ' = ' + (x*y));
        }
        
        console.log('-----');
    }

console.groupEnd();



