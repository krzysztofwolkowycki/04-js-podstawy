// console.group('Przypadkowe użycie zmiennej globalnej traktowane jako błąd');
//     (function () {
//         "use strict";

//         // var b, c;

//         var a = 10;
//         c = 30;

//         function test() {
//             function alfa() {
//                 function beta() {
//                     b = 20;
//                 }

//                 beta();
//             }

//             alfa();
//         } 

//         console.log(a);
//         test();
//         console.log(b);
//     })();
// console.groupEnd();


// console.group('Próba nadpisania wbudowanych stałych/obiektów generuje wyjątek');
//     (function () {
//         "use strict";

//         console.log(NaN);
//         console.log(undefined);

//         // NaN = 10;
//         // undefined = 'To jest tekst';

//         console.log(NaN);
//         console.log(undefined);

//     })();
// console.groupEnd();

// console.group('Próba usuniecia/nadpisania zmiennej/funkcji generuje wyjątek');
//     (function () {
//         "use strict";

//         console.log(NaN);
//         console.log(undefined);
        
//         // delete NaN;
//         // delete undefined;

//         console.log(NaN);
//         console.log(undefined);

//         // eval = function () {
//         //     console.log('Funkcja eval nie jest dostępna...');
//         // };

//         eval("console.log('to jest kod');");
//     })();
// console.groupEnd();


// console.group('Argumenty (parametry) funkcji muszą posiadać unikalne nazwy');
//     (function () {
//         "use strict";

//         function test (a, b, a) {
//             console.log(a);
//             // console.log(b);
//             // console.log(c);
//         }

//         test(1, 2, 3);

//     })();
// console.groupEnd();


// console.group('Zmienne stworzone w funkcji eval nie są dostępne w programie');
//     (function () {
//         "use strict";

//         var a = 20;
//         var str = "var b = 10; a = 30";

//         eval(str);
//         // console.log(b);
//         console.log(a);

//     })();
// console.groupEnd();


console.group('Właściwości obiektu arguments nie są aliasowane');
    (function () {
        "use strict";

        function test (a, b, c) {
            console.log(arguments);
            console.log(a);
            console.log(b);
            console.log(c);


            a = 10;
            b = 20;
            c = 30;

            console.log(arguments);
            console.log(a);
            console.log(b);
            console.log(c);
        }

        test(1, 2 ,3);

    })();
console.groupEnd();