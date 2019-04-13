console.group('Timeout');
    var t1Id = setTimeout(function () { 
        console.log('Komunikat po czasie');
    }, 1500);

    setTimeout(function () {
        console.log('Kolejny komunikat');
        clearTimeout(t1Id);
    }, 1600);

    console.log('koniec');
console.groupEnd();


console.group('Interval');
    var time = 10;

    var t2Id = setInterval(function () {
        if (0 === time) {
            console.log('Łubud!');
            clearInterval(t2Id);
        } else {
            console.log(time);
            time--;
        }
    }, 1000);
console.groupEnd();