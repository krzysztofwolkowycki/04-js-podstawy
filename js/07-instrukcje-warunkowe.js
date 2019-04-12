console.group('If');
var userRole = 'moderator';
if ('admin' === userRole) {
    console.log('panel administratora');

} else if ('moderator' === userRole){
    console.log('panel moderaatora');

} else if ('user' === userRole) {
    console.log('panel uzytkownika');

} else {
    console.log('nie znana rola uzytkownika');
}


var correctNumber = 21;
var userNumber = 5;

if (userNumber === correctNumber){
    console.log('Trafiles liczbe');

} else if (userNumber < correctNumber){
    console.log('Podana liczba jest za mała, sprobuj ponownie');

} else {
    console.log('Podana liczba jest za duża, sprobuj ponownie');
}
console.log('koniec programu');
console.groupEnd();

console.group('Skrocony if');
var userAge = 15;
var hasAccess = userAge >= 18 ? 'Masz dostęp' : 'Jestes niepełnoletni';
console.log(hasAccess);

console.groupEnd();

console.group('Wartosci prawdziwe i falszywe');
    if (true){
        console.log('Prawda');
    } else{
        console.log('Fałsz');
    }
    /*
    Wartości prawdziwe:
    -true
    -każda liczba różna od 0
    -każdy niepusty ciąg znaków
    Wartości fałszywe:
    -false:
    -0
    -pusty ciąg znaków
    -undifined
    -null
    -NaN
    */
console.groupEnd();

console.group('switch..case');
switch (userRole) {
    case 'admin':
        console.log('Panel administratora');
        break;

    case 'moderator':
        console.log('Panel moderatora');
        break;

    case 'user':
        console.log('Panel uzytkownika');
        break;

    default:
        console.log('Nieznana rola');
}

console.groupEnd();

