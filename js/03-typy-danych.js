console.group('Typy skalarne - proste');

    console.group('String - lancuchy znaków');
    var name = 'Jan\'sdfds\'';
    var pass = "Admin\"123\"";
    console.log(name);
    console.log(pass);
    console.log(typeof name);
    console.log(typeof pass);
    console.groupEnd();

    console.group('Number Liczby');
    var age = 18;
    var deg = -180;
    var footSize = 42.5;

    console.log(age);
    console.log(typeof age);
    console.log(deg);
    console.log(typeof deg);
    console.log(footSize);
    console.log(typeof footSize);
    console.groupEnd();

    console.group('Boolean - wartości logiczne');
    var isLoggedIn = true;
    var isAdmin = false;
    console.log(isLoggedIn, typeof isLoggedIn);
    console.log(isAdmin, typeof isAdmin);
    console.groupEnd();
console.groupEnd();

console.group('Typy złożone');
    console.group('Array (tablica)');

        var members = ['Jan', 'Joanna', 'Adam', 'Ewa'];
        var lastIndex = members.length -1;
        console.log(members, typeof members);
        console.log(members[0]);
        console.log(members.length);
        console.log(members[lastIndex]);

        members[1] = 'Andrzej';
        console.log(members);

        members.push('Jolanta'); //Dodaje na koniec do tablicy
        members.unshift('Marek'); //Na początku dodać do tablicy
        console.log(members);

        members.pop(); //Usuwa z konca
        members.shift(); //Usuwa z początku
        console.log(members);

        var multidimesionArr = [
            ['A', 'B', 'C'],
            ['I', 'II', 'III']
        ];
        console.log(multidimesionArr);

    console.groupEnd();

    console.group('Obiekty - object');
        var marek = {
            firstName: 'Marek',
            lastName: 'Nowak',
            age: 42,
            footSize: 42.5,
            hobbies: ['it', 'music', 'moves'],
            skills: ['html', 'css', 'js']
        };

        console.log(marek);
        console.log(marek.firstName);
        console.log(marek.hobbies);
        console.log(marek.hobbies[2]); //wyswietlamy drugie hobby

        marek.age = 50;
        console.log(marek.role); //przed nie ma zdefinowanej roli
        marek.role = 'admin'; //dodawanie
        console.log(marek.role);
        
        console.log(marek.footSize); //jest numer buta
        delete marek.footSize;
        console.log(marek.footSize); // nie ma nmeru
    console.groupEnd();

    console.group('Typy specjalne');
        console.group('Undefined - niezdefiniowane');
            var test;
            console.log(test, typeof test);
        console.groupEnd();

        console.group('Null - pusta');
            var fName = null;
            console.log(fName, typeof fName);
        console.groupEnd();

        console.group('NaN');
            var testB = 'test' /2;
            console.log(testB, typeof testB);
        console.groupEnd();
    console.groupEnd();

    console.group('Typowanie dynamiczne');

        var xyz = 'Ala ma kota';
        console.log(xyz, typeof xyz);

        var xyz = 123;
        console.log(xyz, typeof xyz);

        xyz = true;
        console.log(xyz, typeof xyz);

        xyz = ['Jan', 'Ewa'];
        console.log(xyz, typeof xyz);

        xyz = {status: 200, message: 'Komunikat'};
        console.log(xyz, typeof xyz);
    console.groupEnd();

console.groupEnd();

