function cube(number) {
    console.log(arguments);
    var result = number*number*number;
    return result;
} //definicji funckji nie potrzebny średnik
console.log(cube(5));
alert(cube(10));
var cubeOFsix = cube(6);
cube(2);

console.log(cubeOFsix);




function cube2(number, ratio) {
    console.log(arguments);
    var result = number*number*number;

    result *= ratio;

    return result;
}
cube2(8, .5);
cube2(2, .5);

console.group('Wyrazenie funkcyjne');
var square = function(a) {
    return a*a;

}; //potrzebny średnik, bo potrzebna przy wyrażeniu funkcyjnym
console.log(square(8));
console.log(square(2));
console.groupEnd();

console.group('Funkcje strzałkowe');
var sum = (a, b) => {
    return a+b;
};
console.log(sum(1, 2));
console.groupEnd();

console.group('Funkcja samowywołująca się');
( (message) => { //ewentualnie function(message) lub ze strzałką
    console.log('jupi! udalo');
    console.log(message);
})('To jest wiadomośc');
console.groupEnd();

console.group('Rekurencje');
function silnia(num) {
    if (1 == num){
        return num;
    }
    return num * silnia(num - 1);
}
console.log(silnia(4));
console.groupEnd();