// console.group('Syntax Error');
    
//     console.log('test');

//     for (let i = 1; i < 10; i++) {
//         console.log(i);
//     }

// console.groupEnd();


// console.group('TypeError');

//     var number = 10;
//     var user = {};

//     // number();
//     user.test();

// console.groupEnd();

// console.group('ReferenceError');

//     // console.log(test());

//     // console.log(b);

//     // consol.log(b);

// console.groupEnd();


console.group('wykrywanie błędów');

    // console.group('Przykład 1');
    //     // var members = [
    //     //     'Ania',
    //     //     'Jacek',
    //     //     'Kasia'
    //     // ];

    //     // var team = [
    //     //     'Zbyszek',
    //     //     'Czesiek',
    //     //     'Jasiek'
    //     // ];

    //     // function printNames (names) {
    //     //     var namesCount = names.length;

    //     //     for (let i = 0; i < namesCount; i++) {
    //     //         console.log(names[i]);
    //     //     }
    //     // }

    //     // printNames(members);
    //     // printNames(team);
    // console.groupEnd();

    // console.group('Przykład 2');
    //     var members = [
    //         'Maciek',
    //         'Ania',
    //         'Zbyszek',
    //         'Ania',
    //         'Jacek',
    //         'Ania',
    //         'Jacek',
    //         'Zosia',
    //         'Ania'
    //     ];

    //     function countOccurences(arr, blueprint) {
    //         var count = 0;
    //         for (let i = 0, l = arr.length; i < l; i++) {
    //             if (arr[i] === blueprint) {
    //                 count++;
    //             }
    //         }

    //         return count;
    //     }

    //     console.log('Wystąpienia Ani', countOccurences(members, 'Ania')); //4
    //     console.log('Wystąpienia Jacka', countOccurences(members, 'Jacek')); //2

    //     var c = 0;
    //     for (let i = 0, l = members.length; i < l; i++) {
    //         if (5 === members[i].length) {
    //             c++;
    //         }
    //     }

    //     console.log(c);
    // console.groupEnd();

    console.group('Przykład 3');

    function test () {
        function blah() {
            userPass = Math.random();
        }

        blah();
    }

    (function () {
        var userPass = 'haslo123';    

        console.log(userPass);
        test();
        console.log(userPass);
    })();

    console.groupEnd();
console.groupEnd();